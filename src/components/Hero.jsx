import './Hero.css'
import Globe3D from './ui/Globe3D'

const globeMarkers = [
  { lat: 39.8283, lng: -98.5795, src: '/images/Milo-ai-logo.png', label: 'Michael Martinez — Kansas, USA' },
]

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
          <a href="/images/Michael-Martinez-resume-7.pdf" download className="cta-secondary">
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <Globe3D
          className="hero-globe"
          markers={globeMarkers}
          config={{
            showAtmosphere: false,
            bumpScale: 5,
            autoRotateSpeed: 0.3,
          }}
        />
      </div>
    </section>
  )
}

export default Hero
