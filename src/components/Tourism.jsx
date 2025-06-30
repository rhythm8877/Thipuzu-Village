import "./Tourism.css"

const Tourism = () => {
  const attractions = [
    {
      name: "Dzuza River",
      description: "Crystal clear waters flowing through pristine landscapes",
      type: "Natural Wonder",
      activities: ["River rafting", "Fishing", "Photography", "Picnicking"],
    },
    {
      name: "Shilloi Lake",
      description: "Serene lake surrounded by lush green hills",
      type: "Scenic Lake",
      activities: ["Boating", "Bird watching", "Camping", "Nature walks"],
    },
    {
      name: "Mt. Zanibu",
      description: "Majestic mountain offering panoramic views",
      type: "Mountain Peak",
      activities: ["Trekking", "Rock climbing", "Sunrise viewing", "Adventure sports"],
    },
    {
      name: "Dzukou Valley",
      description: "Valley of flowers with breathtaking seasonal blooms",
      type: "Valley",
      activities: ["Hiking", "Flower viewing", "Photography", "Camping"],
    },
  ]

  const experiences = [
    {
      title: "Cultural Immersion",
      description: "Experience authentic Chakhesang Naga traditions",
      icon: "🏛️",
    },
    {
      title: "Adventure Tourism",
      description: "Thrilling outdoor activities in pristine nature",
      icon: "🏔️",
    },
    {
      title: "Eco-Tourism",
      description: "Sustainable tourism promoting conservation",
      icon: "🌿",
    },
    {
      title: "Village Homestays",
      description: "Authentic local living experiences",
      icon: "🏠",
    },
  ]

  return (
    <section id="tourism" className="section tourism-section">
      <div className="container">
        <h2 className="section-title fade-in">Discover Thipuzu</h2>

        <div className="tourism-intro fade-in">
          <div className="intro-content">
            <h3>A Paradise Waiting to be Explored</h3>
            <p>
              Nestled in the heart of Nagaland, Thipuzu Village offers visitors an unparalleled experience of natural
              beauty, rich culture, and warm hospitality. From pristine forests to crystal-clear rivers, from ancient
              traditions to modern adventures, our village is a gateway to the authentic spirit of Northeast India.
            </p>
          </div>
        </div>

        <div className="attractions-section">
          <h3 className="subsection-title fade-in">Natural Attractions</h3>
          <div className="attractions-grid">
            {attractions.map((attraction, index) => (
              <div key={index} className={`attraction-card ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"}`}>
                <div className="attraction-image">
                  <img src="/placeholder.svg?height=250&width=400" alt={attraction.name} />
                  <div className="attraction-type">{attraction.type}</div>
                </div>
                <div className="attraction-content">
                  <h4>{attraction.name}</h4>
                  <p>{attraction.description}</p>
                  <div className="activities">
                    <h5>Activities:</h5>
                    <div className="activity-tags">
                      {attraction.activities.map((activity, idx) => (
                        <span key={idx} className="activity-tag">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="experiences-section fade-in">
          <h3 className="subsection-title">Tourism Experiences</h3>
          <div className="experiences-grid">
            {experiences.map((experience, index) => (
              <div key={index} className="experience-card">
                <div className="experience-icon">{experience.icon}</div>
                <h4>{experience.title}</h4>
                <p>{experience.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="scenic-gallery fade-in">
          <h3 className="subsection-title">Scenic Beauty</h3>
          <div className="gallery-grid">
            <div className="gallery-item large">
              <img src="/placeholder.svg?height=400&width=600" alt="Thipuzu Landscape" />
              <div className="gallery-overlay">
                <h4>Village Panorama</h4>
                <p>Breathtaking views of Thipuzu nestled in the hills</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/placeholder.svg?height=300&width=400" alt="Forest Trail" />
              <div className="gallery-overlay">
                <h4>Forest Trails</h4>
                <p>Pristine walking paths through ancient forests</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/placeholder.svg?height=300&width=400" alt="Traditional House" />
              <div className="gallery-overlay">
                <h4>Traditional Architecture</h4>
                <p>Authentic Naga architectural heritage</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/placeholder.svg?height=300&width=400" alt="Cultural Festival" />
              <div className="gallery-overlay">
                <h4>Cultural Celebrations</h4>
                <p>Vibrant festivals and traditional ceremonies</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/placeholder.svg?height=300&width=400" alt="Sunrise View" />
              <div className="gallery-overlay">
                <h4>Mountain Sunrise</h4>
                <p>Spectacular dawn views from village peaks</p>
              </div>
            </div>
          </div>
        </div>

        <div className="visit-info fade-in">
          <div className="visit-content">
            <div className="visit-text">
              <h3>Plan Your Visit</h3>
              <p>
                Thipuzu Village welcomes visitors throughout the year, with each season offering unique experiences. The
                best time to visit is during the post-monsoon months when the landscape is lush and the weather is
                pleasant.
              </p>
              <div className="visit-details">
                <div className="detail-item">
                  <h5>Best Time to Visit</h5>
                  <p>October to March - Pleasant weather and clear skies</p>
                </div>
                <div className="detail-item">
                  <h5>How to Reach</h5>
                  <p>Via Pfutsero or Chozuba, well-connected by road</p>
                </div>
                <div className="detail-item">
                  <h5>Accommodation</h5>
                  <p>Village homestays and community guesthouses</p>
                </div>
                <div className="detail-item">
                  <h5>Local Guides</h5>
                  <p>Experienced community members available</p>
                </div>
              </div>
            </div>
            <div className="visit-image">
              <img src="/placeholder.svg?height=400&width=500" alt="Village Welcome" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tourism
