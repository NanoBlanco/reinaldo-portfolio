function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__identity">
          <p className="footer__name">Reinaldo J. Blanco M.</p>
          <p className="footer__role">Software Developer · Backend · Integration · Architecture</p>
        </div>

        <nav className="footer__links" aria-label="Redes profesionales">
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

        <p className="footer__copyright">© {currentYear} Reinaldo J. Blanco M.</p>
      </div>
    </footer>
  )
}

export default Footer
