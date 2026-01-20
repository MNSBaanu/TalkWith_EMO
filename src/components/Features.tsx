import { Palette, Users, BookOpen, Target, Sparkles, Globe } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: "Dream Canvas",
      description: "A sacred space where you can paint your aspirations without judgment. Visualize, plan, and refine your dreams with our intuitive tools.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Users,
      title: "Dream Circles",
      description: "Join intimate groups of like-minded dreamers. Share your journey, celebrate milestones, and lift each other higher.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: BookOpen,
      title: "Inspiration Library",
      description: "Thousands of stories from dreamers who dared to pursue the impossible—and succeeded. Find your inspiration here.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Dream Tracking",
      description: "Transform abstract dreams into concrete goals with our unique dream-to-reality methodology.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Sparkles,
      title: "Serendipity Engine",
      description: "Our AI connects you with unexpected opportunities, collaborators, and resources aligned with your dreams.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with dreamers worldwide. Dreams know no borders, and neither should your network.",
      color: "from-teal-500 to-blue-500"
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Dreamer Experience
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Every feature designed to amplify human potential and transform dreams into reality
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`bg-gradient-to-r ${feature.color} rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Dreams?
            </h3>
            <p className="text-white/80 mb-6">
              Join thousands of dreamers who refuse to settle for ordinary
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105">
              Begin Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features