import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Juno',
      description: 'An AI-powered chatbot delivering intelligent, context-aware conversations with seamless user experience.',
      thumbnail: '/images/Juno-logo.png',
      technologies: ['react', 'nodejs', 'openai', 'tailwind'],
      githubUrl: 'https://github.com/Martimic10/Juno-Chatbot',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'GameForge',
      description: 'A 2D game builder empowering creators to design and develop games with an intuitive visual interface.',
      thumbnail: '/images/GameForge-logo.png',
      technologies: ['react', 'typescript', 'phaser', 'canvas'],
      githubUrl: 'https://github.com/Martimic10/GameForge',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Eyko',
      description: 'A platform where users can run and integrate computer vision models into any codebase.',
      thumbnail: '/images/Eyko-logo.png',
      technologies: ['react', 'typescript', 'docker', 'aws', 'python', 'tensorflow'],
      githubUrl: 'https://github.com/Martimic10/eyko',
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'Arc AI',
      description: 'A sleek, modern front-end AI project showcasing cutting-edge design and user interface principles.',
      thumbnail: '/images/ArcAI-logo.png',
      technologies: ['react', 'tailwind', 'openai'],
      githubUrl: 'https://github.com/Martimic10/Arc-AI',
      liveUrl: 'https://arc-ai-eight.vercel.app'
    },
    {
      id: 5,
      title: 'CodeZap',
      description: 'A fast, modern UI experiment pushing the boundaries of performance and visual design.',
      thumbnail: '/images/CodeZap-logo.png',
      technologies: ['react', 'typescript', 'tailwind'],
      githubUrl: 'https://github.com/Martimic10/CodeZap',
      liveUrl: 'https://code-zap-lovat.vercel.app'
    },
    {
      id: 6,
      title: 'Vorg AI',
      description: 'An AI-powered landing page generator that creates stunning, conversion-focused landing pages in seconds.',
      thumbnail: '/images/VorgAI-logo.png',
      technologies: ['react', 'tailwind', 'typescript', 'openai'],
      githubUrl: 'https://github.com/Martimic10/Vorgai',
      liveUrl: 'https://vorg.dev'
    }
  ]

  // Technology logo mapping
  const techLogos = {
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    nextjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    django: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    aws: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    vue: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    graphql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    openai: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg',
    canvas: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    phaser: '/images/phaser-logo.png',
    tensorflow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">02.</span> FEATURED PROJECTS
          </h2>
          <div className="title-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-thumbnail">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400/0a0e27/00d9ff?text=Project+Image'
                  }}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View GitHub Repository"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View Live Demo"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="tech-icon"
                      title={tech.toUpperCase()}
                    >
                      <img
                        src={techLogos[tech]}
                        alt={tech}
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
