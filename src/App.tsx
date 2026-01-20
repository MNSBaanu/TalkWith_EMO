import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dreamer-dark relative overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
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