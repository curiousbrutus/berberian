# Setup Guide - Berberian Barbershop Booking System

This guide will help you set up your free barbershop booking system from scratch.

## Prerequisites

- A Google account
- A GitHub account (for free hosting)
- Basic understanding of copying and pasting

## Step-by-Step Setup (15 minutes)

### Step 1: Get Google Calendar API Key (5 minutes)

1. Go to https://console.cloud.google.com/
2. Click "Select a project" → "New Project"
3. Name it "Berberian Booking" → Create
4. Wait for project creation, then select it
5. Click "≡" menu → "APIs & Services" → "Library"
6. Search "Google Calendar API" → Click it → "Enable"
7. Click "≡" menu → "APIs & Services" → "Credentials"
8. Click "+ CREATE CREDENTIALS" → "API key"
9. Copy the API key (save it somewhere safe)
10. Click "RESTRICT KEY"
11. Under "API restrictions" → "Restrict key"
12. Select "Google Calendar API" → Save

### Step 2: Create Google Calendars for Each Barber (5 minutes)

1. Go to https://calendar.google.com/
2. For **Barber 1 (Ahmet)**:
   - Click "+" next to "Other calendars"
   - Select "Create new calendar"
   - Name: "Berberian - Ahmet Usta"
   - Time zone: (GMT+03:00) Istanbul
   - Create calendar
   
3. Repeat for **Barber 2 (Mehmet)** and **Barber 3 (Ali)**

4. For each calendar:
   - Click ⚙ (Settings) → Select the calendar
   - Scroll to "Integrate calendar"
   - Copy the **Calendar ID** (looks like: abc123@group.calendar.google.com)
   - Scroll to "Access permissions for events"
   - Check "Make available to public" → Warning → OK
   - IMPORTANT: Select "See only free/busy (hide details)"

### Step 3: Setup EmailJS (3 minutes)

1. Go to https://www.emailjs.com/
2. Sign up (free)
3. Add Email Service:
   - Click "Add New Service"
   - Choose Gmail (or your preferred email)
   - Connect your email account
   - Service ID will be shown (save it)
   
4. Create Email Template:
   - Click "Email Templates" → "Create New Template"
   - Name: "Appointment Confirmation"
   - Template content:

```
Subject: Randevu Onayı - {{barber_name}}

Merhaba {{customer_name}},

Randevunuz başarıyla oluşturuldu! ✅

📅 Tarih: {{date}}
🕐 Saat: {{time}}  
💈 Berber: {{barber_name}}
✂️ Hizmet: {{service}}
📞 Telefon: {{phone}}

Görüşmek üzere!

Berberian Berber
```

   - Save and copy Template ID
   - Go to "Account" → Copy your Public Key

### Step 4: Configure Your Website (2 minutes)

1. Open `config.js` file
2. Replace these values:

```javascript
// Paste your Google API Key from Step 1
GOOGLE_API_KEY: 'YOUR_GOOGLE_API_KEY_HERE',

// Paste Calendar IDs from Step 2
CALENDARS: {
    barber1: {
        id: 'PASTE_CALENDAR_ID_1_HERE@group.calendar.google.com',
        name: 'Ahmet Usta',  // Change name if needed
        email: 'ahmet@youremail.com'  // Barber's email
    },
    barber2: {
        id: 'PASTE_CALENDAR_ID_2_HERE@group.calendar.google.com',
        name: 'Mehmet Usta',
        email: 'mehmet@youremail.com'
    },
    barber3: {
        id: 'PASTE_CALENDAR_ID_3_HERE@group.calendar.google.com',
        name: 'Ali Usta',
        email: 'ali@youremail.com'
    }
},

// Paste EmailJS credentials from Step 3
EMAILJS: {
    SERVICE_ID: 'PASTE_SERVICE_ID',
    TEMPLATE_ID: 'PASTE_TEMPLATE_ID',
    PUBLIC_KEY: 'PASTE_PUBLIC_KEY'
}
```

3. Update shop details:

```javascript
SHOP: {
    name: 'Berberian Berber',  // Your shop name
    address: 'Your shop address',
    phone: '+90 XXX XXX XX XX',  // Your phone
    email: 'info@yourshop.com'
}
```

### Step 5: Deploy to GitHub Pages (Free Hosting)

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name: "berberian" (or any name)
   - Public
   - Create repository

2. Upload your files:
   - Click "uploading an existing file"
   - Drag and drop all files (index.html, styles.css, app.js, config.js)
   - Commit changes

3. Enable GitHub Pages:
   - Go to Settings → Pages
   - Source: "main" branch
   - Save
   - Your site will be live at: `https://yourusername.github.io/berberian/`

### Step 6: Create QR Code

1. Go to https://www.qr-code-generator.com/
2. Select "URL"
3. Paste your GitHub Pages URL
4. Customize colors if desired
5. Download PNG
6. Print and display in your shop

## Testing Your Setup

1. Open your website
2. Select a barber
3. Choose a date and time
4. Fill in contact information
5. Submit
6. Check:
   - Google Calendar has the appointment
   - Email was received
   - Available slots updated

## Common Issues

### "API not loaded" error
- Check that your API key is correct
- Make sure Google Calendar API is enabled in Cloud Console

### No available slots showing
- Make sure calendars are set to "public" with "free/busy" access
- Check Calendar IDs are correct

### Email not sending
- Verify EmailJS credentials
- Check email service is connected
- Confirm template exists

### Website not loading on GitHub Pages
- Wait 5-10 minutes after enabling Pages
- Check repository is public
- Ensure all files are in root directory

## Customization Ideas

- Change colors in `styles.css`
- Add more services in `index.html`
- Adjust working hours in `config.js`
- Add holidays/closed dates
- Add multiple languages

## Cost Breakdown

- GitHub Pages: **FREE** ✅
- Google Calendar API: **FREE** (unlimited) ✅
- EmailJS: **FREE** (200 emails/month) ✅
- Total Monthly Cost: **₺0** 🎉

## Next Steps

1. Add website link to Google Maps listing
2. Print QR code for shop window
3. Share link on social media
4. Add to business cards

## Support

If you need help:
1. Check browser console (F12) for error messages
2. Verify all credentials in config.js
3. Test each component separately
4. Review the README.md file

---

**Congratulations!** 🎉 Your free booking system is ready!
