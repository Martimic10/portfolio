import './Hero.css'

const cubelets = Array.from({ length: 27 }, (_, index) => ({
  x: (index % 3) - 1,
  y: (Math.floor(index / 3) % 3) - 1,
  z: Math.floor(index / 9) - 1,
}))

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
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-cube-scene">
          <div className="hero-cube">
            {cubelets.map((cubelet, index) => (
              <div
                key={index}
                className="cubelet"
                style={{
                  '--x': cubelet.x,
                  '--y': cubelet.y,
                  '--z': cubelet.z,
                }}
              >
                <span className="cubelet-face cubelet-face-front"></span>
                <span className="cubelet-face cubelet-face-back"></span>
                <span className="cubelet-face cubelet-face-right"></span>
                <span className="cubelet-face cubelet-face-left"></span>
                <span className="cubelet-face cubelet-face-top"></span>
                <span className="cubelet-face cubelet-face-bottom"></span>
              </div>
            ))}
          </div>
          <div className="hero-cube-shadow"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
