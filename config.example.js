// Example configuration - Copy this to config.js and fill in your actual values
// DO NOT commit your actual API keys to git!

const CONFIG = {
    // Get your API key from: https://console.cloud.google.com/apis/credentials
    GOOGLE_API_KEY: 'AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    
    // Get calendar IDs from: https://calendar.google.com/ -> Settings -> Integrate calendar
    CALENDARS: {
        barber1: {
            id: 'abc123def456@group.calendar.google.com',
            name: 'Ahmet Usta',
            email: 'barber1@example.com'
        },
        barber2: {
            id: 'ghi789jkl012@group.calendar.google.com',
            name: 'Mehmet Usta',
            email: 'barber2@example.com'
        },
        barber3: {
            id: 'mno345pqr678@group.calendar.google.com',
            name: 'Ali Usta',
            email: 'barber3@example.com'
        }
    },
    
    // Get from: https://www.emailjs.com/
    EMAILJS: {
        SERVICE_ID: 'service_xxxxxxx',
        TEMPLATE_ID: 'template_xxxxxxx',
        PUBLIC_KEY: 'xxxxxxxxxxxxxxxx'
    },
    
    BUSINESS_HOURS: {
        start: '09:00',
        end: '19:00',
        slotDuration: 30,
        breakTime: {
            start: '13:00',
            end: '14:00'
        }
    },
    
    WORKING_DAYS: [1, 2, 3, 4, 5, 6], // Monday to Saturday
    
    SHOP: {
        name: 'Berberian Berber',
        address: 'İstiklal Cad. No:123, Beyoğlu, İstanbul',
        phone: '+90 212 XXX XX XX',
        email: 'info@berberian.com'
    }
};
