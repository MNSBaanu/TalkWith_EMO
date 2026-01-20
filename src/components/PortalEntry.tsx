import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Star } from 'lucide-react'

interface PortalEntryProps {
  onComplete: () => void
}

const PortalEntry = ({ onComplete }: PortalEntryProps) => {
  const [stage, setStage] = useState<'portal' | 'falling' | 'landing' | 'complete'>('portal')
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }))
    setParticles(newParticles)

    // Stage progression
    const timer1 = setTimeout(() => setStage('falling'), 2000)
    const timer2 = setTimeout(() => setStage('landing'), 4000)
    const timer3 = setTimeout(() => setStage('complete'), 5500)
    const timer4 = setTimeout(() => onComplete(), 6000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {stage !== 'complete' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(circle at center, #0f172a 0%, #000000 70%)'
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Swirling Portal Background */}
          <div className="absolute inset-0">
            {/* Main Vortex */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(circle at center, 
                    transparent 20%, 
                    rgba(59, 130, 246, 0.1) 40%, 
                    rgba(30, 58, 138, 0.2) 60%, 
                    rgba(15, 23, 42, 0.8) 80%, 
                    #000000 100%
                  )
                `
              }}
              animate={{
                rotate: stage === 'portal' ? [0, 360] : stage === 'falling' ? [0, 720] : [720, 1080],
                scale: stage === 'falling' ? [1, 1.5] : stage === 'landing' ? [1.5, 0.5] : [1, 1]
              }}
              transition={{
                rotate: { duration: stage === 'portal' ? 8 : stage === 'falling' ? 4 : 2, repeat: Infinity, ease: "linear" },
                scale: { duration: stage === 'falling' ? 2 : 1.5, ease: "easeInOut" }
              }}
            />

            {/* Secondary Vortex Rings */}
            {[1, 2, 3, 4].map((ring) => (
              <motion.div
                key={ring}
                className="absolute inset-0 border-2 border-blue-500/20 rounded-full"
                style={{
                  width: `${ring * 25}%`,
                  height: `${ring * 25}%`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{
                  rotate: [0, 360],
                  scale: stage === 'falling' ? [1, 2] : stage === 'landing' ? [2, 0] : [1, 1],
                  opacity: stage === 'landing' ? [0.3, 0] : [0.3, 0.1, 0.3]
                }}
                transition={{
                  rotate: { duration: 6 + ring, repeat: Infinity, ease: "linear" },
                  scale: { duration: stage === 'falling' ? 2 : 1.5, ease: "easeInOut" },
                  opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            ))}

            {/* Spiral Arms */}
            {[0, 1, 2].map((arm) => (
              <motion.div
                key={arm}
                className="absolute inset-0"
                animate={{ rotate: [arm * 120, arm * 120 + 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div
                  className="absolute w-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                  style={{
                    height: '50%',
                    left: '50%',
                    top: '25%',
                    transformOrigin: 'bottom center',
                    opacity: 0.6
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`
                }}
                animate={{
                  x: stage === 'falling' ? [0, (50 - particle.x) * 2] : [0, Math.sin(particle.id) * 20],
                  y: stage === 'falling' ? [0, (50 - particle.y) * 2] : [0, Math.cos(particle.id) * 20],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Central Portal Content */}
          <div className="relative z-10 text-center">
            <AnimatePresence mode="wait">
              {stage === 'portal' && (
                <motion.div
                  key="portal"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.5 }}
                  transition={{ duration: 1 }}
                  className="flex flex-col items-center"
                >
                  {/* Portal Ring */}
                  <motion.div
                    className="relative w-48 h-48 mb-8"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute inset-0 border-4 border-blue-500/50 rounded-full" />
                    <div className="absolute inset-2 border-2 border-slate-400/30 rounded-full" />
                    <div className="absolute inset-4 border border-blue-300/20 rounded-full" />
                    
                    {/* Center Sparkle */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="h-12 w-12 text-blue-400" />
                    </motion.div>

                    {/* Orbiting Stars */}
                    {[0, 1, 2, 3].map((star) => (
                      <motion.div
                        key={star}
                        className="absolute w-4 h-4 flex items-center justify-center"
                        style={{
                          left: '50%',
                          top: '10%',
                          transformOrigin: '0 84px'
                        }}
                        animate={{ rotate: [star * 90, star * 90 + 360] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      >
                        <Star className="h-3 w-3 text-slate-300" />
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.h1
                    className="text-4xl font-display font-bold gradient-text mb-4"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Welcome to The Dreamer
                  </motion.h1>
                  
                  <motion.p
                    className="text-slate-300 text-lg"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Preparing your journey into the dream realm...
                  </motion.p>
                </motion.div>
              )}

              {stage === 'falling' && (
                <motion.div
                  key="falling"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <motion.div
                    className="text-6xl font-display font-bold gradient-text mb-4"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotateX: [0, 360],
                    }}
                    transition={{ 
                      scale: { duration: 1, repeat: Infinity },
                      rotateX: { duration: 2, ease: "easeInOut" }
                    }}
                  >
                    Entering...
                  </motion.div>
                  
                  <motion.div
                    className="flex justify-center space-x-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    {[0, 1, 2].map((dot) => (
                      <motion.div
                        key={dot}
                        className="w-3 h-3 bg-blue-400 rounded-full"
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: dot * 0.2
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              )}

              {stage === 'landing' && (
                <motion.div
                  key="landing"
                  initial={{ opacity: 0, scale: 2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 1 }}
                  className="text-center"
                >
                  <motion.div
                    className="text-5xl font-display font-bold text-white mb-4"
                    animate={{ 
                      textShadow: [
                        "0 0 10px rgba(59, 130, 246, 0.5)",
                        "0 0 20px rgba(59, 130, 246, 0.8)",
                        "0 0 10px rgba(59, 130, 246, 0.5)"
                      ]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    Dream Realm Activated
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Distortion Effect Overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(circle at center, 
                  transparent 30%, 
                  rgba(59, 130, 246, 0.05) 50%, 
                  rgba(0, 0, 0, 0.3) 100%
                )
              `,
              mixBlendMode: 'overlay'
            }}
            animate={{
              scale: stage === 'falling' ? [1, 1.5] : [1, 1.1, 1],
              opacity: stage === 'landing' ? [1, 0] : [0.5, 0.8, 0.5]
            }}
            transition={{
              scale: { duration: stage === 'falling' ? 2 : 3, ease: "easeInOut" },
              opacity: { duration: 2, repeat: stage === 'landing' ? 0 : Infinity }
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PortalEntry