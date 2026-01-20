import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-yellow-400" />
            <span className="text-2xl font-bold text-white">The Dreamer</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white/90 hover:text-white transition-colors">
              Features
            </a>
            <a href="#community" className="text-white/90 hover:text-white transition-colors">
              Community
            </a>
            <a href="#stories" className="text-white/90 hover:text-white transition-colors">
              Stories
            </a>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all">
              Start Dreaming
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-white/90 hover:text-white transition-colors">
                Features
              </a>
              <a href="#community" className="text-white/90 hover:text-white transition-colors">
                Community
              </a>
              <a href="#stories" className="text-white/90 hover:text-white transition-colors">
                Stories
              </a>
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all w-fit">
                Start Dreaming
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header