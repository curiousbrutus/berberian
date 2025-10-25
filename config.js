// Configuration file for Berberian Barbershop
// Update these values with your actual credentials

const CONFIG = {
    // Google Calendar API Configuration
    // Get your API key from: https://console.cloud.google.com/apis/credentials
    GOOGLE_API_KEY: 'YOUR_GOOGLE_API_KEY_HERE',
    
    // Calendar IDs for each barber (create separate Google Calendars)
    // Get calendar ID from calendar settings -> Integrate calendar
    CALENDARS: {
        barber1: {
            id: 'BARBER1_CALENDAR_ID@group.calendar.google.com',
            name: 'Ahmet Usta',
            email: 'barber1@example.com'
        },
        barber2: {
            id: 'BARBER2_CALENDAR_ID@group.calendar.google.com',
            name: 'Mehmet Usta',
            email: 'barber2@example.com'
        },
        barber3: {
            id: 'BARBER3_CALENDAR_ID@group.calendar.google.com',
            name: 'Ali Usta',
            email: 'barber3@example.com'
        }
    },
    
    // EmailJS Configuration (Free email service)
    // Sign up at: https://www.emailjs.com/
    EMAILJS: {
        SERVICE_ID: 'YOUR_EMAILJS_SERVICE_ID',
        TEMPLATE_ID: 'YOUR_EMAILJS_TEMPLATE_ID',
        PUBLIC_KEY: 'YOUR_EMAILJS_PUBLIC_KEY'
    },
    
    // Business hours (24-hour format)
    BUSINESS_HOURS: {
        start: '09:00',
        end: '19:00',
        slotDuration: 30, // minutes
        breakTime: {
            start: '13:00',
            end: '14:00'
        }
    },
    
    // Days of week (0 = Sunday, 6 = Saturday)
    WORKING_DAYS: [1, 2, 3, 4, 5, 6], // Monday to Saturday
    
    // Shop details
    SHOP: {
        name: 'Berberian Berber',
        address: 'İstiklal Cad. No:123, Beyoğlu, İstanbul',
        phone: '+90 212 XXX XX XX',
        email: 'info@berberian.com'
    }
};
