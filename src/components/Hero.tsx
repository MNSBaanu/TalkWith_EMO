import { ArrowRight, Sparkles, Heart, Zap, Play, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div 
          className="absolute w-96 h-96 bg-slate-800/20 rounded-full blur-3xl animate-float"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.02}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-blue-800/30 rounded-full blur-3xl animate-float"
          style={{
            right: `${15 + mousePosition.x * 0.015}%`,
            bottom: `${20 + mousePosition.y * 0.015}%`,
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-slate-700/25 rounded-full blur-3xl animate-float"
          style={{
            left: `${60 + mousePosition.x * 0.01}%`,
            top: `${60 + mousePosition.y * 0.01}%`,
            animationDelay: '4s'
          }}
        ></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 animate-fadeInUp">
          <Star className="h-4 w-4 text-blue-400" />
          <span className="text-white text-sm font-medium">Join 10,000+ Dreamers Worldwide</span>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        </div>

        {/* Main heading with staggered animation */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4 animate-scaleIn">
            <Sparkles className="h-16 w-16 text-blue-400 mr-6 animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-display font-bold gradient-text">
              The Dreamer
            </h1>
            <Sparkles className="h-16 w-16 text-blue-400 ml-6 animate-pulse" />
          </div>

          <p className="text-2xl md:text-3xl text-white mb-4 font-light animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Where every dreamer finds their <span className="gradient-text font-semibold">spark</span>
          </p>
        </div>

        <p className="text-lg md:text-xl text-slate-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          We believe that within every person lies an untapped universe of dreams waiting to be awakened. 
          Join a movement that <span className="text-white font-semibold">inspires dreamers to dream</span> and transforms visions into reality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <button className="group btn-primary text-white px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-glow-lg flex items-center">
            <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
            Start Your Journey
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-secondary text-white px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center">
            <Sparkles className="mr-3 h-5 w-5" />
            Explore Dreams
          </button>
        </div>

        {/* Feature highlights with enhanced design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fadeInUp" style={{animationDelay: '0.8s'}}>
          <div className="group text-center hover-lift">
            <div className="glass rounded-2xl p-8 h-full border border-blue-500/30">
              <div className="bg-gradient-to-r from-slate-700 to-blue-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-glow">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-4">Dream Community</h3>
              <p className="text-slate-200 leading-relaxed">Connect with fellow dreamers who believe in your vision and support your journey</p>
            </div>
          </div>
          
          <div className="group text-center hover-lift">
            <div className="glass rounded-2xl p-8 h-full border border-blue-500/30">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-glow">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-4">Dream Canvas</h3>
              <p className="text-slate-200 leading-relaxed">Visualize and plan your dreams with intuitive tools designed for creative minds</p>
            </div>
          </div>
          
          <div className="group text-center hover-lift">
            <div className="glass rounded-2xl p-8 h-full border border-blue-500/30">
              <div className="bg-gradient-to-r from-blue-700 to-slate-700 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-glow">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-4">Daily Inspiration</h3>
              <p className="text-slate-200 leading-relaxed">Fuel your imagination with curated content that pushes your boundaries</p>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '1s'}}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10K+</div>
            <div className="text-slate-300 text-sm">Active Dreamers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500+</div>
            <div className="text-slate-300 text-sm">Dreams Realized</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-slate-300 text-sm">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-slate-300 text-sm">Inspiration</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero