import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_g38ec7p'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_bcz85ky'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'CeLzE1UuoRe7cVa8M'; // Replace with your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'dekateanuj65@gmail.com', // Your email address
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Email sent successfully!'
      };
    } else {
      return {
        success: false,
        message: 'Failed to send email'
      };
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: 'Error sending email: ' + error.message
    };
  }
};

// Alternative method using a simple email template
export const sendSimpleEmail = async (formData) => {
  try {
    const emailContent = `
      New Contact Form Submission
      
      Name: ${formData.name}
      Email: ${formData.email}
      Subject: ${formData.subject}
      
      Message:
      ${formData.message}
      
      ---
      This message was sent from your portfolio website contact form.
    `;

    const templateParams = {
      to_email: 'dekateanuj65@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      subject: `Portfolio Contact: ${formData.subject}`,
      message: emailContent,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return {
      success: response.status === 200,
      message: response.status === 200 ? 'Email sent successfully!' : 'Failed to send email'
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: 'Error sending email: ' + error.message
    };
  }
}; 