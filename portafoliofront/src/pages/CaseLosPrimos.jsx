import '../styles/Projects.css'

const CaseLosPrimos = () => {
  return (
    <div className="projects">
      <section className="projects-hero">
        <div className="container-wide">
          <h1>Caso de Estudio: Los Primos2</h1>
          <p className="lead">
            Sistema de gestión integral para una mueblería, con foco en control de stock,
            ventas, cuentas corrientes y trazabilidad de productos desde el ingreso al
            depósito hasta la entrega al cliente final.
          </p>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="container-wide">
          <article className="project-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="project-content">
              <h2>Contexto y necesidad del cliente</h2>
              <p className="project-description">
                Los Primos2 es una mueblería que creció rápido y empezó a tener problemas para
                controlar su inventario y sus ventas. Usaban planillas de cálculo y notas
                manuales, lo que generaba errores de stock, ventas duplicadas, productos
                mal registrados y mucha dependencia de una sola persona que &quot;sabía
                dónde estaba todo&quot;. El objetivo principal del proyecto fue transformar
                ese caos en un sistema centralizado, accesible y confiable.
              </p>

              <h2>Objetivos del sistema</h2>
              <p className="project-description">
                Definimos junto al cliente una serie de objetivos concretos:
              </p>
              <ul className="project-description">
                <li>Registrar cada producto con código, categoría, medidas y precio.</li>
                <li>Controlar el stock disponible en tiempo real.</li>
                <li>Registrar ventas, señas y entregas parciales.</li>
                <li>Manejar cuentas corrientes de clientes y sus movimientos.</li>
                <li>Generar reportes simples de ventas por período y estado de stock.</li>
              </ul>

              <h2>Arquitectura y tecnologías</h2>
              <p className="project-description">
                El sistema se construyó como una aplicación web full stack basada en{' '}
                <strong>Django REST Framework</strong> para el backend y <strong>React</strong>{' '}
                para el frontend. La base de datos se implementó en <strong>MySQL</strong>, lo
                que permitió manejar cómodamente un volumen creciente de registros.
              </p>
              <p className="project-description">
                La API expone recursos para productos, clientes, comprobantes, movimientos de
                stock y usuarios del sistema. Desde el frontend se consume esa API con un
                enfoque SPA, ofreciendo una experiencia ágil incluso en conexiones no tan buenas.
              </p>

              <h2>Flujos funcionales clave</h2>
              <p className="project-description">
                El sistema se organizó alrededor de algunos flujos principales:
              </p>
              <ul className="project-description">
                <li>
                  <strong>Alta y actualización de productos:</strong> carga de nuevos muebles,
                  actualización de precios, cambios de estado (disponible, reservado, vendido).
                </li>
                <li>
                  <strong>Registro de ventas:</strong> selección de productos, aplicación de
                  descuentos, registro de señas y formas de pago.
                </li>
                <li>
                  <strong>Gestión de stock:</strong> movimientos por ingreso de mercadería,
                  devoluciones, ajustes y reservas.
                </li>
                <li>
                  <strong>Seguimiento de clientes:</strong> historial de compras, deudas,
                  comprobantes y estado de sus cuentas corrientes.
                </li>
              </ul>

              <h2>Resultados para el negocio</h2>
              <p className="project-description">
                Después de la implementación de Los Primos2, el cliente logró reducir de forma
                notable los errores de stock y la cantidad de tiempo dedicado a tareas
                administrativas repetitivas. Tener toda la información centralizada les permite
                responder más rápido a consultas de clientes, saber qué productos se venden
                mejor y tomar decisiones de compra con datos reales.
              </p>
              <p className="project-description">
                Más allá de la parte técnica, el sistema cambió la forma en la que el negocio
                organiza su información diaria: ahora cualquier integrante del equipo puede
                consultar el estado de una venta o de un producto sin depender de una sola
                persona.
              </p>

              <h2>Aprendizajes del proyecto</h2>
              <p className="project-description">
                Este caso fue clave para profundizar mi experiencia en sistemas de gestión
                orientados a PyMEs. Me permitió validar decisiones de arquitectura con uso
                real en producción y afinar detalles de UX pensados para usuarios que no son
                técnicos. También consolidó el stack Django REST + React + MySQL como base para
                otros productos que luego desarrollé.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default CaseLosPrimos


