import './Experience.css'
import originLabsLogo from '../assets/OriginLabs-logo2.png'

const experiences = [
  {
    role: 'Founder & Full-Stack Developer',
    company: 'OriginLabs',
    logo: originLabsLogo,
    logoClass: 'logo-icon',
    period: 'June 2026 – Present',
    bullets: [
      'Founded and operate an independent software studio focused on building and launching AI-powered web and mobile applications',
      'Designed, developed, and deployed multiple SaaS products using React, Next.js, TypeScript, Supabase, Stripe, and modern AI APIs',
      'Built end-to-end products including authentication systems, payment integrations, database architecture, responsive user interfaces, and AI-powered workflows',
      'Led product strategy, UI/UX design, development, testing, deployment, and customer acquisition efforts',
      'Integrated AI technologies including OpenAI-compatible APIs, image generation, conversational AI, and workflow automation',
      'Deployed and managed production applications using Vercel, cloud infrastructure, and modern CI/CD practices',
      'Rapidly validated product ideas through MVP development, user feedback, and iterative product improvements',
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
