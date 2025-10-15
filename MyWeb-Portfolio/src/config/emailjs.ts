// EmailJS Configuration
// Environment variables are loaded from .env file
// Make sure to prefix with VITE_ for Vite to expose them to the client

export const emailJSConfig = {
  serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Contact email from environment
export const contactEmail = import.meta.env.VITE_MY_EMAIL;

// Social links from environment  
export const socialLinks = {
  github: import.meta.env.VITE_GITHUB_URL,
  linkedin: import.meta.env.VITE_LINKEDIN_URL,
};

// Example template variables that should be configured in your EmailJS template:
// {{name}} - Sender's name
// {{email}} - Sender's email
// {{company}} - Sender's company
// {{title}} - Sender's job title/position
// {{subject}} - Email subject
// {{message}} - Email message
// {{time}} - Automatically generated timestamp (Thailand timezone)
// {{to_email}} - Your email (jojackchanah@gmail.com)