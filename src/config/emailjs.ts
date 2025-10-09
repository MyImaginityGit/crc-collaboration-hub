// EmailJS Configuration
// You'll need to replace these with your actual EmailJS credentials
// Get these from your EmailJS account at https://emailjs.com

export const EMAILJS_CONFIG = {
  // Your EmailJS service ID
  SERVICE_ID: 'service_sf3na5b',
  
  // Your EmailJS template ID
  TEMPLATE_ID: 'template_6it0omo',
  
  // Your EmailJS public key
  PUBLIC_KEY: '9VWn8dRfw1bbO4k7v',
  
  // Contact form recipient email
  CONTACT_EMAIL: 'info@researchncollab.org'
};

// Template variables that will be used in your EmailJS template
export const EMAILJS_TEMPLATE_PARAMS = {
  from_name: '',
  from_email: '',
  phone: '',
  subject: '',
  message: '',
  to_email: EMAILJS_CONFIG.CONTACT_EMAIL
};
