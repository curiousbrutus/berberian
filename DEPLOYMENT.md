# GitHub Pages Deployment Guide

This guide will help you deploy your Berberian Barbershop booking system to GitHub Pages for **FREE hosting**.

## Prerequisites

- Completed setup (config.js filled with your credentials)
- GitHub account

## Step 1: Prepare Your Files

Make sure all your files are ready:
- ✅ `config.js` has your actual API keys (not placeholder values)
- ✅ All barber names are updated in `index.html` if you changed them
- ✅ Shop details in `config.js` are correct

## Step 2: Create GitHub Repository

### Option A: Use This Repository (Fork)
1. Click "Fork" button at the top right
2. Your fork will be created at `github.com/YOUR_USERNAME/berberian`

### Option B: Create New Repository
1. Go to https://github.com/new
2. Repository name: `berberian` (or any name you prefer)
3. Description: "Free barbershop booking system"
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

## Step 3: Upload Your Files

### Using GitHub Web Interface (Easiest)
1. Go to your repository
2. Click "Add file" → "Upload files"
3. Drag and drop all files from your computer:
   - index.html
   - styles.css
   - app.js
   - config.js (with your real credentials)
   - config.example.js
   - test.html
   - 404.html
   - robots.txt
   - README.md
   - SETUP_GUIDE.md
   - QUICKSTART.md
   - FAQ.md
   - LICENSE
   - .gitignore
4. Commit message: "Deploy barbershop booking system"
5. Click "Commit changes"

### Using Git Command Line (Advanced)
```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/berberian.git
cd berberian

# Copy all files to this directory

# Add and commit
git add .
git commit -m "Deploy barbershop booking system"
git push origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (gear icon)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source":
   - Branch: Select `main` (or `master`)
   - Folder: Select `/ (root)`
5. Click "Save"

## Step 5: Wait for Deployment

1. GitHub will build your site (takes 1-5 minutes)
2. A message will appear: "Your site is ready to be published at `https://YOUR_USERNAME.github.io/berberian/`"
3. Wait a few more minutes for DNS propagation
4. Visit your site!

## Step 6: Test Your Site

1. Visit `https://YOUR_USERNAME.github.io/berberian/`
2. You should see the barbershop booking page
3. Click on "test.html" or visit `https://YOUR_USERNAME.github.io/berberian/test.html`
4. Click "Testleri Çalıştır" to verify everything works

## Step 7: Update robots.txt (Optional)

1. Edit `robots.txt` on GitHub
2. Replace `yourusername` with your actual GitHub username
3. Commit the change

## Your Live URLs

After deployment, your site will be available at:
- **Main Site:** `https://YOUR_USERNAME.github.io/berberian/`
- **Test Page:** `https://YOUR_USERNAME.github.io/berberian/test.html`

## Create QR Code

1. Copy your main site URL
2. Go to https://www.qr-code-generator.com/
3. Paste URL
4. Customize design if desired
5. Download and print

## Custom Domain (Optional - Still Free!)

Want to use your own domain like `randevu.berberianberber.com`?

1. Buy a domain (not free, but cheap ~$10/year)
2. In your repository Settings → Pages
3. Enter your custom domain
4. Follow GitHub's instructions to configure DNS

OR use a free subdomain service like:
- Freenom (free domains)
- Cloudflare Pages (free with custom domain)

## Updating Your Site

To update your site after deployment:

1. Make changes to files locally
2. Go to GitHub repository
3. Click on the file you want to edit
4. Click the pencil icon (Edit)
5. Make your changes
6. Commit changes
7. Wait 1-2 minutes for changes to deploy

## Troubleshooting

### Site shows 404
- Wait 5-10 minutes after enabling Pages
- Check that repository is Public
- Verify Pages is enabled in Settings

### Site loads but booking doesn't work
- Check `config.js` has correct credentials
- Visit test.html to see specific errors
- Check browser console (F12) for error messages

### Changes not showing
- Wait 2-5 minutes for GitHub Pages to rebuild
- Clear browser cache (Ctrl+F5)
- Check you committed the changes

## Maintenance

### Monthly Tasks
- Check that EmailJS is still under free limit (200 emails/month)
- Review bookings in Google Calendar
- Test booking flow

### When You Reach Email Limit
Either:
- Upgrade EmailJS to paid plan (~$5-10/month for 1000 emails)
- Reduce email notifications
- Use a different email service

## Security Notes

⚠️ **Important:** Your API keys will be visible in the `config.js` file since this is a client-side application.

**To minimize risk:**
1. Restrict your Google API key to only Calendar API
2. Use API key restrictions in Google Cloud Console
3. Set HTTP referrer restrictions to your GitHub Pages domain
4. Never commit private/secret API keys

For sensitive business use, consider using a backend server.

## Next Steps

1. ✅ Share your booking site URL
2. ✅ Add to Google Maps business listing
3. ✅ Print QR code for shop window
4. ✅ Share on social media
5. ✅ Add to business cards
6. ✅ Monitor bookings daily

## Cost Summary

| Service | Monthly Cost |
|---------|--------------|
| GitHub Pages Hosting | **FREE** ✅ |
| Google Calendar API | **FREE** ✅ |
| EmailJS (200 emails) | **FREE** ✅ |
| **Total** | **₺0** 🎉 |

## Congratulations! 🎉

Your free barbershop booking system is now live and ready to accept appointments!

**Your site:** `https://YOUR_USERNAME.github.io/berberian/`

---

Need help? Check:
- [README.md](README.md) - Full documentation
- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Detailed setup
- [FAQ.md](FAQ.md) - Common questions
