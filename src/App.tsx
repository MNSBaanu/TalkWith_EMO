import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import Chatbot from './components/Chatbot'
import PortalEntry from './components/PortalEntry'
import DreamDNA from './components/DreamDNA'
import DreamAvatar from './components/DreamAvatar'

function App() {
  const [showPortal, setShowPortal] = useState(true)
  const [hasVisited, setHasVisited] = useState(false)

  useEffect(() => {
    // Check if user has visited before (in this session)
    const visited = sessionStorage.getItem('dreamPortalVisited')
    if (visited) {
      setShowPortal(false)
      setHasVisited(true)
    }
  }, [])

  const handlePortalComplete = () => {
    setShowPortal(false)
    setHasVisited(true)
    sessionStorage.setItem('dreamPortalVisited', 'true')
  }

  return (
    <Router>
      <div className="min-h-screen bg-dreamer-dark relative overflow-hidden">
        {/* Portal Entry Experience */}
        {showPortal && !hasVisited && (
          <PortalEntry onComplete={handlePortalComplete} />
        )}
        
        {/* Main Website Content */}
        <ParticleBackground />
        <div className="relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <DreamDNA />
                <DreamAvatar />
                <Features />
              </>
            } />
          </Routes>
          <Footer />
          <Chatbot />
        </div>
      </div>
    </Router>
  )
}

export default App