const projects = [
  {
    title: 'Modernización de integración académica con Banner',
    category: 'Legacy Modernization · Integration · Architecture',
    description:
      'Rediseño y modernización progresiva de la integración entre un sistema académico institucional y Banner, refactorizando aproximadamente 20 triggers y procedimientos PL/SQL sobre Oracle 19c.',
    technologies: ['Oracle 19c', 'PL/SQL', 'Java', 'Integration'],
  },
  {
    title: 'Sistema de Gestión de Organizaciones',
    category: 'Software Development · Integration',
    description:
      'Diseño y desarrollo de una plataforma para administrar organizaciones y centros de costo, reemplazando un proceso basado en Excel e integrando información proveniente de Banner.',
    technologies: ['React', 'Python', 'FastAPI', 'SQLAlchemy', 'Oracle'],
  },
  {
    title: 'Gestión de compras, inventario y activos fijos',
    category: 'Enterprise Software · Public Sector',
    description:
      'Desarrollo de una plataforma empresarial para municipalidades chilenas que automatiza los procesos de compras, bodega y activos fijos bajo la normativa aplicable.',
    technologies: ['PHP', 'Laravel', 'PostgreSQL', 'JavaScript'],
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <header className="projects__header">
        <h2>Proyectos seleccionados</h2>
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
