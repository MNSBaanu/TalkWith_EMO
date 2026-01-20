import { Palette, Users, BookOpen, Target, Sparkles, Globe, ArrowRight, ExternalLink } from 'lucide-react'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Palette,
      title: "Dream Canvas",
      description: "A sacred space where you can paint your aspirations without judgment. Visualize, plan, and refine your dreams with our intuitive tools.",
      color: "from-slate-600 to-blue-600",
      bgColor: "bg-slate-600/20",
      details: "Advanced visualization tools, mood boards, and collaborative planning features"
    },
    {
      icon: Users,
      title: "Dream Circles",
      description: "Join intimate groups of like-minded dreamers. Share your journey, celebrate milestones, and lift each other higher.",
      color: "from-blue-700 to-slate-700",
      bgColor: "bg-blue-700/20",
      details: "Private groups, mentorship matching, and milestone celebrations"
    },
    {
      icon: BookOpen,
      title: "Inspiration Library",
      description: "Thousands of stories from dreamers who dared to pursue the impossible—and succeeded. Find your inspiration here.",
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-600/20",
      details: "Curated success stories, video testimonials, and actionable insights"
    },
    {
      icon: Target,
      title: "Dream Tracking",
      description: "Transform abstract dreams into concrete goals with our unique dream-to-reality methodology.",
      color: "from-slate-700 to-blue-700",
      bgColor: "bg-slate-700/20",
      details: "Smart goal setting, progress tracking, and achievement analytics"
    },
    {
      icon: Sparkles,
      title: "Serendipity Engine",
      description: "Our AI connects you with unexpected opportunities, collaborators, and resources aligned with your dreams.",
      color: "from-blue-800 to-slate-600",
      bgColor: "bg-blue-800/20",
      details: "AI-powered matching, opportunity alerts, and resource recommendations"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with dreamers worldwide. Dreams know no borders, and neither should your network.",
      color: "from-slate-800 to-blue-600",
      bgColor: "bg-slate-800/20",
      details: "International networking, cultural exchange, and global collaboration"
    }
  ]

  return (
    <motion.section 
      id="features" 
      ref={ref}
      className="py-32 px-4 sm:px-6 lg:px-8 relative"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-800/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-5 w-5 text-blue-400" />
            </motion.div>
            <span className="text-white text-sm font-medium">Powerful Features</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-display font-bold gradient-text mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The Dreamer Experience
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Every feature designed to amplify human potential and transform dreams into reality
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className={`group glass rounded-3xl p-8 border border-blue-500/30 cursor-pointer ${
                  hoveredFeature === index ? 'shadow-glow-lg' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <motion.div 
                  className={`bg-gradient-to-r ${feature.color} rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-glow`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <Icon className="h-10 w-10 text-white" />
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4"
                  whileHover={{ color: "#60a5fa" }}
                >
                  {feature.title}
                </motion.h3>
                
                <p className="text-slate-200 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {hoveredFeature === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`${feature.bgColor} rounded-xl p-4 mb-4`}
                      initial={{ y: 10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-slate-100 text-sm">{feature.details}</p>
                    </motion.div>
                    <motion.button 
                      className="flex items-center text-slate-200 hover:text-white transition-colors text-sm font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Learn more
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Testimonial section */}
        <div className="glass rounded-3xl p-12 mb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Sparkles key={i} className="h-6 w-6 text-blue-400 mx-1" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-light text-white mb-8 italic">
              "The Dreamer helped me realize that my 'crazy' idea to bring clean water to my village wasn't crazy at all. 
              Today, 10,000 people have access to clean water because I dared to dream."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Maria Rodriguez</div>
                <div className="text-slate-300">Social Entrepreneur</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="glass rounded-3xl p-12 border border-blue-500/30 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700/20 via-blue-700/20 to-slate-800/20"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
                Ready to Transform Your Dreams?
              </h3>
              <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
                Join thousands of dreamers who refuse to settle for ordinary. Your extraordinary journey starts here.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group btn-primary text-white px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-glow-lg flex items-center">
                  Begin Your Journey
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-secondary text-white px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Features