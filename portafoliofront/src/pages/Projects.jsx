import { useState } from 'react'
import { Filter, Code, Database, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import { PLACEHOLDER_IMAGES } from '../config/images'
import '../styles/Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('todos')
  const [currentImageIndexes, setCurrentImageIndexes] = useState({})

  const projects = [
    {
      id: 1,
      title: 'Los Primos2',
      description: 'Sistema de gestión integral para mueblería con control de inventario, ventas, clientes y proveedores.',
      images: [
        '/losprimos2/losprimos20.png',
        '/losprimos2/losprimos21.png',
        '/losprimos2/losprimos22.png'
      ],
      category: 'sistemas',
      technologies: ['Django', 'React', 'PostgreSQL', 'Bootstrap'],
      featured: true
    },
    {
      id: 2,
      title: 'Focus',
      description: 'Sistema de gestión de turnos para estudio de tatuajes con agenda digital, recordatorios y seguimiento de clientes.',
      images: [
        '/focus/focus0.png',
        '/focus/focus1.png',
        '/focus/focus2.png'
      ],
      category: 'sistemas',
      technologies: ['React', 'Django REST', 'PostgreSQL', 'Calendar API'],
      featured: true
    },
    {
      id: 3,
      title: 'ITBank',
      description: 'Simulación de billetera virtual con transferencias, pagos, historial de transacciones y gestión de saldos.',
      images: [
        '/itbank/itbank0.png',
        '/itbank/itbank1.png',
        '/itbank/itbank2.png'
      ],
      category: 'fintech',
      technologies: ['React', 'Django', 'PostgreSQL', 'JWT'],
      featured: true
    },
    {
      id: 4,
      title: 'Borgest',
      description: 'Sistema de gestión empresarial completo con módulos de facturación, inventario, recursos humanos y reportes.',
      images: [
        '/borgest/borgest0.png',
        '/borgest/borgest1.png',
        '/borgest/borgest2.png'
      ],
      category: 'sistemas',
      technologies: ['Django', 'React', 'PostgreSQL', 'Docker'],
      featured: false
    },
    {
      id: 5,
      title: 'SERVIFY',
      description: 'Plataforma para contratar y ofrecer servicios con sistema de calificaciones, pagos y comunicación entre usuarios.',
      images: [
        '/servify/servify0.png',
        '/servify/servify1.png',
        '/servify/servify2.png'
      ],
      category: 'marketplace',
      technologies: ['React', 'Django REST', 'PostgreSQL', 'Stripe'],
      featured: false
    },
    {
      id: 6,
      title: 'El Tributo',
      description: 'Página web de noticias con sistema de gestión de contenido, categorías, comentarios y administración editorial.',
      images: [
        '/eltributo/eltributo0.png',
        '/eltributo/eltributo1.png',
        '/eltributo/eltributo2.png'
      ],
      category: 'web',
      technologies: ['React', 'Django', 'PostgreSQL', 'Rich Text Editor'],
      featured: false
    },
    {
      id: 7,
      title: 'Portafolios Web Profesionales',
      description: 'Desarrollo de portafolios web personalizados para profesionales y emprendedores. Diseños modernos, responsivos y optimizados para mostrar servicios, experiencia y proyectos de forma impactante.',
      images: [
        '/portafolios/portafolio0.png'
      ],
      category: 'web',
      technologies: ['React', 'Vite', 'CSS3', 'Responsive Design'],
      featured: true
    },
    {
      id: 8,
      title: 'Sistema de Sorteos y Rifas',
      description: 'Plataforma completa para la gestión y realización de sorteos y rifas solidarias. Incluye gestión de participantes, sorteos aleatorios, seguimiento de ganadores y panel de administración para organizaciones benéficas y eventos solidarios.',
      images: [
        '/sorteo/sorteo0.png',
        '/sorteo/sorteo1.png',
        '/sorteo/sorteo3.png'
      ],
      category: 'sistemas',
      technologies: ['Django REST', 'React', 'MySQL', 'Docker'],
      featured: true
    }
  ]

  const filters = [
    { id: 'todos', label: 'Todos', icon: Filter },
    { id: 'sistemas', label: 'Sistemas', icon: Database },
    { id: 'web', label: 'Web', icon: Globe },
    { id: 'fintech', label: 'Fintech', icon: Code },
    { id: 'marketplace', label: 'Marketplace', icon: Globe }
  ]

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const nextImage = (projectId, imagesLength) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imagesLength
    }))
  }

  const prevImage = (projectId, imagesLength) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + imagesLength) % imagesLength
    }))
  }

  const setImageIndex = (projectId, index) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [projectId]: index
    }))
  }


  return (
    <div className="projects">
        {/* Hero Section */}
        <section className="projects-hero">
          <div className="container-wide">
            <h1>Mis Proyectos</h1>
            <p className="lead">
              Una muestra de mis desarrollos más destacados en sistemas de gestión empresarial, 
              aplicaciones fintech, marketplaces y plataformas web especializadas.
            </p>
          </div>
        </section>

        {/* Filtros */}
        <section className="filters-section">
          <div className="container-wide">
            <div className="filters-container">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <filter.icon size={20} />
                <span>{filter.label}</span>
              </button>
            ))}
            </div>
          </div>
        </section>

        {/* Grid de Proyectos */}
        <section className="projects-grid-section">
          <div className="container-wide">
            <div className="projects-grid">
            {filteredProjects.map((project) => {
              const currentIndex = currentImageIndexes[project.id] || 0
              const hasMultipleImages = project.images.length > 1
              
              return (
              <div key={project.id} className="project-card">
                
                <div className="project-image-carousel">
                  <img 
                    src={project.images[currentIndex]} 
                    alt={`${project.title} - ${currentIndex + 1}`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = PLACEHOLDER_IMAGES.PROJECT_400_250
                    }}
                  />
                  
                  {hasMultipleImages && (
                    <>
                      <button 
                        className="carousel-btn carousel-btn-prev"
                        onClick={() => prevImage(project.id, project.images.length)}
                        aria-label="Imagen anterior"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      
                      <button 
                        className="carousel-btn carousel-btn-next"
                        onClick={() => nextImage(project.id, project.images.length)}
                        aria-label="Siguiente imagen"
                      >
                        <ChevronRight size={24} />
                      </button>

                      <div className="carousel-indicators">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setImageIndex(project.id, index)}
                            aria-label={`Ir a imagen ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-category">
                      {(() => {
                        const filter = filters.find(f => f.id === project.category)
                        const IconComponent = filter ? filter.icon : Code
                        return <IconComponent size={16} />
                      })()}
                      <span>{filters.find(f => f.id === project.category)?.label}</span>
                    </div>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              )
            })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="projects-cta">
          <div className="container-wide">
            <div className="cta-content">
              <h2>¿Tienes un proyecto en mente?</h2>
              <p>
                Estoy disponible para colaborar en nuevos proyectos y crear soluciones 
                tecnológicas que impulsen tu negocio.
              </p>
              <a href="/contact" className="btn btn-primary">
                Hablemos de tu proyecto
              </a>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Projects
