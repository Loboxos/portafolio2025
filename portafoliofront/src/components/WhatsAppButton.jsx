import { MessageCircle } from 'lucide-react'
import '../styles/WhatsAppButton.css'

const WhatsAppButton = () => {
  const handleClick = () => {
    const numeroWhatsApp = '5493876050714' // Tu número sin espacios ni símbolos
    const mensaje = 'Hola Cristian, me interesa saber más sobre tus servicios.'
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`
    window.open(urlWhatsApp, '_blank')
  }

  return (
    <button 
      className="whatsapp-float-btn" 
      onClick={handleClick}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  )
}

export default WhatsAppButton

