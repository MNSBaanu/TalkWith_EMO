import { ArrowRight, Sparkles, Heart, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-12 w-12 text-yellow-400 mr-4" />
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            The Dreamer
          </h1>
          <Sparkles className="h-12 w-12 text-yellow-400 ml-4" />
        </div>

        <p className="text-xl md:text-2xl text-white/90 mb-8 italic">
          Where every dreamer finds their spark
        </p>

        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          We believe that within every person lies an untapped universe of dreams waiting to be awakened. 
          Join a movement that inspires dreamers to dream and transforms visions into reality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
            Explore Dreams
          </button>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Dream Community</h3>
            <p className="text-white/70 text-sm">Connect with fellow dreamers who believe in your vision</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-yellow-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Dream Canvas</h3>
            <p className="text-white/70 text-sm">Visualize and plan your dreams with intuitive tools</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Daily Inspiration</h3>
            <p className="text-white/70 text-sm">Fuel your imagination with curated content</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero