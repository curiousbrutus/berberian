# Berberian Barbershop - Quick Start

## What is this?
A **completely FREE** appointment booking website for barbershops in Turkey. Features:
- 📅 3 barbers with separate Google Calendar schedules
- 📧 Automatic email confirmations
- 📱 Mobile-friendly interface
- 🔗 Works with QR codes
- 🆓 Zero monthly costs

## Fast Setup (15 minutes)

### 1. Google Calendar API
- Visit: https://console.cloud.google.com/
- Create new project → Enable "Google Calendar API"
- Create API key → Copy it

### 2. Create 3 Calendars
- Visit: https://calendar.google.com/
- Create 3 new calendars (one per barber)
- Make each public (free/busy only)
- Copy each Calendar ID

### 3. Email Setup
- Sign up: https://www.emailjs.com/ (free)
- Connect your Gmail
- Create template
- Copy Service ID, Template ID, Public Key

### 4. Configure
- Edit `config.js`
- Paste your API key, Calendar IDs, EmailJS credentials
- Update shop name/address

### 5. Deploy (Free Hosting)
- Upload to GitHub
- Enable GitHub Pages
- Done! Your site is live

### 6. Create QR Code
- Use: https://www.qr-code-generator.com/
- Enter your site URL
- Print and display

## Files
- `index.html` - Main website
- `styles.css` - Design
- `app.js` - Booking logic
- `config.js` - Your settings (fill this in!)
- `SETUP_GUIDE.md` - Detailed instructions
- `README.md` - Full documentation

## Need Help?
Read `SETUP_GUIDE.md` for detailed step-by-step instructions.

## Cost
**₺0/month** - Everything is free! ✨
