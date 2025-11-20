import { useState } from "react"
import "./Tourism.css"

const Tourism = () => {
  /* Previously showcased attractions that were not part of Thipüzu village.
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
  ] */

  const localAttractions = [
    {
      name: "Mini Eco-Tourism Park, Jüdü",
      type: "Amrit Sarovar Lake",
      description:
        "A serene man-made lake cradled by four hillocks, doubling as a vital irrigation reservoir and community recreation hub.",
      highlights: [
        "Adopted as an Amrit Sarovar under Azadi Ka Amrit Mahotsav (April 2022)",
        "1.2-acre lake with 50 lakh litre storage capacity and reliable power supply",
        "Conference hall (50 pax), kitchen, sanitation facilities and water tank",
        "Swimming, boating and picnic amenities for families and visitors",
      ],
    },
    {
      name: "Chümevinyi Peak",
      type: "Viewpoint",
      description:
        "A 10-minute rhododendron-lined trek culminating in sweeping views of untouched forests perched above Jüdü lake.",
      highlights: [
        "Perfect pause point for coffee and tea breaks en route",
        "Elevated vantage above the Mini Eco-Tourism Park",
        "Rhododendron canopy that blooms spectacularly in season",
        "Ideal for sunrise contemplation and quiet reflection",
      ],
    },
    {
      name: "Theyeyi Zhetu",
      type: "Historic Hillock",
      description:
        "Sacred ground beneath Yohu Merütu commemorating bravery, resilience, and a pivotal 1974 encounter that shaped village history.",
      highlights: [
        "Site of head-hunting era legend meaning “the hillock where Theyeyi was killed”",
        "July 12, 1974 Naga Army engagement with an Indian Army chopper",
        "Approximate altitude of 2000 metres with south-west panoramas",
        "Quick 5-minute trek rewarded with adrenaline and storytelling",
      ],
    },
    {
      name: "Rova Tsüzhütu",
      type: "Cultural Lookout",
      description:
        "A kiwi-and-persimmon-lined walk to the hillock where Rova's quick thinking forged folklore and camaraderie.",
      highlights: [
        "3-minute access trail overlooking Jüdü Mini Eco-Tourism Park",
        "Named after Rova’s legendary stag encounter etched onto stone",
        "Surrounded by productive orchards and seasonal blooms",
        "Photo-friendly ridge for golden hour picnics",
      ],
    },
    {
      name: "Rihuba Baptist Church Site",
      type: "Spiritual Ridge",
      description:
        "Majestic church location atop Pusa-nyi (2050 m) marking the Therüjüza watershed and offering sweeping east-west vistas.",
      highlights: [
        "Views of horticulture belts, virgin forests, and Chozuba Sub-Division",
        "Westward gaze reaches Japfü range and Kohima city skyline",
        "Witness river origins feeding Tesürü, Tavūrū, Sanyerü and beyond",
        "Ideal for dawn devotions and sunset contemplation",
      ],
    },
    {
      name: "Kiwi & Allied Fruit Processing Unit",
      type: "Agri-Enterprise",
      description:
        "A MSME-sanctioned facility run by Thipüzumi Kiwi Farming Co-operative Society, showcasing local farm-to-table innovation.",
      highlights: [
        "Processes up to 300 kg of kiwi per hour into squash, juice, jam and more",
        "Also crafts candy, dry fruits and mineral water for wider markets",
        "Trained 20+ youth with rotational employment for 4-5 artisans daily",
        "Embodies community entrepreneurship and value-addition",
      ],
    },
    {
      name: "Rural Resource & Training Centre, Chokriba",
      type: "Community Hub",
      description:
        "A multi-storey learning complex along the Pfutsero-Chetheba road supporting farmers, trainees and artisans alike.",
      highlights: [
        "Conference hall, computer lab, farmer’s market and resource rooms",
        "Guest accommodation spanning four- and six-bedded dormitories",
        "Basement kitchens for intimate to large gatherings with firewood support",
        "Adjacent workstation trains youth in wood carving and crafts",
      ],
    },
    {
      name: "Horticulture Farm, Süsabotsü",
      type: "Agro Tourism Estate",
      description:
        "A 100-acre forest-embraced farm east of Rihuba, perfect for seasonal camping and learning about high-altitude crops.",
      highlights: [
        "Accessible by approach road; ideal for dawn drives",
        "Cultivates kiwi, persimmon, avocado, peach, nectarine, apricot and vegetables",
        "Ample tent-friendly pockets for dry-season camping",
        "Birdsong-rich environment that spotlights living biodiversity",
      ],
    },
  ]

  const heritageNarratives = [
    {
      title: "The Coming of Christianity",
      era: "1939 – Faith Finds Root",
      paragraphs: [
        "For nearly three centuries after settling, Thipüzu remained steadfastly pagan until a stirring in 1939. Nepohü Kezo, alongside Ciekroshuyi Epao and Hülürü Rose, expressed a heartfelt desire to embrace Christianity.",
        "Following village-wide consent, the trio invited Sülüho Keyho of Chozuba, a field evangelist under Rev. J.E. Tanquist of the American Baptist Mission. He challenged them to unwavering devotion before noting their names and introducing the Sabbath rhythm.",
        "In a world without calendars, believers pinched straw stalks or counted corn seeds to mark six days of work and the seventh for rest. On Sundays they gathered in Hünerü Rose’s kitchen, listening to Scripture being read aloud until they, too, could read.",
      ],
    },
    {
      title: "Thipüzumi Baptist Church Building",
      era: "1940s – Present",
      paragraphs: [
        "The first believers worshipped around Hünerü Rose’s fireplace before a modest 20×10 ft thatch church rose at Kharüzu. Contributions—like Hünerü’s 25 paise despite not yet converting—signalled collective ownership.",
        "Rohüyi Phüdotou became the enduring site as Indian Army raids burned the thatch structure thrice, only for villagers to rebuild each time. CGI roofing arrived through the efforts of Hüvotso Epao and Husai Tetseo.",
        "By 1968, the community envisioned a modern church, hauling materials by headload from Sakroza. Dedicated in 1972, it still gave way to a grander dream when the entire village embraced Christianity by 2001.",
        "An Ethnic Sales Day in Kohima (2008) and a Building Committee (2010) paved the way for a pentagon-inspired church estimated at ₹1 crore. The foundation stone was laid on 1 October 2011 by Rev. K. Rhakho, and the landmark was completed in December 2014—just in time for the Platinum Jubilee.",
      ],
    },
  ]

  const [flippedCard, setFlippedCard] = useState(null)

  const handleCardClick = (index) => {
    setFlippedCard((prev) => (prev === index ? null : index))
  }

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
          <h3 className="subsection-title fade-in">Natural & Cultural Attractions</h3>
          <div className="attractions-grid horizontal-scroll">
            {localAttractions.map((attraction, index) => (
              <button
                key={attraction.name}
                className={`attraction-card ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"} ${
                  flippedCard === index ? "flipped" : ""
                }`}
                onClick={() => handleCardClick(index)}
                type="button"
                aria-pressed={flippedCard === index}
              >
                <div className="card-inner">
                  <div className="card-face card-front">
                    <div className="attraction-image">
                      <img src="/placeholder.svg?height=250&width=400" alt={attraction.name} />
                      <div className="attraction-type">{attraction.type}</div>
                    </div>
                    <div className="attraction-content">
                      <h4>{attraction.name}</h4>
                      <p>{attraction.description}</p>
                      <p className="flip-hint">Tap to view highlights</p>
                    </div>
                  </div>
                  <div className="card-face card-back">
                    <div className="attraction-content">
                      <h4>{attraction.name}</h4>
                      <div className="activities">
                        <h5>Highlights:</h5>
                        <ul className="highlight-list">
                          {attraction.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
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

        <div className="heritage-section fade-in">
          <h3 className="subsection-title">Faith & Heritage</h3>
          <div className="heritage-grid">
            {heritageNarratives.map((story) => (
              <article key={story.title} className="heritage-card">
                <div className="heritage-header">
                  <p className="heritage-era">{story.era}</p>
                  <h4>{story.title}</h4>
                </div>
                <div className="heritage-body">
                  {story.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
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
