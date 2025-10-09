import { GraduationCap, Award, Code, Database, Globe } from 'lucide-react'
import '../styles/About.css'

const About = () => {
  const skills = [
    { name: 'React', level: 90, icon: Code },
    { name: 'Django REST', level: 85, icon: Database },
    { name: 'JavaScript', level: 88, icon: Code },
    { name: 'Python', level: 85, icon: Code },
    { name: 'HTML/CSS', level: 92, icon: Globe },
    { name: 'SQL', level: 80, icon: Database }
  ]

  const certifications = [
    'Bootcamp Web Full Stack - ITBA',
    'Bootcamp Web Full Stack - TELECOM',
    'Bootcamp Python/Django - ALKEMY',
    'Desarrollo ABAP-SAP - DL Consultores',
    'Desarrollo Web Full Stack - Argentina Programa',
    'Ingles A1,A2,B1 - CUI,UNPAZ,UNRC,DEVELOP',
  ]

  return (
    <div className="about">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container-wide">
            <h1>Sobre Mí</h1>
            <p className="lead">
              Desarrollador de software especializado en soluciones de gestión empresarial, 
              con más de 5 años de experiencia creando sistemas que optimizan procesos empresariales.
            </p>
          </div>
        </section>

        {/* Perfil */}
        <section className="profile-section">
          <div className="container-wide">
            <div className="profile-grid">
            <div className="profile-content">
              <h2>Mi Perfil</h2>
              <p>
                Soy Cristian Villa, Me Recibi de Técnico Universitario en Desarrollo de Software, egresado de la Universidad Provincial de artes,
                oficios y tecnologias (UPATECO) de la ciudad de Salta, Argentina.
                Soy un desarrollador de software apasionado por crear soluciones tecnológicas 
                que resuelvan problemas reales en el mundo empresarial. Mi experiencia se centra 
                en el desarrollo de sistemas de gestión utilizando tecnologías modernas como 
                React y Django REST Framework.
              </p>
              <p>
                Trabajo actualmente en <strong>Borgest</strong>, un sistema de gestión integral 
                donde desarrollo funcionalidades que mejoran la eficiencia operativa de las empresas.
              </p>
              <p>
                Mi marca personal <strong>SGS Soluciones de Gestión Santos</strong> representa 
                mi compromiso con la excelencia técnica y la innovación en el desarrollo de software.
              </p>
            </div>
            
            <div className="profile-stats">
              <div className="stat-card">
                <h3>5+</h3>
                <p>Años de Experiencia</p>
              </div>
              <div className="stat-card">
                <h3>20+</h3>
                <p>Proyectos Completados</p>
              </div>
              <div className="stat-card">
                <h3>15+</h3>
                <p>Certificaciones</p>
              </div>
            </div>
          </div>
          </div>
        </section>



        {/* Habilidades */}
        <section className="skills-section">
          <div className="container-wide">
            <h2>Habilidades Técnicas</h2>
            <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <skill.icon size={24} />
                  <span>{skill.name}</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Certificaciones */}
        <section className="certifications-section">
          <div className="container-wide">
            <h2>Certificaciones y Cursos destacados</h2>
            <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="certification-icon">
                  <Award size={24} />
                </div>
                <p>{cert}</p>
              </div>
            ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default About
