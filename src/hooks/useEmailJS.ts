import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

interface EmailData {
  from_name: string;
  from_email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (emailData: EmailData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Validate required fields
      if (!emailData.from_name || !emailData.from_email || !emailData.subject || !emailData.message) {
        throw new Error('Please fill in all required fields');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailData.from_email)) {
        throw new Error('Please enter a valid email address');
      }

      // Check if EmailJS is properly configured
      if (EMAILJS_CONFIG.SERVICE_ID === 'your_service_id_here' || 
          EMAILJS_CONFIG.TEMPLATE_ID === 'your_template_id_here' || 
          EMAILJS_CONFIG.PUBLIC_KEY === 'your_public_key_here') {
        throw new Error('EmailJS is not properly configured. Please contact the website administrator.');
      }

      // Initialize EmailJS with public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Prepare template parameters
      const templateParams = {
        from_name: emailData.from_name,
        from_email: emailData.from_email,
        phone: emailData.phone || 'Not provided',
        subject: emailData.subject,
        message: emailData.message,
        to_email: EMAILJS_CONFIG.CONTACT_EMAIL
      };

      // Send email
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully:', response);
      return true;

    } catch (error) {
      console.error('Error sending email:', error);
      setError(error instanceof Error ? error.message : 'Failed to send email. Please try again.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendEmail,
    isLoading,
    error,
    clearError: () => setError(null)
  };
};
