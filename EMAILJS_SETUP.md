# EmailJS Setup Instructions

This document provides step-by-step instructions for setting up EmailJS for the contact form.

## 1. Create EmailJS Account

1. Go to [emailjs.com](https://emailjs.com)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Gmail Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select "Gmail"
4. You'll need to:
   - Enable 2-Factor Authentication on your Gmail account
   - Generate an App Password (not your regular password)
   - Use the App Password in EmailJS setup

### Generating Gmail App Password:
1. Go to your Google Account settings
2. Security → 2-Step Verification (enable if not already)
3. Security → App passwords
4. Generate a new app password for "Mail"
5. Use this 16-character password in EmailJS

## 3. Create Email Template

1. In EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Use the following template variables:

### Template Variables:
```
{{from_name}} - sender's full name
{{from_email}} - sender's email
{{phone}} - phone number
{{subject}} - selected subject
{{message}} - message content
```

### Template Settings:
- **Template Name**: Contact Form Template
- **Subject**: New Contact Form Submission - {{subject}}
- **To Email**: info@researchncollab.org
- **Reply To**: {{from_email}}

### Email Template Content:
```
From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent via the CResCo website contact form.
```

## 4. Get Your Credentials

After setting up the service and template, you'll get:
- **Service ID**: Found in Email Services section
- **Template ID**: Found in Email Templates section  
- **Public Key**: Found in Account → API Keys

## 5. Configure Environment Variables

Create a `.env` file in your project root with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_CONTACT_EMAIL=info@researchncollab.org
```

## 6. Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check that emails are received at info@researchncollab.org

## Troubleshooting

### Emails go to wrong address:
- Check the "To Email" setting in your EmailJS template
- Ensure it's set to: info@researchncollab.org

### Authentication fails:
- Verify Gmail 2FA is enabled
- Check that you're using App Password (not regular password)
- Ensure the App Password is correctly entered in EmailJS

### Form shows "EmailJS not configured" error:
- Check that environment variables are properly set
- Restart your development server after adding environment variables
- Verify the credentials match what's in your EmailJS dashboard

## Security Notes

- Never commit your `.env` file to version control
- The public key can be exposed in frontend code (it's designed for this)
- Service ID and Template ID can also be public
- Keep your Gmail App Password secure

## Production Deployment

For production deployment:
1. Set the same environment variables in your hosting platform
2. For Vercel: Add to Environment Variables in project settings
3. For Netlify: Add to Site Settings → Environment Variables
4. For other platforms: Follow their environment variable documentation
