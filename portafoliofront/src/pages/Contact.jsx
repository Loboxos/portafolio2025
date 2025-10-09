import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Send, CheckCircle, Twitter, Instagram, MessageCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Configuración de EmailJS
      const serviceId = 'service_i6mih25'
      const templateId = 'template_10ftbqi'
      const publicKey = 'TiPSP_G3CX9JD8_hU'
      
      // Parámetros para el template
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'vcristian528@gmail.com'
      }
      
      // Enviar email
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Resetear formulario después de 3 segundos
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 3000)
      
    } catch (error) {
      console.error('Error al enviar email:', error)
      setIsSubmitting(false)
      alert('Error al enviar el mensaje. Por favor, intenta de nuevo o usa WhatsApp.')
    }
  }

  const handleWhatsAppSend = () => {
    const mensaje = `Hola Cristian, me gustaría contactarte.%0A%0A*Nombre:* ${formData.name}%0A*Email:* ${formData.email}%0A*Asunto:* ${formData.subject}%0A%0A*Mensaje:*%0A${formData.message}`
    const numeroWhatsApp = '5493876050714' // Tu número sin espacios ni símbolos
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`
    window.open(urlWhatsApp, '_blank')
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vcristian528@gmail.com',
      link: 'mailto:vcristian528@gmail.com'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+54 9 387 6050714',
      link: 'tel:+5493876050714'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Salta, Argentina',
      link: null
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/cristianvilla15/',
      icon: Linkedin,
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/loboxos/',
      icon: Github,
      color: '#333'
    },
    {
      name: 'X',
      url: 'https://x.com/CristianVi15',
      icon: Twitter,
      color: '#000000'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/cristianvilla.1/',
      icon: Instagram,
      color: '#E4405F'
    },
    {
      name: 'Sitio Web',
      url: 'https://cvdev.io',
      icon: Globe,
      color: '#2563eb'
    }
  ]

  return (
    <div className="contact">
      <div className="container-wide">
        {/* Hero Section */}
        <section className="contact-hero">
          <h1>Contacto</h1>
          <p className="lead">
            ¿Tienes un proyecto en mente o quieres colaborar? 
            Estoy aquí para ayudarte a hacer realidad tus ideas.
          </p>
        </section>

        <div className="contact-content">
          {/* Información de Contacto */}
          <section className="contact-info-section">
            <h2>Información de Contacto</h2>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="info-icon">
                    <info.icon size={24} />
                  </div>
                  <div className="info-content">
                    <h3>{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="info-link">
                        {info.value}
                      </a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Redes Sociales */}
            <div className="social-links-section">
              <h3>Conecta conmigo</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                  >
                    <social.icon size={24} />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Formulario de Contacto */}
          <section className="contact-form-section">
            <h2>Envíame un Mensaje</h2>
            
            {isSubmitted ? (
              <div className="success-message">
                <CheckCircle size={48} />
                <h3>¡Mensaje Enviado!</h3>
                <p>Gracias por contactarme. Te responderé en breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Asunto *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Cuéntame más sobre tu proyecto o consulta..."
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar por Email
                      </>
                    )}
                  </button>

                  <button 
                    type="button" 
                    className="btn btn-whatsapp"
                    onClick={handleWhatsAppSend}
                    disabled={!formData.name || !formData.message}
                  >
                    <MessageCircle size={20} />
                    Enviar por WhatsApp
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>

        {/* CTA Section */}
        <section className="contact-cta">
          <div className="container-wide">
            <div className="cta-content">
              <h2>¿Listo para empezar tu proyecto?</h2>
              <p>
                Transformemos tu idea en una solución tecnológica que impulse tu negocio. 
                Estoy aquí para ayudarte en cada paso del proceso.
              </p>
              <div className="cta-actions">
                <a href="/projects" className="btn btn-secondary">
                  Ver Proyectos
                </a>
                <a href="/about" className="btn btn-primary">
                  Conoce más sobre mí
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
