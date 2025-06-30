import "./Development.css"

const Development = () => {
  const projects = [
    {
      title: "Trees-for-Wealth Initiative",
      description: "Sustainable farming of kiwi and persimmon fruits",
      status: "Ongoing",
      impact: "Economic diversification and environmental conservation",
    },
    {
      title: "Kütsalü Forest Conservation",
      description: "Community-led forest protection program",
      status: "Active",
      impact: "Biodiversity preservation and climate action",
    },
    {
      title: "Community Sports Stadium",
      description: "Makeshift stadium for wrestling and cultural events",
      status: "Completed",
      impact: "Youth engagement and cultural preservation",
    },
  ]

  const infrastructure = [
    { item: "Road Connectivity", status: "Available", description: "Well-connected village roads" },
    { item: "Electricity", status: "Available", description: "Reliable power supply" },
    { item: "Water Supply", status: "Available", description: "Clean drinking water access" },
    { item: "Mobile Network", status: "Available", description: "Good telecommunication coverage" },
    { item: "Internet Connectivity", status: "Improving", description: "Expanding digital access" },
    { item: "Healthcare Facility", status: "Basic", description: "Primary healthcare services" },
  ]

  return (
    <section id="development" className="section development-section">
      <div className="container">
        <h2 className="section-title fade-in">Development & Progress</h2>

        <div className="development-intro fade-in">
          <div className="intro-content">
            <h3>Building a Sustainable Future</h3>
            <p>
              Thipuzu Village is committed to sustainable development that balances economic growth with environmental
              conservation and cultural preservation. Our development initiatives focus on improving the quality of life
              for our residents while maintaining our connection to the land and our traditional values.
            </p>
          </div>
        </div>

        <div className="projects-section">
          <h3 className="subsection-title fade-in">Key Development Projects</h3>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className={`project-card ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"}`}>
                <div className="project-header">
                  <h4>{project.title}</h4>
                  <span className={`project-status ${project.status.toLowerCase()}`}>{project.status}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-impact">
                  <strong>Impact:</strong> {project.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="trees-wealth-highlight fade-in">
          <div className="highlight-content">
            <div className="highlight-image">
              <img src="/placeholder.svg?height=300&width=400" alt="Kiwi and Persimmon Farming" />
            </div>
            <div className="highlight-text">
              <h4>Trees-for-Wealth Success Story</h4>
              <p>
                Our Trees-for-Wealth initiative has transformed the agricultural landscape of Thipuzu Village. By
                introducing kiwi and persimmon cultivation, we've created new income streams for our farmers while
                promoting sustainable agriculture practices.
              </p>
              <p>
                This program not only provides economic benefits but also contributes to environmental conservation by
                increasing forest cover and promoting biodiversity. The success of this initiative serves as a model for
                other villages in the region.
              </p>
              <div className="highlight-stats">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Farmers Involved</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Trees Planted</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="infrastructure-section">
          <h3 className="subsection-title fade-in">Infrastructure Development</h3>
          <div className="infrastructure-grid">
            {infrastructure.map((item, index) => (
              <div key={index} className={`infrastructure-card fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="infrastructure-header">
                  <h5>{item.item}</h5>
                  <span className={`status-badge ${item.status.toLowerCase().replace(" ", "-")}`}>{item.status}</span>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="conservation-section fade-in">
          <div className="conservation-content">
            <div className="conservation-text">
              <h3>Environmental Conservation</h3>
              <p>
                The Kütsalü forest conservation program represents our commitment to environmental stewardship. This
                community-led initiative protects our precious forest resources while ensuring sustainable use for
                future generations.
              </p>
              <p>
                Through collective action and traditional knowledge, we maintain the delicate balance between
                development and conservation, proving that progress and environmental protection can go hand in hand.
              </p>
              <div className="conservation-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">🌳</span>
                  <span>Forest Protection</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🦋</span>
                  <span>Biodiversity Conservation</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">💧</span>
                  <span>Watershed Management</span>
                </div>
              </div>
            </div>
            <div className="conservation-image">
              <img src="/placeholder.svg?height=350&width=450" alt="Kütsalü Forest" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Development
