import "./Governance.css"

const Governance = () => {
  const leaders = [
    {
      position: "Village Chairman",
      name: "Mr. Zhoveyi Rose",
      role: "Leading village administration and development initiatives",
    },
    {
      position: "Gaon Bura",
      name: "Zacutso Thelu-O",
      role: "Traditional village head and cultural guardian",
    },
  ]

  const committees = [
    {
      name: "Village Council",
      description: "Primary governing body making decisions for village welfare",
      members: "12 elected members",
    },
    {
      name: "Research Committee",
      description: "Documenting village history and cultural preservation",
      members: "5 dedicated researchers",
    },
    {
      name: "Development Committee",
      description: "Overseeing infrastructure and economic development projects",
      members: "8 community leaders",
    },
    {
      name: "Youth Committee",
      description: "Engaging young people in community activities and sports",
      members: "15 active youth",
    },
  ]

  return (
    <section id="governance" className="section governance-section">
      <div className="container">
        <h2 className="section-title fade-in">Village Governance</h2>

        <div className="leadership-section">
          <h3 className="subsection-title fade-in">Our Leaders</h3>
          <div className="leaders-grid">
            {leaders.map((leader, index) => (
              <div key={index} className={`leader-card ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"}`}>
                <div className="leader-avatar">
                  <img src="/placeholder.svg?height=120&width=120" alt={leader.name} />
                </div>
                <div className="leader-info">
                  <h4>{leader.position}</h4>
                  <h5>{leader.name}</h5>
                  <p>{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="governance-structure">
          <h3 className="subsection-title fade-in">Governance Structure</h3>
          <div className="structure-content">
            <div className="structure-text slide-in-left">
              <p>
                Thipuzu Village operates under a democratic system that blends traditional Naga governance with modern
                administrative practices. Our Village Council serves as the primary decision-making body, ensuring that
                all voices in the community are heard and represented.
              </p>
              <p>
                The traditional role of the Gaon Bura continues to be respected, serving as a bridge between our
                ancestral customs and contemporary governance needs. This dual system ensures both cultural continuity
                and effective administration.
              </p>
            </div>
            <div className="structure-image slide-in-right">
              <img src="/placeholder.svg?height=300&width=400" alt="Village Council Meeting" />
            </div>
          </div>
        </div>

        <div className="committees-section">
          <h3 className="subsection-title fade-in">Village Committees</h3>
          <div className="committees-grid">
            {committees.map((committee, index) => (
              <div key={index} className={`committee-card fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="committee-header">
                  <h4>{committee.name}</h4>
                  <span className="member-count">{committee.members}</span>
                </div>
                <p>{committee.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="research-highlight fade-in">
          <div className="highlight-content">
            <div className="highlight-icon">📚</div>
            <div className="highlight-text">
              <h4>Research Committee Initiative</h4>
              <p>
                Our dedicated Research Committee plays a crucial role in preserving our village's rich history and
                cultural heritage. Through systematic documentation and oral history collection, they ensure that future
                generations will have access to our ancestral knowledge and traditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Governance
