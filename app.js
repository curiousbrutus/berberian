// Main application logic for Berberian Barbershop

// Initialize Google API
let gapiLoaded = false;
let calendarLoaded = false;

// Load Google API
function loadGoogleAPI() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
        gapi.load('client', initializeGapiClient);
    };
    document.head.appendChild(script);
}

// Initialize Google Calendar API client
async function initializeGapiClient() {
    try {
        await gapi.client.init({
            apiKey: CONFIG.GOOGLE_API_KEY,
            discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        });
        gapiLoaded = true;
        calendarLoaded = true;
        console.log('Google Calendar API initialized successfully');
    } catch (error) {
        console.error('Error initializing Google Calendar API:', error);
        showMessage('API başlatma hatası. Lütfen daha sonra tekrar deneyin.', 'error');
    }
}

// Load EmailJS
function loadEmailJS() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = () => {
        emailjs.init(CONFIG.EMAILJS.PUBLIC_KEY);
        console.log('EmailJS initialized successfully');
    };
    document.head.appendChild(script);
}

// Generate time slots for a day
function generateTimeSlots() {
    const slots = [];
    const start = CONFIG.BUSINESS_HOURS.start.split(':');
    const end = CONFIG.BUSINESS_HOURS.end.split(':');
    const breakStart = CONFIG.BUSINESS_HOURS.breakTime.start.split(':');
    const breakEnd = CONFIG.BUSINESS_HOURS.breakTime.end.split(':');
    
    let currentHour = parseInt(start[0]);
    let currentMinute = parseInt(start[1]);
    const endHour = parseInt(end[0]);
    const endMinute = parseInt(end[1]);
    
    while (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute)) {
        const timeStr = `${String(currentHour).padStart(2, '0')}:${String(currentMinute).padStart(2, '0')}`;
        
        // Check if time is not in break time
        const isBreakTime = (currentHour > parseInt(breakStart[0]) || 
                            (currentHour === parseInt(breakStart[0]) && currentMinute >= parseInt(breakStart[1]))) &&
                           (currentHour < parseInt(breakEnd[0]) || 
                            (currentHour === parseInt(breakEnd[0]) && currentMinute < parseInt(breakEnd[1])));
        
        if (!isBreakTime) {
            slots.push(timeStr);
        }
        
        currentMinute += CONFIG.BUSINESS_HOURS.slotDuration;
        if (currentMinute >= 60) {
            currentHour += 1;
            currentMinute = 0;
        }
    }
    
    return slots;
}

// Populate time dropdown
function populateTimeSlots() {
    const timeSelect = document.getElementById('time');
    const slots = generateTimeSlots();
    
    timeSelect.innerHTML = '<option value="">Saat seçin...</option>';
    slots.forEach(slot => {
        const option = document.createElement('option');
        option.value = slot;
        option.textContent = slot;
        timeSelect.appendChild(option);
    });
}

// Get events from calendar
async function getCalendarEvents(calendarId, date) {
    if (!calendarLoaded) {
        console.warn('Calendar API not loaded yet');
        return [];
    }
    
    try {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);
        
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);
        
        const response = await gapi.client.calendar.events.list({
            calendarId: calendarId,
            timeMin: startOfDay.toISOString(),
            timeMax: endOfDay.toISOString(),
            singleEvents: true,
            orderBy: 'startTime',
        });
        
        return response.result.items || [];
    } catch (error) {
        console.error('Error fetching calendar events:', error);
        return [];
    }
}

// Check if slot is available
function isSlotAvailable(time, events, date) {
    const [hours, minutes] = time.split(':');
    const slotStart = new Date(date);
    slotStart.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    const slotEnd = new Date(slotStart);
    slotEnd.setMinutes(slotEnd.getMinutes() + CONFIG.BUSINESS_HOURS.slotDuration);
    
    for (const event of events) {
        const eventStart = new Date(event.start.dateTime || event.start.date);
        const eventEnd = new Date(event.end.dateTime || event.end.date);
        
        // Check if slot overlaps with event
        if (slotStart < eventEnd && slotEnd > eventStart) {
            return false;
        }
    }
    
    return true;
}

