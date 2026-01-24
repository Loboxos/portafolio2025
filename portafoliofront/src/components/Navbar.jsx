import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import '../styles/Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Sobre Mí' },
    { path: '/projects', label: 'Proyectos' },
    { path: '/caso-losprimos2', label: 'Caso Los Primos2' },
    { path: '/experience', label: 'Experiencia' },
    { path: '/contact', label: 'Contacto' }
  ]

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <div className="container-wide navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img src="/logo2.png" alt="SGS Logo" className="brand-logo" />
          <span className="brand-hover-text">Soluciones de Gestión Santos</span>
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
