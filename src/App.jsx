import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ProjectsPage from './pages/ProjectsPage'

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
