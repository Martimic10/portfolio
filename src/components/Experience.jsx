import './Experience.css'

const experiences = [
  {
    role: 'Founder & Lead Developer',
    company: 'ImpactAI',
    logo: '/images/ImpactAI-new-logo.png',
    logoClass: 'logo-icon',
    period: 'May 2026 – Present',
    bullets: [
      'Leading development of an AI-powered golf platform focused on swing analysis, scoring, and social gameplay experiences',
      'Built and optimized mobile-first interfaces, AI-driven analysis systems, and subscription infrastructure from the ground up',
      'Architected modern frontend systems with a focus on performance, usability, and premium product design',
      'Collaborated across product strategy and user experience to deliver a polished, engaging platform for golfers',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Workiva',
    logo: '/images/workiva-logo.png',
    period: 'Jan 2025 – Mar 2026',
    bullets: [
      'Built and maintained responsive, high-performance frontend components using React and TypeScript',
      'Collaborated with design and backend teams to deliver clean, scalable UI systems',
      'Improved user experience by optimizing page load performance and refining component architecture',
      'Contributed to internal tools and dashboards with a focus on usability and clarity',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="title-line"></div>
        </div>

        <div className="experience-list">
          {experiences.map((exp, i) => (
            <div key={i} className="experience-item">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company-row">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className={`exp-company-logo${exp.logoClass ? ` ${exp.logoClass}` : ''}`}
                      />
                    )}
                    <span className="exp-company">{exp.company}</span>
                  </div>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
              <ul className="exp-bullets">
                {exp.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
