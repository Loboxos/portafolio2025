import { Briefcase, Calendar, MapPin, ExternalLink, Code, Database, Settings, Users } from 'lucide-react'
import { PLACEHOLDER_IMAGES } from '../config/images'
import '../styles/Experience.css'

const Experience = () => {
  const experience = [
    {
      id: 1,
      company: 'Borgest',
      position: 'Desarrollador de Software',
      period: '2024 - Presente',
      location: 'Remoto',
      description: 'Desarrollo y mantenimiento del sistema integral de gestión empresarial Borgest.',
      achievements: [
        'Desarrollo y mantenimiento de módulos de facturación, stock, clientes, proveedores, etc.',
        'Desarrollo de reportes',
        'Migracion de sistema de gestion de escritorio a web',
      ],
      technologies: ['Django', 'React', 'mysql', 'Docker', 'delphi', 'reportmanager'],
      logo: PLACEHOLDER_IMAGES.COMPANY_80_80,
      website: 'https://borgest.com',
      featured: true
    },
    {
      id: 2,
      company: 'SGS Soluciones de Gestión Santos',
      position: 'Desarrollador Full Stack Freelance',
      period: '2025 - Presente',
      location: 'Salta, Argentina',
      description: 'Desarrollo de soluciones personalizadas para empresas, incluyendo sistemas de gestión, aplicaciones web y APIs REST.',
      achievements: [
        'Cree el sistema de gestion Santos para empresas',
        'Desarrollo de aplicaciones web y moviles',
        'Gestion de usuarios,sucursales,productos,ventas,stock,etc',
      ],
      technologies: ['Django', 'React', 'mysql', 'docker'],
      logo: PLACEHOLDER_IMAGES.COMPANY_80_80,
      website: 'https://sgs.com',
      featured: true
    },
    {
      id: 3,
      company: 'Daira it',
      position: 'Desarrollador Full Stack Trainee',
      period: '2024',
      location: 'Salta, Argentina',
      description: 'Desarrollo de APIs y servicios backend para aplicaciones web.',
      achievements: [
        'Desarrollo de aplicaciones simples CRUD para gestion de datos',
      ],
      technologies: ['Angular', 'golang', 'mysql','Docker'],
      logo: PLACEHOLDER_IMAGES.COMPANY_80_80,
      website: 'https://daira.com',
      featured: false
    },
  ]

  const skills = [
    {
      category: 'Backend',
      items: ['Django','Mysql','Delphi','Golang','C#']
    },
    {
      category: 'Frontend',
      items: ['React', 'Vite.js','Axios','Javascript','CSS', 'Bootstrap','Angular','Tailwind']
    },
    {
      category: 'DevOps',
      items: ['Docker','Git', 'Linux', 'Nginx', 'Gunicorn']
    },
    {
      category: 'Herramientas',
      items: ['VS Code', 'Postman','Figma', 'Jira', 'Trello','Cursor']
    }
  ]

  return (
    <div className="experience">
      <div className="container-wide">
        {/* Hero Section */}
        <section className="experience-hero">
          <h1>Experiencia Laboral</h1>
          <p className="lead">
            Mi trayectoria profesional en el desarrollo de software, 
            con especialización en sistemas de gestión empresarial y soluciones tecnológicas.
          </p>
        </section>

        {/* Experiencia Laboral */}
        <section className="work-experience">
          <h2>Experiencia Profesional</h2>
          <div className="timeline">
            {experience.map((job) => (
              <div key={job.id} className="timeline-item">
                
                <div className="timeline-content">
                  <div className="job-header">
                    <div className="company-info">
                      <img 
                        src={job.logo} 
                        alt={job.company} 
                        className="company-logo"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = PLACEHOLDER_IMAGES.COMPANY_80_80
                        }}
                      />
                      <div className="company-details">
                        <h3>{job.position}</h3>
                        <div className="company-meta">
                          <span className="company-name">{job.company}</span>
                          <div className="job-meta">
                            <span className="period">
                              <Calendar size={16} />
                              {job.period}
                            </span>
                            <span className="location">
                              <MapPin size={16} />
                              {job.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {job.website && (
                      <a 
                        href={job.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="company-website"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  
                  <p className="job-description">{job.description}</p>
                  
                  <div className="job-achievements">
                    <h4>Tareas Principales:</h4>
                    <ul>
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="job-technologies">
                    <h4>Tecnologías Utilizadas:</h4>
                    <div className="tech-tags">
                      {job.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Habilidades por Categoría */}
        <section className="skills-categories">
          <div className="container-wide">
            <h2>Habilidades por Categoría</h2>
            <div className="skills-grid">
              {skills.map((skillCategory, index) => (
                <div key={index} className="skill-category-card">
                  <div className="category-header">
                    <h3>{skillCategory.category}</h3>
                    <div className="category-icon">
                      {skillCategory.category === 'Backend' && <Database size={24} />}
                      {skillCategory.category === 'Frontend' && <Code size={24} />}
                      {skillCategory.category === 'DevOps' && <Settings size={24} />}
                      {skillCategory.category === 'Herramientas' && <Users size={24} />}
                    </div>
                  </div>
                  <div className="category-skills">
                    {skillCategory.items.map((skill, idx) => (
                      <span key={idx} className="skill-item">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="experience-cta">
          <div className="container-wide">
            <div className="cta-content">
              <h2>¿Interesado en colaborar?</h2>
              <p>
                Estoy siempre abierto a nuevas oportunidades y proyectos desafiantes. 
                Si tienes una propuesta interesante, ¡hablemos!
              </p>
              <div className="cta-actions">
                <a href="/contact" className="btn btn-primary">
                  Contactar
                </a>
                <a href="/projects" className="btn btn-secondary">
                  Ver Proyectos
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Experience
