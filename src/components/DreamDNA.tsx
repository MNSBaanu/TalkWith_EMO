import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dna, Zap, Star, Target, Heart, Brain, Sparkles } from 'lucide-react'

interface DNAStrand {
  id: string
  dreamText: string
  progress: number
  color: string
  mutations: string[]
  energy: number
  connections: string[]
}

interface DNABase {
  type: 'A' | 'T' | 'G' | 'C'
  color: string
  glow: boolean
  mutation?: boolean
}

const DreamDNA = () => {
  const [dreamInput, setDreamInput] = useState('')
  const [dnaStrands, setDnaStrands] = useState<DNAStrand[]>([])
  const [selectedStrand, setSelectedStrand] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Dream to DNA conversion algorithm
  const dreamToDNA = (dream: string): DNABase[] => {
    const bases: DNABase[] = []
    const words = dream.toLowerCase().split(' ')
    
    words.forEach((word, index) => {
      const hash = word.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
      const baseType = ['A', 'T', 'G', 'C'][hash % 4] as 'A' | 'T' | 'G' | 'C'
      
      const colors = {
        'A': '#3b82f6', // Blue - Action
        'T': '#10b981', // Green - Time
        'G': '#f59e0b', // Yellow - Goals
        'C': '#ef4444'  // Red - Challenges
      }
      
      bases.push({
        type: baseType,
        color: colors[baseType],
        glow: hash % 3 === 0,
        mutation: hash % 7 === 0
      })
    })
    
    return bases
  }

  const analyzeDream = async () => {
    if (!dreamInput.trim()) return
    
    setIsAnalyzing(true)
    
    // Simulate AI analysis
    setTimeout(() => {
      const newStrand: DNAStrand = {
        id: Date.now().toString(),
        dreamText: dreamInput,
        progress: Math.random() * 30 + 10,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        mutations: [
          'Enhanced Focus Gene',
          'Persistence Amplifier',
          'Opportunity Detector'
        ],
        energy: Math.random() * 100 + 50,
        connections: []
      }
      
      setDnaStrands(prev => [...prev, newStrand])
      setDreamInput('')
      setIsAnalyzing(false)
    }, 2000)
  }

  // DNA Helix Animation Component
  const DNAHelix = ({ strand, index }: { strand: DNAStrand; index: number }) => {
    const bases = dreamToDNA(strand.dreamText)
    
    return (
      <motion.div
        className="relative w-full h-64 cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.2 }}
        onClick={() => setSelectedStrand(selectedStrand === strand.id ? null : strand.id)}
        whileHover={{ scale: 1.05 }}
      >
        {/* DNA Backbone */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
          {/* Left Strand */}
          <motion.path
            d="M50 20 Q 80 60, 50 100 Q 20 140, 50 180"
            stroke={strand.color}
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: index * 0.3 }}
          />
          
          {/* Right Strand */}
          <motion.path
            d="M250 20 Q 220 60, 250 100 Q 280 140, 250 180"
            stroke={strand.color}
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: index * 0.3 + 0.5 }}
          />
          
          {/* Base Pairs */}
          {bases.slice(0, 8).map((base, baseIndex) => {
            const y = 30 + baseIndex * 20
            const leftX = 50 + Math.sin(baseIndex * 0.5) * 15
            const rightX = 250 - Math.sin(baseIndex * 0.5) * 15
            
            return (
              <g key={baseIndex}>
                {/* Connection Line */}
                <motion.line
                  x1={leftX}
                  y1={y}
                  x2={rightX}
                  y2={y}
                  stroke={base.color}
                  strokeWidth="2"
                  opacity="0.6"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: index * 0.3 + baseIndex * 0.1 }}
                />
                
                {/* Left Base */}
                <motion.circle
                  cx={leftX}
                  cy={y}
                  r="6"
                  fill={base.color}
                  initial={{ scale: 0 }}
                  animate={{ scale: base.glow ? [1, 1.3, 1] : 1 }}
                  transition={{ 
                    scale: base.glow ? { duration: 2, repeat: Infinity } : { delay: index * 0.3 + baseIndex * 0.1 }
                  }}
                />
                
                {/* Right Base */}
                <motion.circle
                  cx={rightX}
                  cy={y}
                  r="6"
                  fill={base.color}
                  initial={{ scale: 0 }}
                  animate={{ scale: base.mutation ? [1, 1.5, 1] : 1 }}
                  transition={{ 
                    scale: base.mutation ? { duration: 1.5, repeat: Infinity } : { delay: index * 0.3 + baseIndex * 0.1 }
                  }}
                />
                
                {/* Base Labels */}
                <text x={leftX} y={y + 2} textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                  {base.type}
                </text>
                <text x={rightX} y={y + 2} textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                  {base.type === 'A' ? 'T' : base.type === 'T' ? 'A' : base.type === 'G' ? 'C' : 'G'}
                </text>
              </g>
            )
          })}
        </svg>
        
        {/* Energy Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 5 }).map((_, particleIndex) => (
            <motion.div
              key={particleIndex}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{
                left: '50%',
                top: '10%'
              }}
              animate={{
                x: [0, Math.sin(particleIndex) * 100, 0],
                y: [0, 150, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: particleIndex * 0.6
              }}
            />
          ))}
        </div>
        
        {/* Progress Indicator */}
        <div className="absolute bottom-2 left-2 right-2">
          <div className="bg-slate-800/50 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: `${strand.progress}%` }}
              transition={{ duration: 2, delay: index * 0.3 }}
            />
          </div>
          <p className="text-xs text-slate-300 mt-1 text-center">
            Evolution: {strand.progress.toFixed(1)}%
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Dna className="h-5 w-5 text-blue-400" />
            </motion.div>
            <span className="text-white text-sm font-medium">Revolutionary Technology</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-8">
            Dream DNA Visualizer
          </h2>
          <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
            Transform your dreams into living, evolving DNA structures. Watch as your aspirations 
            mutate, grow, and develop new capabilities on their journey to reality.
          </p>
        </motion.div>

        {/* Dream Input */}
        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Brain className="h-6 w-6 mr-3 text-blue-400" />
              Encode Your Dream
            </h3>
            
            <div className="space-y-4">
              <textarea
                value={dreamInput}
                onChange={(e) => setDreamInput(e.target.value)}
                placeholder="Describe your dream in detail... (e.g., 'I want to become a successful entrepreneur, build a tech company that helps people, travel the world while working remotely')"
                className="w-full h-32 px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
              />
              
              <motion.button
                onClick={analyzeDream}
                disabled={!dreamInput.trim() || isAnalyzing}
                className="w-full btn-primary text-white py-4 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isAnalyzing ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Dna className="h-5 w-5" />
                    </motion.div>
                    <span>Analyzing Dream DNA...</span>
                  </>
                ) : (
                  <>
                    <Zap className="h-5 w-5" />
                    <span>Generate Dream DNA</span>
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* DNA Strands Display */}
        {dnaStrands.length > 0 && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Your Dream DNA Laboratory
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dnaStrands.map((strand, index) => (
                <motion.div
                  key={strand.id}
                  className="glass rounded-2xl p-6 border border-blue-500/30 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2 truncate">
                      {strand.dreamText.slice(0, 50)}...
                    </h4>
                    <div className="flex items-center space-x-4 text-sm text-slate-300">
                      <span className="flex items-center">
                        <Target className="h-4 w-4 mr-1" />
                        {strand.progress.toFixed(1)}%
                      </span>
                      <span className="flex items-center">
                        <Zap className="h-4 w-4 mr-1" />
                        {strand.energy.toFixed(0)} Energy
                      </span>
                    </div>
                  </div>
                  
                  <DNAHelix strand={strand} index={index} />
                  
                  {/* Mutations */}
                  <AnimatePresence>
                    {selectedStrand === strand.id && (
                      <motion.div
                        className="mt-4 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <h5 className="text-sm font-semibold text-blue-400 flex items-center">
                          <Sparkles className="h-4 w-4 mr-1" />
                          Active Mutations:
                        </h5>
                        {strand.mutations.map((mutation, idx) => (
                          <motion.div
                            key={idx}
                            className="text-xs bg-blue-500/20 rounded-lg px-3 py-1 text-blue-200"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            {mutation}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: Dna,
              title: "DNA Evolution",
              desc: "Watch your dreams evolve and mutate as you progress"
            },
            {
              icon: Zap,
              title: "Energy Tracking",
              desc: "Monitor the energy flow between your dream components"
            },
            {
              icon: Star,
              title: "Mutation Analysis",
              desc: "Discover new capabilities as your dreams adapt"
            },
            {
              icon: Heart,
              title: "Dream Connections",
              desc: "See how your dreams influence and connect with others"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl p-6 text-center border border-blue-500/30"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </motion.div>
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-slate-300 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default DreamDNA