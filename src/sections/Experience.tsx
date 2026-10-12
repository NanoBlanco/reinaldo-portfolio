const teachingAreas = [
  {
    title: 'Frontend',
    description: 'Desarrollo de interfaces web y fundamentos de programación del lado del cliente.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Bases de datos',
    description: 'Gestión de datos relacionales y persistencia de información.',
    technologies: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'Backend con Java',
    description:
      'Programación orientada a objetos y desarrollo de aplicaciones del lado del servidor.',
    technologies: ['Java estándar', 'POO', 'JDBC', 'JPA'],
  },
  {
    title: 'Servicios y seguridad',
    description:
      'Desarrollo de servicios web y fundamentos de seguridad para aplicaciones empresariales.',
    technologies: ['API REST', 'Spring Boot', 'Spring Security básico'],
  },
]

function Experience() {
  return (
    <section id="experience" className="experience" aria-labelledby="experience-title">
      <div className="experience__container">
        <header className="experience__header">
          <p className="experience__eyebrow">TRAYECTORIA PROFESIONAL</p>

          <h2 id="experience-title" className="experience__title">
            Experiencia
          </h2>

          <p className="experience__description">
            Mi experiencia profesional también incluye la formación de nuevos desarrolladores,
            compartiendo conocimientos y buenas prácticas en distintas áreas del desarrollo de
            software.
          </p>
        </header>

        <article className="experience__card">
          <div className="experience__summary">
            <div>
              <h3 className="experience__role">Docente de Desarrollo Full Stack</h3>

              <p className="experience__organization">Diversas OTEC</p>
            </div>

            <span className="experience__duration">4 años de experiencia</span>
          </div>

          <p className="experience__details">
            Formación técnica en desarrollo web, bases de datos y backend con Java, abarcando desde
            los fundamentos de programación hasta la construcción de servicios y aplicaciones.
          </p>

          <div className="experience__areas">
            {teachingAreas.map((area) => (
              <div className="experience__area" key={area.title}>
                <h4 className="experience__area-title">{area.title}</h4>

                <p className="experience__area-description">{area.description}</p>

                <ul className="experience__technologies">
                  {area.technologies.map((technology) => (
                    <li className="experience__technology" key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Experience
