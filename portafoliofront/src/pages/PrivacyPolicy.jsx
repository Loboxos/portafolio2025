import '../styles/About.css'

const PrivacyPolicy = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container-wide">
          <h1>Política de Privacidad</h1>
          <p className="lead">
            En SGS Soluciones de Gestión Santos tomamos muy en serio la protección de tu
            información personal. En esta página te explicamos qué datos se recopilan cuando
            utilizas este sitio, con qué fines se usan y cuáles son tus derechos como usuario.
          </p>
        </div>
      </section>

      <section className="profile-section">
        <div className="container-wide">
          <div className="profile-grid">
            <div className="profile-content">
              <h2>Responsable del sitio</h2>
              <p>
                Este sitio web pertenece a <strong>SGS Soluciones de Gestión Santos</strong>,
                portafolio profesional de <strong>Cristian Villa</strong>, desarrollador de
                software especializado en sistemas de gestión empresarial.
              </p>

              <h2>Datos que se recopilan</h2>
              <p>
                Este sitio está orientado a mostrar información sobre mis servicios y proyectos,
                por lo que la recopilación de datos personales es mínima. De forma general, se
                pueden recopilar los siguientes tipos de información:
              </p>
              <ul>
                <li>
                  <strong>Datos proporcionados mediante el formulario de contacto</strong>:
                  nombre, correo electrónico y mensaje que envías voluntariamente para solicitar
                  información o establecer contacto profesional.
                </li>
                <li>
                  <strong>Datos de navegación</strong>: como dirección IP abreviada, tipo de
                  dispositivo, navegador, páginas visitadas y tiempo de permanencia. Estos datos
                  se utilizan de manera agregada y anónima para entender mejor cómo se usa el
                  sitio y mejorar la experiencia.
                </li>
              </ul>

              <h2>Finalidad del tratamiento</h2>
              <p>
                Los datos que se recopilan a través de este sitio se utilizan con las siguientes
                finalidades:
              </p>
              <ul>
                <li>Responder a consultas enviadas a través del formulario de contacto.</li>
                <li>Facilitar la comunicación sobre proyectos, propuestas o colaboraciones.</li>
                <li>
                  Analizar de forma general el uso del sitio para mejorar sus contenidos y
                  estructura.
                </li>
              </ul>

              <h2>Uso de cookies y servicios de terceros</h2>
              <p>
                Este sitio puede utilizar cookies técnicas necesarias para su funcionamiento
                correcto, y eventualmente servicios de terceros (como analíticas o publicidad)
                que también utilicen cookies para medir audiencias o mostrar contenidos
                relevantes. En ese caso, dichos servicios gestionan los datos conforme a sus
                propias políticas de privacidad.
              </p>

              <h2>Conservación de los datos</h2>
              <p>
                Los datos personales proporcionados a través del formulario de contacto se
                conservarán durante el tiempo necesario para atender tu consulta o mantener la
                relación profesional que pudiera surgir. No se venden ni ceden tus datos a
                terceros con fines comerciales.
              </p>

              <h2>Tus derechos como usuario</h2>
              <p>
                Como usuario tienes derecho a acceder, rectificar o solicitar la eliminación de
                tus datos personales, así como a solicitar información sobre el tratamiento que
                se hace de ellos. Si querés ejercer alguno de estos derechos, podés hacerlo
                contactándome al correo indicado en la sección de contacto del sitio.
              </p>

              <h2>Contacto</h2>
              <p>
                Para cualquier duda relacionada con esta política de privacidad o con el
                tratamiento de tus datos personales, podés escribirme a{' '}
                <strong>vcristian528@gmail.com</strong>.
              </p>

              <p>
                Esta política puede actualizarse para reflejar cambios en la normativa o en el
                funcionamiento del sitio. Te recomendamos revisarla periódicamente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy


