function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__content">
        <h2 id="contact-title">Hablemos de tu próximo proyecto</h2>

        <p className="contact__description">
          Estoy abierto a conversar sobre desarrollo de software, integración de sistemas,
          arquitectura y modernización de aplicaciones empresariales.
        </p>

        <nav className="contact__links" aria-label="Canales de contacto">
          <a href="mailto:contacto@reinaldoblanco.cl">Correo electrónico</a>

          <a
            href="https://www.linkedin.com/in/reinaldo-j-blanco-medina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="https://github.com/NanoBlanco" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </nav>

        <p className="contact__email">contacto@reinaldoblanco.cl</p>
      </div>
    </section>
  )
}

export default Contact
