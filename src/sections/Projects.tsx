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
    title: 'Modernización e integración de sistemas académicos con Banner',
    category: 'Architecture · Integration · Legacy Modernization',
    description:
      'Modernización de la arquitectura de integración entre un sistema institucional de gestión estudiantil y Ellucian Banner, utilizando Oracle 19c y PL/SQL para coordinar el procesamiento e intercambio de información académica.',
    responsibility:
      'Rediseño de la arquitectura de ejecución mediante un punto central de orquestación y separación de responsabilidades entre procedimientos, aplicando principios SOLID. Refactorización de aproximadamente 20 triggers y procedimientos PL/SQL, incorporación de validaciones y excepciones personalizadas, optimización de consultas y uso de funcionalidades nativas de Oracle 19c. Documentación técnica de los cambios, sus objetivos y fundamentos.',
    impact:
      'Reducción aproximada del 90 % en los fallos registrados en los procesos de integración, según las métricas operacionales. Mejora observada en la mantenibilidad y el consumo de recursos, junto con una gestión de errores más estructurada, facilitando la evolución de una integración académica crítica.',
    technologies: ['Oracle 19c', 'PL/SQL', 'Java', 'SQL', 'Ellucian Banner'],
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
