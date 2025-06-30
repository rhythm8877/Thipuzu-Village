"use client"

import { useEffect, useRef, useState } from "react"
import "./About.css"

const About = () => {
  const [visibleElements, setVisibleElements] = useState(new Set())
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute("data-animate-id")
            if (elementId) {
              // Reduced timeout for faster animations
              setTimeout(() => {
                setVisibleElements((prev) => new Set([...prev, elementId]))
              }, 100)
            }
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    )

    const elements = sectionRef.current?.querySelectorAll("[data-animate-id]")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${visibleElements.has("title") ? "animate-in" : ""}`} data-animate-id="title">
          About Thipuzu Village
        </h2>

        <div className="about-content">
          <div className={`about-text ${visibleElements.has("text") ? "slide-in-left" : ""}`} data-animate-id="text">
            <div className="about-card">
              <div className="card-header">
                <div className="card-icon">🏛️</div>
                <h3>Our Heritage</h3>
              </div>
              <p>
                Thipuzu Village stands as a testament to the rich cultural heritage of the Chakhesang Naga community.
                Nestled in the pristine hills of Phek district, our village has been home to generations who have
                preserved the ancient traditions while embracing progress and development.
              </p>
              <p>
                Our oral heritage speaks of brave ancestors who settled in these fertile lands, drawn by the abundance
                of natural resources and the strategic location that offered both protection and prosperity. The name
                "Thipuzu" itself carries deep meaning in our Chokri language, reflecting our connection to the land and
                our ancestors.
              </p>
              <div className="heritage-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Years of History</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15</span>
                  <span className="stat-label">Generations</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`about-image ${visibleElements.has("image") ? "slide-in-right" : ""}`}
            data-animate-id="image"
          >
            <div className="image-container">
              <img src="/assets/thipuzu-village-about-landscape.png" alt="Thipuzu Village Landscape" />
              <div className="image-overlay">
                <h4>Village Panorama</h4>
                <p>Breathtaking views of our ancestral home</p>
              </div>
            </div>
          </div>
        </div>

        <div className="geography-section">
          <div className="geography-content">
            <div
              className={`geography-text ${visibleElements.has("geography") ? "slide-in-left" : ""}`}
              data-animate-id="geography"
            >
              <h3>Our Sacred Location</h3>
              <div className="location-details">
                <div className="location-item">
                  <div className="location-icon">📍</div>
                  <div className="location-info">
                    <strong>District:</strong>
                    <span>Phek, Nagaland</span>
                  </div>
                </div>
                <div className="location-item">
                  <div className="location-icon">🏔️</div>
                  <div className="location-info">
                    <strong>Elevation:</strong>
                    <span>1,800 meters above sea level</span>
                  </div>
                </div>
                <div className="location-item">
                  <div className="location-icon">🌡️</div>
                  <div className="location-info">
                    <strong>Climate:</strong>
                    <span>Temperate with cool summers</span>
                  </div>
                </div>
                <div className="location-item">
                  <div className="location-icon">🛣️</div>
                  <div className="location-info">
                    <strong>Access:</strong>
                    <span>Via Pfutsero, Chozuba</span>
                  </div>
                </div>
              </div>
              <p>
                Strategically positioned in the heart of Nagaland, Thipuzu enjoys a temperate climate and breathtaking
                views of the surrounding valleys. Our village serves as a gateway to some of the most beautiful
                landscapes in the region, where ancient traditions meet natural splendor.
              </p>
            </div>

            <div
              className={`map-container ${visibleElements.has("map") ? "slide-in-right" : ""}`}
              data-animate-id="map"
            >
              <div className="map-placeholder">
                <img src="/placeholder.svg?height=350&width=450" alt="Thipuzu Village Map" />
                <div className="map-overlay">
                  <div className="map-pin">📍</div>
                  <h4>Thipuzu Village</h4>
                  <p>Heart of Nagaland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
