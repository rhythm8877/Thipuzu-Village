"use client"

import { useEffect, useState } from "react"
import "./Home.css"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleDiscoverClick = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      const navbarHeight = 80
      const elementPosition = aboutSection.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="home-section">
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? "animate-in" : ""}`}>
            <h1>Welcome to Thipuzu</h1>
            <h2>Village</h2>
            <h3>A World of Its Own</h3>
            <p>Preserving our heritage, empowering our future in the heart of Nagaland</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleDiscoverClick}>
                <span>DISCOVER OUR STORY</span>
                <div className="btn-shine"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
