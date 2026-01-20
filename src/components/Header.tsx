import { useState, useEffect } from 'react'
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-dark shadow-2xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div>
              <span className="text-2xl font-display font-bold gradient-text">
                The Dreamer
              </span>
              <div className="text-xs text-slate-400 -mt-1">Where dreams ignite</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <a href="#features" className="text-slate-200 hover:text-white transition-all duration-300 flex items-center space-x-1 py-2">
                <span>Features</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </a>
              <div className="absolute top-full left-0 mt-2 w-48 glass rounded-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <a href="#canvas" className="block text-slate-200 hover:text-white py-2 transition-colors">Dream Canvas</a>
                <a href="#circles" className="block text-slate-200 hover:text-white py-2 transition-colors">Dream Circles</a>
                <a href="#library" className="block text-slate-200 hover:text-white py-2 transition-colors">Inspiration Library</a>
              </div>
            </div>
            <a href="#community" className="text-slate-200 hover:text-white transition-all duration-300 relative group">
              Community
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#stories" className="text-slate-200 hover:text-white transition-all duration-300 relative group">
              Stories
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <button className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-glow">
              Start Dreaming
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 rounded-full glass hover:bg-blue-500/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-blue-500/30">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-slate-200 hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-blue-500/20">
                Features
              </a>
              <a href="#community" className="text-slate-200 hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-blue-500/20">
                Community
              </a>
              <a href="#stories" className="text-slate-200 hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-blue-500/20">
                Stories
              </a>
              <button className="btn-primary text-white px-6 py-3 rounded-full font-semibold w-fit mx-4 mt-2">
                Start Dreaming
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header