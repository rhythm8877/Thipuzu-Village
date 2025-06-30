"use client"

import { useEffect, useRef, useState } from "react"
import "./Culture.css"

const Culture = () => {
  const [visibleElements, setVisibleElements] = useState(new Set())
  const sectionRef = useRef(null)

  const festivals = [
    {
      name: "Tsükrünyie",
      description: "The harvest festival celebrating the bounty of the land",
      season: "Post-Harvest",
    },
    {
      name: "Nazhü",
      description: "Traditional festival marking the beginning of agricultural season",
      season: "Spring",
    },
    {
      name: "Sükhrie",
      description: "Festival of thanksgiving and community bonding",
      season: "Winter",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute("data-animate-id")
            if (elementId) {
              // Reduced timeout for smoother animations
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
    <section id="culture" className="section culture-section" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${visibleElements.has("title") ? "animate-in" : ""}`} data-animate-id="title">
          Our Rich Culture
        </h2>

        <div className="culture-grid">
          {[
            {
              icon: "🏛️",
              title: "Chakhesang Naga Tribe",
              description:
                "We are proud members of the Chakhesang Naga tribe, one of the major tribes of Nagaland. Our tribal identity is deeply rooted in ancient traditions, warrior heritage, and a strong sense of community that has been passed down through generations.",
              id: "card1",
            },
            {
              icon: "🗣️",
              title: "Chokri Language",
              description:
                "Chokri is our mother tongue, a beautiful language that carries the wisdom of our ancestors. Through oral traditions, folk songs, and daily conversations, we preserve this linguistic treasure that connects us to our roots and identity.",
              id: "card2",
            },
            {
              icon: "✝️",
              title: "Christian Faith",
              description:
                "Christianity has become an integral part of our community life, blending harmoniously with our traditional values. Our faith guides our daily lives and strengthens our community bonds while respecting our cultural heritage.",
              id: "card3",
            },
            {
              icon: "🍽️",
              title: "Traditional Cuisine",
              description:
                "Our culinary heritage includes the famous Thüvü Gapha and other traditional delicacies prepared with locally grown ingredients. These dishes reflect our connection to the land and our ancestors' wisdom in food preparation.",
              id: "card4",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`culture-card ${visibleElements.has(item.id) ? "slide-in" : ""}`}
              data-animate-id={item.id}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="festivals-section">
          <h3
            className={`festivals-title ${visibleElements.has("festivals-title") ? "animate-in" : ""}`}
            data-animate-id="festivals-title"
          >
            Our Festivals
          </h3>
          <div className="festivals-timeline">
            {festivals.map((festival, index) => (
              <div
                key={index}
                className={`festival-item ${visibleElements.has(`festival-${index}`) ? "slide-in" : ""}`}
                data-animate-id={`festival-${index}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="festival-content">
                  <div className="festival-season">{festival.season}</div>
                  <h4>{festival.name}</h4>
                  <p>{festival.description}</p>
                </div>
                <div className="festival-connector"></div>
              </div>
            ))}
          </div>
        </div>

        <div className={`attire-section ${visibleElements.has("attire") ? "animate-in" : ""}`} data-animate-id="attire">
          <div className="attire-content">
            <div className="attire-text">
              <h3>Traditional Attire</h3>
              <p>
                Our traditional clothing reflects the artistic excellence of Chakhesang craftsmanship. The intricate
                patterns, vibrant colors, and symbolic designs tell stories of our heritage, social status, and
                spiritual beliefs. Each piece is a work of art that connects the wearer to their ancestral legacy.
              </p>
              <p>
                During festivals and special occasions, our community comes alive with the beauty of traditional attire,
                creating a spectacular display of our cultural richness and artistic traditions.
              </p>
            </div>
            <div className="attire-image">
              <img src="/placeholder.svg?height=400&width=500" alt="Traditional Chakhesang Attire" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Culture
