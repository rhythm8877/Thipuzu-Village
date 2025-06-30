import "./Demographics.css"

const Demographics = () => {
  const populationData = [
    { category: "Total Population", value: "3,249", description: "As per 2011 Census" },
    { category: "Male Population", value: "1,687", description: "52% of total population" },
    { category: "Female Population", value: "1,562", description: "48% of total population" },
    { category: "Literacy Rate", value: "87%", description: "Above national average" },
  ]

  const occupationData = [
    { occupation: "Cultivators", count: 879, percentage: 27 },
    { occupation: "Agricultural Laborers", count: 456, percentage: 14 },
    { occupation: "Government Service", count: 324, percentage: 10 },
    { occupation: "Small Business", count: 298, percentage: 9 },
    { occupation: "Traditional Crafts", count: 187, percentage: 6 },
    { occupation: "Others", count: 1105, percentage: 34 },
  ]

  const ageGroups = [
    { group: "0-14 years", percentage: 28, description: "Children and adolescents" },
    { group: "15-59 years", percentage: 62, description: "Working age population" },
    { group: "60+ years", percentage: 10, description: "Senior citizens" },
  ]

  return (
    <section id="demographics" className="section demographics-section">
      <div className="container">
        <h2 className="section-title fade-in">Demographics & Statistics</h2>

        <div className="population-overview fade-in">
          <h3 className="subsection-title">Population Overview</h3>
          <div className="population-grid">
            {populationData.map((item, index) => (
              <div key={index} className={`population-card ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"}`}>
                <div className="population-number">{item.value}</div>
                <h4>{item.category}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="occupation-section">
          <h3 className="subsection-title fade-in">Occupational Distribution</h3>
          <div className="occupation-content">
            <div className="occupation-chart slide-in-left">
              <div className="chart-container">
                {occupationData.map((item, index) => (
                  <div key={index} className="occupation-bar">
                    <div className="bar-info">
                      <span className="occupation-name">{item.occupation}</span>
                      <span className="occupation-count">{item.count} people</span>
                    </div>
                    <div className="bar-container">
                      <div className="bar-fill" style={{ width: `${item.percentage}%` }}></div>
                      <span className="percentage">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="occupation-text slide-in-right">
              <h4>Economic Profile</h4>
              <p>
                Agriculture remains the backbone of Thipuzu Village's economy, with 879 cultivators forming the largest
                occupational group. This reflects our deep connection to the land and traditional farming practices that
                have sustained our community for generations.
              </p>
              <p>
                The diversification into government service, small businesses, and traditional crafts shows our
                community's adaptation to modern economic opportunities while preserving our cultural heritage through
                traditional occupations.
              </p>
              <div className="economic-highlights">
                <div className="highlight-item">
                  <span className="highlight-number">41%</span>
                  <span className="highlight-label">Agriculture Dependent</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">19%</span>
                  <span className="highlight-label">Service Sector</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="age-distribution fade-in">
          <h3 className="subsection-title">Age Distribution</h3>
          <div className="age-content">
            <div className="age-chart">
              {ageGroups.map((group, index) => (
                <div key={index} className="age-group">
                  <div className="age-circle">
                    <div className="circle-progress" style={{ "--percentage": group.percentage }}>
                      <span className="percentage-text">{group.percentage}%</span>
                    </div>
                  </div>
                  <h5>{group.group}</h5>
                  <p>{group.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="demographic-insights fade-in">
          <div className="insights-content">
            <div className="insights-text">
              <h3>Demographic Insights</h3>
              <p>
                Thipuzu Village demonstrates a healthy demographic profile with a balanced age distribution and strong
                working-age population. Our literacy rate of 87% significantly exceeds the national average, reflecting
                our community's commitment to education.
              </p>
              <p>
                The gender ratio shows a slight male majority, which is typical for rural areas in Nagaland. Our young
                population (28% under 15) represents the future of our village and the continuation of our cultural
                heritage.
              </p>
              <div className="key-statistics">
                <div className="stat-box">
                  <h5>Population Density</h5>
                  <span>Moderate density allowing sustainable living</span>
                </div>
                <div className="stat-box">
                  <h5>Growth Rate</h5>
                  <span>Steady growth with youth retention</span>
                </div>
                <div className="stat-box">
                  <h5>Migration</h5>
                  <span>Low out-migration due to local opportunities</span>
                </div>
              </div>
            </div>
            <div className="insights-image">
              <img src="/placeholder.svg?height=400&width=500" alt="Village Community" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demographics
