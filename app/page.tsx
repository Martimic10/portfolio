import { Github, Mail, Twitter } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Michael Martinez
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Recent Cloud Computing graduate building full-stack applications with
            React, Next.js, TypeScript, and PostgreSQL. Focused on creating clean,
            user-friendly solutions to real-world problems.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://github.com/Martimic10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              <Github size={20} />
              GitHub
            </a>

            <a
              href="mailto:Martinezmichael37@yahoo.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Mail size={20} />
              Contact Me
            </a>

            <a
              href="https://x.com/Martimic10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
            >
              <Twitter size={20} />
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              I'm a full-stack developer with an Associate's degree in Cloud
              Computing from Wichita State University Campus of Applied Sciences
              and Technology (2024). I specialize in building modern web
              applications using React, Next.js, and TypeScript.
            </p>
            <p className="mb-4">
              My approach to development focuses on writing clean, maintainable
              code and creating intuitive user experiences. I'm passionate about
              solving real problems through technology and continuously learning
              new tools and techniques.
            </p>
            <p>
              Currently seeking opportunities where I can contribute to meaningful
              projects while growing as a developer. Open to remote positions or
              relocation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Job Tracker Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Job Application Tracker
                </h3>
                <p className="text-gray-600 mb-4">
                  A full-stack web application for tracking job applications with
                  user authentication and private data storage.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Supabase
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                </div>
                <ul className="text-gray-700 mb-6 space-y-2">
                  <li>• Secure authentication with Supabase Auth</li>
                  <li>• CRUD operations for managing applications</li>
                  <li>• Row-level security for data privacy</li>
                  <li>• Responsive design for all devices</li>
                </ul>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Martimic10/job-application-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Skills</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  React
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  JavaScript
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  HTML5
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  CSS3
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Backend & Database
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  PostgreSQL
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  Supabase
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  SQL
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  REST APIs
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  Authentication
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Tools & Deployment
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  Git/GitHub
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  Vercel
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  VS Code
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  Docker
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  AWS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:Martinezmichael37@yahoo.com"
              className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg"
            >
              <Mail size={22} />
              Send Email
            </a>

            <a
              href="https://github.com/Martimic10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition text-lg"
            >
              <Github size={22} />
              View GitHub
            </a>

            <a
              href="https://x.com/Martimic10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition text-lg"
            >
              <Twitter size={22} />
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white text-center">
        <p>© 2025 Michael Martinez. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </main>
  );
}


