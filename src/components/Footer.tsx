import { Sparkles, Heart, Globe, Mail, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-slate-900/60 backdrop-blur-md border-t border-blue-500/30 py-16 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-slate-700/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div>
                <span className="text-3xl font-display font-bold gradient-text">The Dreamer</span>
                <div className="text-sm text-slate-400 -mt-1">Where dreams ignite</div>
              </div>
            </div>
            
            <p className="text-slate-200 mb-8 max-w-md leading-relaxed">
              Where every dreamer finds their spark. Join a movement that believes in the power of dreams 
              and the courage to pursue them. Together, we're building a world where impossible is just an opinion.
            </p>
            
            <div className="flex items-center space-x-2 text-slate-300 mb-8">
              <Heart className="h-5 w-5 text-blue-400 animate-pulse" />
              <span className="text-sm">Built with love for dreamers worldwide</span>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              <a href="#" className="glass rounded-full p-3 hover:bg-blue-500/20 transition-all duration-300 group">
                <Twitter className="h-5 w-5 text-slate-300 group-hover:text-white" />
              </a>
              <a href="#" className="glass rounded-full p-3 hover:bg-blue-500/20 transition-all duration-300 group">
                <Instagram className="h-5 w-5 text-slate-300 group-hover:text-white" />
              </a>
              <a href="#" className="glass rounded-full p-3 hover:bg-blue-500/20 transition-all duration-300 group">
                <Linkedin className="h-5 w-5 text-slate-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Features</span>
                </a>
              </li>
              <li>
                <a href="#community" className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Community</span>
                </a>
              </li>
              <li>
                <a href="#stories" className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Success Stories</span>
                </a>
              </li>
              <li>
                <a href="#manifesto" className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Our Manifesto</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <Globe className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span>Global Community</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <Mail className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <Sparkles className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span>Join Beta</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 pt-8 border-t border-blue-500/30">
          <div className="glass rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Inspired</h3>
            <p className="text-slate-200 mb-6">Get weekly doses of inspiration and dreamer stories delivered to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-slate-800/50 border border-blue-500/30 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button className="btn-primary px-8 py-3 rounded-full font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-blue-500/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2024 The Dreamer. Because the world needs more dreamers who dare to dream.
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            <div className="flex items-center space-x-1 text-slate-400 text-sm">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-blue-400 animate-pulse" />
              <span>for dreamers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 glass rounded-full p-4 hover:bg-blue-500/20 transition-all duration-300 group z-50 animate-fadeInUp"
        >
          <ArrowUp className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
        </button>
      )}
    </footer>
  )
}

export default Footer