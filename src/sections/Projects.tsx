interface Project {
  title: string
  category: string
  description: string
  responsibility: string
  impact: string
  technologies: string[]
}

const projects: Project[] = [
  {
    title: 'Modernización de la integración académica con Banner',
    category: 'Integration · Legacy Modernization · Oracle',
    description:
      'Modernización de la integración académica entre SIGA y Ellucian Banner, orientada a mejorar la confiabilidad del procesamiento y el intercambio de información institucional.',
    responsibility:
      'Refactorización del paquete principal de integración académica y del proceso que ejecuta la API de Ethos de Ellucian Banner. Actualización del código existente e intervención de tres triggers del lado de SIGA para mejorar la estructura y el control del proceso.',
    impact:
      'Reducción aproximada del 90 % en los errores atribuibles a la integración respecto de un período anterior comparable. El resultado se basa en el seguimiento diario durante 10 meses, diferenciando los errores propios de la integración de aquellos originados por problemas de calidad de datos.',
    technologies: ['Oracle 19c', 'PL/SQL', 'Java', 'SQL', 'Ellucian Banner', 'Ethos API'],
  },
  {
    title: 'Desarrollo de la integración de decretos',
    category: 'Solution Architecture · Integration · PL/SQL',
    description:
      'Diseño e implementación desde cero de una integración para el procesamiento de decretos, con una arquitectura definida y mecanismos estructurados de validación y gestión de errores.',
    responsibility:
      'Diseño y desarrollo integral de la solución mediante una arquitectura basada en orquestación y separación de responsabilidades entre funciones y procedimientos PL/SQL. Implementación de validaciones, excepciones personalizadas, mensajería específica y triggers estructurados en SIGA para iniciar el proceso.',
    impact:
      'Tras un período de ajuste de tres meses, las fallas actuales representan aproximadamente el 3 % de las ejecuciones. Según la confirmación de Ellucian, estas fallas se deben a problemas de configuración de Banner cuya resolución está pendiente por parte del proveedor.',
    technologies: ['Oracle 19c', 'PL/SQL', 'SQL', 'Ellucian Banner', 'SIGA'],
  },
  {
    title: 'Sistema de Gestión de Organizaciones (SGO)',
    category: 'Full-Stack Development · Data Integration',
    description:
      'Desarrollo de una aplicación para gestionar organizaciones y centros de costo universitarios, reemplazando un proceso basado en hojas de cálculo por una solución centralizada.',
    responsibility:
      'Diseño y desarrollo individual de la solución, incluyendo arquitectura, modelo de datos propio, backend con FastAPI y SQLAlchemy, frontend con React e integración de información proveniente de Banner.',
    impact:
      'Automatización del proceso de gestión y mejora de la consistencia de los datos y de la experiencia de usuario.',
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'SQLAlchemy'],
  },
  {
    title: 'Gestión municipal de compras, inventario y activos fijos',
    category: 'Enterprise Software · Public Sector',
    description:
      'Desarrollo de una plataforma empresarial para municipalidades chilenas que centraliza los procesos de compras, administración de bodega y control de activos fijos, considerando la normativa aplicable.',
    responsibility:
      'Diseño y desarrollo individual de la solución, utilizando una arquitectura monolítica y programación orientada a objetos, con PHP, Laravel y PostgreSQL.',
    impact:
      'Reemplazo de un sistema anterior e implementación comercial en cinco municipalidades, con aproximadamente 75 usuarios potenciales entre las áreas involucradas.',
    technologies: ['PHP', 'Laravel', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS'],
  },
]

function Projects() {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <header className="projects__header">
        <h2 id="projects-title">Proyectos seleccionados</h2>
        <p>
          Soluciones empresariales desarrolladas y modernizadas en contextos de integración, datos y
          sistemas críticos.
        </p>
      </header>

      <div className="projects__grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <p className="project-card__category">{project.category}</p>

            <h3>{project.title}</h3>

            <p className="project-card__description">{project.description}</p>

            <h4>Responsabilidad técnica</h4>
            <p>{project.responsibility}</p>

            <h4>Resultado</h4>
            <p>{project.impact}</p>

            <ul className="project-card__technologies">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
