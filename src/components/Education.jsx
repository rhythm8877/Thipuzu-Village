import "./Education.css"

const Education = () => {
  const schools = [
    {
      name: "Government Primary School",
      type: "Primary Education",
      grades: "Class I - V",
      students: "120+ Students",
      features: ["Modern Classrooms", "Qualified Teachers", "Mid-day Meal Program", "Sports Facilities"],
    },
    {
      name: "Government High School",
      type: "Secondary Education",
      grades: "Class VI - X",
      students: "200+ Students",
      features: ["Science Laboratory", "Computer Lab", "Library", "Sports Ground", "Skilled Faculty"],
    },
  ]

  const achievements = [
    {
      event: "Chokri Area Games 2021",
      achievement: "Multiple Medal Winners",
      description: "Our youth excelled in various sports categories",
    },
    {
      event: "District Academic Competition",
      achievement: "Top Performers",
      description: "Students consistently rank among district toppers",
    },
    {
      event: "Cultural Competitions",
      achievement: "Traditional Arts Winners",
      description: "Preserving culture through competitive excellence",
    },
  ]

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title fade-in">Education & Learning</h2>

        <div className="literacy-highlight fade-in">
          <div className="literacy-content">
            <div className="literacy-stat">
              <span className="stat-number">87%</span>
              <span className="stat-label">Literacy Rate</span>
            </div>
            <div className="literacy-text">
              <h3>Commitment to Education</h3>
              <p>
                Thipuzu Village takes pride in its impressive literacy rate of 87%, reflecting our community's strong
                commitment to education and knowledge. This achievement represents years of dedicated effort by parents,
                teachers, and community leaders who believe in the transformative power of education.
              </p>
            </div>
          </div>
        </div>

        <div className="schools-section">
          <h3 className="subsection-title fade-in">Our Educational Institutions</h3>
          <div className="schools-grid">
            {schools.map((school, index) => (
              <div key={index} className={`school-card ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"}`}>
                <div className="school-header">
                  <h4>{school.name}</h4>
                  <span className="school-type">{school.type}</span>
                </div>
                <div className="school-info">
                  <div className="info-item">
                    <strong>Grades:</strong> {school.grades}
                  </div>
                  <div className="info-item">
                    <strong>Enrollment:</strong> {school.students}
                  </div>
                </div>
                <div className="school-features">
                  <h5>Key Features:</h5>
                  <ul>
                    {school.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <h3 className="subsection-title fade-in">Student Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className={`achievement-card fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="achievement-icon">🏆</div>
                <h4>{achievement.event}</h4>
                <h5>{achievement.achievement}</h5>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="education-vision fade-in">
          <div className="vision-content">
            <div className="vision-text">
              <h3>Our Educational Vision</h3>
              <p>
                We envision Thipuzu Village as a center of learning excellence where traditional wisdom meets modern
                education. Our goal is to nurture well-rounded individuals who are rooted in their cultural heritage
                while being prepared for the challenges of the modern world.
              </p>
              <p>
                Through quality education, we aim to empower our youth to become leaders, innovators, and guardians of
                our cultural legacy. Every child in Thipuzu deserves access to quality education that opens doors to
                unlimited possibilities.
              </p>
              <div className="vision-goals">
                <div className="goal-item">
                  <span className="goal-icon">📚</span>
                  <span>Quality Education for All</span>
                </div>
                <div className="goal-item">
                  <span className="goal-icon">🌱</span>
                  <span>Holistic Development</span>
                </div>
                <div className="goal-item">
                  <span className="goal-icon">🏛️</span>
                  <span>Cultural Preservation</span>
                </div>
              </div>
            </div>
            <div className="vision-image">
              <img src="/placeholder.svg?height=400&width=500" alt="Students in classroom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
