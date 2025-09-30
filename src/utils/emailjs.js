import emailjs from 'emailjs-com'

// EmailJS configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key',
}

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
}

// Send email function
export const sendEmail = async (templateParams) => {
  try {
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    return { success: true, result }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, error }
  }
}

// Template parameter mapping function
export const mapFormDataToTemplate = (formData) => {
  return {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || '',
    company: formData.company || '',
    subject: formData.subject,
    message: formData.message,
    to_name: 'GL-B GROUP SARL',
    to_email: 'glbgroup10@gmail.com',
    reply_to: formData.email,
  }
}

export default EMAILJS_CONFIG