// Display available slots
async function displayAvailableSlots() {
    const barberSelect = document.getElementById('barber');
    const dateInput = document.getElementById('date');
    const slotsContainer = document.getElementById('availableSlots');
    
    if (!barberSelect.value || !dateInput.value) {
        slotsContainer.innerHTML = '<p>Lütfen bir tarih ve berber seçin...</p>';
        return;
    }
    
    const selectedBarber = CONFIG.CALENDARS[barberSelect.value];
    const selectedDate = new Date(dateInput.value);
    
    // Check if selected day is a working day
    if (!CONFIG.WORKING_DAYS.includes(selectedDate.getDay())) {
        slotsContainer.innerHTML = '<p>Bu gün çalışma günü değil.</p>';
        return;
    }
    
    slotsContainer.innerHTML = '<p>Müsait saatler yükleniyor...</p>';
    
    const events = await getCalendarEvents(selectedBarber.id, dateInput.value);
    const timeSlots = generateTimeSlots();
    
    slotsContainer.innerHTML = '';
    
    timeSlots.forEach(slot => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'slot-button';
        button.textContent = slot;
        
        if (!isSlotAvailable(slot, events, dateInput.value)) {
            button.classList.add('unavailable');
            button.disabled = true;
        } else {
            button.addEventListener('click', () => {
                document.getElementById('time').value = slot;
                // Scroll to form
                document.getElementById('appointmentForm').scrollIntoView({ behavior: 'smooth' });
            });
        }
        
        slotsContainer.appendChild(button);
    });
}

// Create calendar event
async function createCalendarEvent(calendarId, eventDetails) {
    if (!calendarLoaded) {
        throw new Error('Calendar API not loaded');
    }
    
    try {
        const response = await gapi.client.calendar.events.insert({
            calendarId: calendarId,
            resource: eventDetails,
        });
        
        return response.result;
    } catch (error) {
        console.error('Error creating calendar event:', error);
        throw error;
    }
}

// Send email notification
async function sendEmailNotification(appointmentData) {
    try {
        const templateParams = {
            to_email: appointmentData.customerEmail,
            barber_email: appointmentData.barberEmail,
            customer_name: appointmentData.customerName,
            barber_name: appointmentData.barberName,
            date: appointmentData.date,
            time: appointmentData.time,
            service: appointmentData.service,
            phone: appointmentData.customerPhone,
        };
        
        await emailjs.send(
            CONFIG.EMAILJS.SERVICE_ID,
            CONFIG.EMAILJS.TEMPLATE_ID,
            templateParams
        );
        
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        // Don't throw error - email is not critical
    }
}

// Show message to user
function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
    
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

// Handle form submission
async function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const barberId = formData.get('barber');
    const date = formData.get('date');
    const time = formData.get('time');
    const customerName = formData.get('customerName');
    const customerEmail = formData.get('customerEmail');
    const customerPhone = formData.get('customerPhone');
    const service = formData.get('service');
    
    const selectedBarber = CONFIG.CALENDARS[barberId];
    
    // Show loading
    document.getElementById('loading').style.display = 'block';
    document.getElementById('message').style.display = 'none';
    form.style.display = 'none';
    
    try {
        // Create event details
        const [hours, minutes] = time.split(':');
        const startDateTime = new Date(date);
        startDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
        
        const endDateTime = new Date(startDateTime);
        endDateTime.setMinutes(endDateTime.getMinutes() + CONFIG.BUSINESS_HOURS.slotDuration);
        
        const eventDetails = {
            summary: `${service} - ${customerName}`,
            description: `Müşteri: ${customerName}\nTelefon: ${customerPhone}\nE-posta: ${customerEmail}\nHizmet: ${service}`,
            start: {
                dateTime: startDateTime.toISOString(),
                timeZone: 'Europe/Istanbul',
            },
            end: {
                dateTime: endDateTime.toISOString(),
                timeZone: 'Europe/Istanbul',
            },
            attendees: [
                { email: customerEmail }
            ],
        };
        
        // Create calendar event
        await createCalendarEvent(selectedBarber.id, eventDetails);
        
        // Send email notification
        const appointmentData = {
            customerEmail,
            barberEmail: selectedBarber.email,
            customerName,
            barberName: selectedBarber.name,
            date: new Date(date).toLocaleDateString('tr-TR'),
            time,
            service,
            customerPhone,
        };
        
        await sendEmailNotification(appointmentData);
        
        // Show success message
        showMessage('✅ Randevunuz başarıyla oluşturuldu! E-posta adresinize onay gönderildi.', 'success');
        
        // Reset form
        form.reset();
        displayAvailableSlots();
        
    } catch (error) {
        console.error('Error creating appointment:', error);
        showMessage('❌ Randevu oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.', 'error');
    } finally {
        document.getElementById('loading').style.display = 'none';
        form.style.display = 'block';
    }
}

// Set minimum date to today
function setMinDate() {
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    
    // Set max date to 30 days from now
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    dateInput.max = maxDate.toISOString().split('T')[0];
}

// Initialize application
function initApp() {
    // Load APIs
    loadGoogleAPI();
    loadEmailJS();
    
    // Setup form
    populateTimeSlots();
    setMinDate();
    
    // Event listeners
    const form = document.getElementById('appointmentForm');
    form.addEventListener('submit', handleFormSubmit);
    
    const barberSelect = document.getElementById('barber');
    const dateInput = document.getElementById('date');
    
    barberSelect.addEventListener('change', displayAvailableSlots);
    dateInput.addEventListener('change', displayAvailableSlots);
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
