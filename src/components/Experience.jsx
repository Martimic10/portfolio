import './Experience.css'

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Workiva',
    period: 'Feb 2024 – Mar 2025',
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
                  <span className="exp-company">{exp.company}</span>
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
