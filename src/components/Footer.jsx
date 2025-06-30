import "./Footer.css"

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Culture", href: "#culture" },
    { name: "Governance", href: "#governance" },
    { name: "Education", href: "#education" },
    { name: "Development", href: "#development" },
    { name: "Demographics", href: "#demographics" },
    { name: "Tourism", href: "#tourism" },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/placeholder.svg?height=50&width=50" alt="Thipuzu Logo" />
              <div className="footer-title">
                <h3>Thipuzu Village</h3>
                <span>Chakhesang Community, Nagaland</span>
              </div>
            </div>
            <p className="footer-description">
              Preserving our heritage, empowering our future. Thipuzu Village stands as a beacon of traditional wisdom
              and modern progress in the heart of Nagaland.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              {quickLinks.map((link, index) => (
                <a key={index} href={link.href}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Contact Information</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Thipuzu Village, Phek District, Nagaland</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>Village Council Office</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>thipuzu.village@nagaland.gov.in</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Visit Us</h4>
            <p className="visit-text">
              Experience the warmth of Naga hospitality and the beauty of our pristine landscapes. Contact our village
              council for guided tours and homestay arrangements.
            </p>
            <div className="visit-highlights">
              <span>🏔️ Scenic Beauty</span>
              <span>🏛️ Rich Culture</span>
              <span>🏠 Homestays</span>
              <span>🌿 Eco-Tourism</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-credits">
            <p>© 2025 Thipuzu Village. All rights reserved.</p>
            <p className="data-source">Data sourced from Government of Nagaland, Census India, and community elders.</p>
          </div>
          <div className="footer-scroll-top">
            <a href="#home" className="scroll-top-btn">
              <span>↑</span>
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
