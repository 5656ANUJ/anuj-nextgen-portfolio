# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form submissions directly to your email.

## 🚀 Step-by-Step Setup

### 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your email account (dekateanuj65@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```html
Subject: Portfolio Contact: {{subject}}

New message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to: {{reply_to}}
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (e.g., `user_def456`)

### 5. Update Configuration

Edit `src/lib/emailService.js` and replace the placeholder values:

```javascript
const EMAILJS_SERVICE_ID = 'service_abc123'; // Your actual service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789'; // Your actual template ID
const EMAILJS_PUBLIC_KEY = 'user_def456'; // Your actual public key
```

### 6. Test the Setup

1. Start your development server: `npm run dev`
2. Go to the contact form
3. Fill out and submit the form
4. Check your email (dekateanuj65@gmail.com) for the message

## 📧 Email Template Options

### Option 1: Simple Text Template
Use the template above for a clean, simple format.

### Option 2: HTML Template
For a more professional look:

```html
Subject: Portfolio Contact: {{subject}}

<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .header { background: #667eea; color: white; padding: 20px; }
        .content { padding: 20px; }
        .field { margin: 10px 0; }
        .label { font-weight: bold; color: #333; }
    </style>
</head>
<body>
    <div class="header">
        <h2>New Portfolio Contact</h2>
    </div>
    <div class="content">
        <div class="field">
            <span class="label">Name:</span> {{from_name}}
        </div>
        <div class="field">
            <span class="label">Email:</span> {{from_email}}
        </div>
        <div class="field">
            <span class="label">Subject:</span> {{subject}}
        </div>
        <div class="field">
            <span class="label">Message:</span><br>
            {{message}}
        </div>
        <hr>
        <p><em>This message was sent from your portfolio contact form.</em></p>
    </div>
</body>
</html>
```

## 🔧 Advanced Configuration

### Environment Variables (Recommended)
For security, use environment variables:

1. Create `.env` file in project root:
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_def456
```

2. Update `src/lib/emailService.js`:
```javascript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

### Multiple Email Templates
You can create different templates for different purposes:
- General inquiries
- Project proposals
- Job opportunities
- Collaboration requests

## 📊 EmailJS Plans

### Free Plan (Recommended for portfolios)
- 200 emails per month
- Basic templates
- Gmail, Outlook, Yahoo support

### Paid Plans
- $15/month: 1,000 emails
- $35/month: 5,000 emails
- Custom plans available

## 🛡️ Security Best Practices

1. **Never expose private keys** in client-side code
2. **Use environment variables** for sensitive data
3. **Enable CORS** in EmailJS dashboard
4. **Set up rate limiting** to prevent spam
5. **Monitor email usage** regularly

## 🚨 Troubleshooting

### Common Issues:

1. **"Service not found"**
   - Check Service ID spelling
   - Ensure service is properly connected

2. **"Template not found"**
   - Verify Template ID
   - Check template is published

3. **"Invalid public key"**
   - Confirm Public Key is correct
   - Check account status

4. **Emails not received**
   - Check spam folder
   - Verify email service connection
   - Test with EmailJS dashboard

### Support:
- EmailJS Documentation: [docs.emailjs.com](https://docs.emailjs.com/)
- EmailJS Community: [community.emailjs.com](https://community.emailjs.com/)

## ✅ Success Checklist

- [ ] EmailJS account created
- [ ] Email service connected
- [ ] Template created and saved
- [ ] Configuration updated in code
- [ ] Test email sent successfully
- [ ] Email received in inbox
- [ ] Reply functionality working

---

**Your contact form is now ready to send emails directly to your inbox! 🎉** 