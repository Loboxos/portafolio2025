import { Mail, Linkedin, Github, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container-wide footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Soluciones de Gestión Santos</h3>
            <p>Desarrollador de software especializado en soluciones de gestión empresarial</p>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="contact-links">
              <a href="mailto:vcristian528@gmail.com" className="contact-link">
                <Mail size={16} />
                <span>vcristian528@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/cristianvilla15/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/loboxos/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a href="https://cvdev.io" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Globe size={16} />
                <span>cvdev.io</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} SGS Soluciones de Gestión Santos. Todos los derechos reservados.</p>
          <div className="footer-links">
            <Link to="/privacy-policy" className="footer-link">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
