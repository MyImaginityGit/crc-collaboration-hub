// EmailJS Configuration
// You'll need to replace these with your actual EmailJS credentials
// Get these from your EmailJS account at https://emailjs.com

export const EMAILJS_CONFIG = {
  // Replace with your actual EmailJS service ID
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id_here',
  
  // Replace with your actual EmailJS template ID
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id_here',
  
  // Replace with your actual EmailJS public key
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key_here',
  
  // Contact form recipient email
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL || 'info@researchncollab.org'
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
