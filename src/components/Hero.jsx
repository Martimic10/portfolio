import './Hero.css'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="glitch" data-text="Michael Martinez">Michael Martinez</span>
          </h1>
          <h2 className="hero-subtitle">
            <span className="typing-text">FULL STACK DEVELOPER</span>
          </h2>
          <p className="hero-description">
            Passionate about building intuitive, high-performing digital products that merge design and functionality.
            I focus on clean architecture, maintainable code, and seamless user experiences — driven by curiosity,
            creativity, and a genuine love for building things that people actually want to use.
          </p>
          <div className="hero-cta">
            <button className="cta-button primary" onClick={scrollToProjects}>
              <span>VIEW PROJECTS</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <a href="/resume1.pdf" download className="cta-button secondary">
              <span>VIEW RESUME</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-element">
            <div className="code-block">
              <div className="code-line">
                <span className="code-keyword">const</span>{' '}
                <span className="code-variable">developer</span> = {'{'}
              </div>
              <div className="code-line indent">
                <span className="code-property">stack</span>:{' '}
                <span className="code-string">['React', 'TypeScript', 'Next.js']</span>,
              </div>
              <div className="code-line indent">
                <span className="code-property">mobile</span>:{' '}
                <span className="code-string">['SwiftUI', 'React Native']</span>,
              </div>
              <div className="code-line indent">
                <span className="code-property">focus</span>:{' '}
                <span className="code-string">'AI-powered products'</span>
              </div>
              <div className="code-line">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>SCROLL TO EXPLORE</p>
      </div>
    </section>
  )
}

export default Hero
