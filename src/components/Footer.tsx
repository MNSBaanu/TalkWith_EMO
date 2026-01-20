import { Sparkles, Heart, Globe, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-md border-t border-white/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold text-white">The Dreamer</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Where every dreamer finds their spark. Join a movement that believes in the power of dreams 
              and the courage to pursue them.
            </p>
            <div className="flex items-center space-x-2 text-white/60">
              <Heart className="h-4 w-4 text-pink-400" />
              <span className="text-sm">Built with love for dreamers worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#community" className="text-white/70 hover:text-white transition-colors">Community</a></li>
              <li><a href="#stories" className="text-white/70 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#manifesto" className="text-white/70 hover:text-white transition-colors">Our Manifesto</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  Global Community
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 The Dreamer. Because the world needs more dreamers who dare to dream.
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms</a>
            <div className="flex items-center space-x-1 text-white/60 text-sm">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-pink-400" />
              <span>for dreamers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer