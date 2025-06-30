"use client"

import { useEffect, useState } from "react"
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "tourism", "culture", "governance", "education", "development", "demographics"]
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
      closeMenu()
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleNavClick("home")}>
          <img src="/assets/nagaland-logo.png" alt="Nagaland Logo" />
          <div className="nav-title">
            <h3>Thipuzu Village</h3>
            <span>Chakhesang Community, Nagaland</span>
          </div>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <button className={activeSection === "home" ? "active" : ""} onClick={() => handleNavClick("home")}>
              Home
            </button>
          </li>
          <li>
            <button className={activeSection === "about" ? "active" : ""} onClick={() => handleNavClick("about")}>
              About
            </button>
          </li>
          <li>
            <button className={activeSection === "tourism" ? "active" : ""} onClick={() => handleNavClick("tourism")}>
              Tourism
            </button>
          </li>
          <li>
            <button className={activeSection === "culture" ? "active" : ""} onClick={() => handleNavClick("culture")}>
              Culture
            </button>
          </li>
          <li>
            <button
              className={activeSection === "governance" ? "active" : ""}
              onClick={() => handleNavClick("governance")}
            >
              Governance
            </button>
          </li>
          <li>
            <button
              className={activeSection === "education" ? "active" : ""}
              onClick={() => handleNavClick("education")}
            >
              Education
            </button>
          </li>
          <li>
            <button
              className={activeSection === "development" ? "active" : ""}
              onClick={() => handleNavClick("development")}
            >
              Development
            </button>
          </li>
          <li>
            <button
              className={activeSection === "demographics" ? "active" : ""}
              onClick={() => handleNavClick("demographics")}
            >
              Demographics
            </button>
          </li>
        </ul>

        <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
