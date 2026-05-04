import './Hero.css'

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-tag">Frontend Developer</p>
        <h1 className="hero-title">Michael<br />Martinez</h1>
        <p className="hero-description">
          Passionate about building intuitive, high-performing digital products
          that merge design and functionality. I focus on clean architecture,
          maintainable code, and seamless user experiences.
        </p>
        <div className="hero-cta">
          <button className="cta-primary" onClick={scrollToProjects}>
            View Projects
          </button>
          <a href="/resume1.pdf" download className="cta-secondary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
