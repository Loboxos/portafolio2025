import { ArrowRight, Code, Database, Server } from 'lucide-react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container-wide hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Soluciones de Gestión Santos
            </h1>
            <p className="hero-subtitle">
              Desarrollador de software especializado en sistemas de gestión empresarial
            </p>
            <p className="hero-description">
              Creo soluciones tecnológicas que optimizan procesos empresariales, 
              con experiencia en Django REST Framework ,React y MySQL.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                Ver Proyectos
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contactar
              </Link>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="tech-stack">
              <div className="tech-item">
                <Code size={32} />
                <span>React</span>
              </div>
              <div className="tech-item">
                <Database size={32} />
                <span>Django</span>
              </div>
              <div className="tech-item">
                <Server size={32} />
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats">
        <div className="container-wide stats-container">
          <div className="stat-item">
            <h3>2+</h3>
            <p>Años de Experiencia</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Proyectos Completados</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Certificaciones</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Compromiso</p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container-wide services-container">
          <h2>Servicios Principales</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Desarrollo Web</h3>
              <p>Aplicaciones web modernas con React y Django</p>
            </div>
            <div className="service-card">
              <h3>Sistemas de Gestión</h3>
              <p>Soluciones personalizadas para empresas</p>
            </div>
            <div className="service-card">
              <h3>Integraciones y Automatización</h3>
              <p>APIs e integraciones que conectan tus sistemas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
