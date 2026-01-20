import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User, Crown, Zap, Shield, Star, Sword, Heart, 
  Brain, Eye, Flame, Snowflake, Leaf, Diamond,
  Trophy, Target, Rocket, Sparkles, Plus, Lock
} from 'lucide-react'

interface AvatarStats {
  level: number
  experience: number
  maxExperience: number
  health: number
  maxHealth: number
  energy: number
  maxEnergy: number
  wisdom: number
  creativity: number
  persistence: number
  charisma: number
  luck: number
}

interface AvatarAbility {
  id: string
  name: string
  description: string
  icon: any
  unlockLevel: number
  isUnlocked: boolean
  cooldown: number
  lastUsed: number
  effect: string
}

interface AvatarAppearance {
  bodyType: 'ethereal' | 'crystalline' | 'cosmic' | 'elemental'
  aura: string
  wings: boolean
  crown: boolean
  armor: string
  weapon: string
  accessories: string[]
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: any
  xpReward: number
  statBonus: { [key: string]: number }
  unlocked: boolean
  dateUnlocked?: Date
}

const DreamAvatar = () => {
  const [avatar, setAvatar] = useState<AvatarStats>({
    level: 1,
    experience: 0,
    maxExperience: 100,
    health: 100,
    maxHealth: 100,
    energy: 80,
    maxEnergy: 100,
    wisdom: 10,
    creativity: 15,
    persistence: 12,
    charisma: 8,
    luck: 5
  })

  const [appearance, setAppearance] = useState<AvatarAppearance>({
    bodyType: 'ethereal',
    aura: '#3b82f6',
    wings: false,
    crown: false,
    armor: 'none',
    weapon: 'none',
    accessories: []
  })

  const [abilities, setAbilities] = useState<AvatarAbility[]>([
    {
      id: 'dream-boost',
      name: 'Dream Amplification',
      description: 'Boost dream manifestation speed by 200% for 1 hour',
      icon: Zap,
      unlockLevel: 1,
      isUnlocked: true,
      cooldown: 3600000, // 1 hour
      lastUsed: 0,
      effect: 'Amplifies dream energy'
    },
    {
      id: 'vision-clarity',
      name: 'Vision Clarity',
      description: 'See hidden opportunities and connections in your dreams',
      icon: Eye,
      unlockLevel: 3,
      isUnlocked: false,
      cooldown: 7200000, // 2 hours
      lastUsed: 0,
      effect: 'Reveals hidden paths'
    },
    {
      id: 'time-dilation',
      name: 'Time Dilation',
      description: 'Experience 24 hours of dream progress in 1 hour',
      icon: Rocket,
      unlockLevel: 5,
      isUnlocked: false,
      cooldown: 86400000, // 24 hours
      lastUsed: 0,
      effect: 'Accelerates time'
    },
    {
      id: 'quantum-leap',
      name: 'Quantum Leap',
      description: 'Instantly overcome any obstacle in your dream path',
      icon: Diamond,
      unlockLevel: 10,
      isUnlocked: false,
      cooldown: 604800000, // 1 week
      lastUsed: 0,
      effect: 'Breaks limitations'
    }
  ])

  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: 'first-dream',
      title: 'Dream Awakening',
      description: 'Created your first dream in the DNA lab',
      icon: Sparkles,
      xpReward: 50,
      statBonus: { creativity: 2 },
      unlocked: false
    },
    {
      id: 'quantum-connect',
      title: 'Quantum Pioneer',
      description: 'Connected with another dreamer through entanglement',
      icon: Star,
      xpReward: 100,
      statBonus: { charisma: 3, wisdom: 1 },
      unlocked: false
    },
    {
      id: 'level-5',
      title: 'Dream Adept',
      description: 'Reached level 5 in your dream journey',
      icon: Crown,
      xpReward: 200,
      statBonus: { persistence: 5 },
      unlocked: false
    },
    {
      id: 'master-dreamer',
      title: 'Master Dreamer',
      description: 'Achieved mastery in all dream disciplines',
      icon: Trophy,
      xpReward: 500,
      statBonus: { wisdom: 10, creativity: 10, persistence: 10 },
      unlocked: false
    }
  ])

  const [selectedTab, setSelectedTab] = useState<'stats' | 'abilities' | 'appearance' | 'achievements'>('stats')
  const [isLevelingUp, setIsLevelingUp] = useState(false)
  const [showAbilityEffect, setShowAbilityEffect] = useState<string | null>(null)

  // Level up system
  useEffect(() => {
    if (avatar.experience >= avatar.maxExperience) {
      levelUp()
    }
  }, [avatar.experience])

  const levelUp = () => {
    setIsLevelingUp(true)
    
    setTimeout(() => {
      setAvatar(prev => ({
        ...prev,
        level: prev.level + 1,
        experience: prev.experience - prev.maxExperience,
        maxExperience: Math.floor(prev.maxExperience * 1.5),
        maxHealth: prev.maxHealth + 20,
        health: prev.maxHealth + 20,
        maxEnergy: prev.maxEnergy + 10,
        energy: prev.maxEnergy + 10,
        wisdom: prev.wisdom + Math.floor(Math.random() * 3) + 1,
        creativity: prev.creativity + Math.floor(Math.random() * 3) + 1,
        persistence: prev.persistence + Math.floor(Math.random() * 3) + 1,
        charisma: prev.charisma + Math.floor(Math.random() * 2) + 1,
        luck: prev.luck + Math.floor(Math.random() * 2) + 1
      }))

      // Unlock new abilities
      setAbilities(prev => prev.map(ability => ({
        ...ability,
        isUnlocked: avatar.level + 1 >= ability.unlockLevel
      })))

      // Update appearance based on level
      if ((avatar.level + 1) % 5 === 0) {
        evolveAppearance()
      }

      setIsLevelingUp(false)
    }, 2000)
  }

  const evolveAppearance = () => {
    const level = avatar.level + 1
    
    setAppearance(prev => {
      const newAppearance = { ...prev }
      
      if (level >= 5) newAppearance.wings = true
      if (level >= 10) newAppearance.crown = true
      if (level >= 15) newAppearance.armor = 'celestial'
      if (level >= 20) newAppearance.weapon = 'dream-blade'
      
      // Change body type based on level
      if (level >= 25) newAppearance.bodyType = 'cosmic'
      else if (level >= 15) newAppearance.bodyType = 'crystalline'
      else if (level >= 10) newAppearance.bodyType = 'elemental'
      
      return newAppearance
    })
  }

  const gainExperience = (amount: number) => {
    setAvatar(prev => ({
      ...prev,
      experience: prev.experience + amount
    }))
  }

  const useAbility = (abilityId: string) => {
    const ability = abilities.find(a => a.id === abilityId)
    if (!ability || !ability.isUnlocked) return

    const now = Date.now()
    if (now - ability.lastUsed < ability.cooldown) return

    setAbilities(prev => prev.map(a => 
      a.id === abilityId ? { ...a, lastUsed: now } : a
    ))

    setShowAbilityEffect(abilityId)
    setTimeout(() => setShowAbilityEffect(null), 3000)

    // Consume energy
    setAvatar(prev => ({
      ...prev,
      energy: Math.max(0, prev.energy - 20)
    }))
  }

  const unlockAchievement = (achievementId: string) => {
    const achievement = achievements.find(a => a.id === achievementId)
    if (!achievement || achievement.unlocked) return

    setAchievements(prev => prev.map(a => 
      a.id === achievementId 
        ? { ...a, unlocked: true, dateUnlocked: new Date() }
        : a
    ))

    gainExperience(achievement.xpReward)

    // Apply stat bonuses
    setAvatar(prev => {
      const newStats = { ...prev }
      Object.entries(achievement.statBonus).forEach(([stat, bonus]) => {
        if (stat in newStats) {
          (newStats as any)[stat] += bonus
        }
      })
      return newStats
    })
  }

  const getAvatarVisual = () => {
    const { bodyType, aura, wings, crown, armor } = appearance
    
    return (
      <div className="relative w-64 h-64 mx-auto">
        {/* Aura */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-30"
          style={{ 
            background: `radial-gradient(circle, ${aura}40 0%, transparent 70%)`,
            filter: 'blur(20px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Body */}
        <motion.div
          className="absolute inset-8 rounded-full flex items-center justify-center"
          style={{
            background: bodyType === 'cosmic' 
              ? 'linear-gradient(45deg, #1e1b4b, #312e81, #1e1b4b)'
              : bodyType === 'crystalline'
              ? 'linear-gradient(45deg, #0f766e, #06b6d4, #0f766e)'
              : bodyType === 'elemental'
              ? 'linear-gradient(45deg, #dc2626, #f59e0b, #dc2626)'
              : 'linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6)'
          }}
          animate={{
            boxShadow: [
              `0 0 20px ${aura}40`,
              `0 0 40px ${aura}80`,
              `0 0 20px ${aura}40`
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <User className="h-24 w-24 text-white" />
        </motion.div>

        {/* Wings */}
        {wings && (
          <>
            <motion.div
              className="absolute left-0 top-1/2 w-16 h-32 -translate-y-1/2"
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ 
                rotate: [-30, -20, -30],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-full h-full bg-gradient-to-r from-blue-400/50 to-purple-400/50 rounded-l-full" />
            </motion.div>
            <motion.div
              className="absolute right-0 top-1/2 w-16 h-32 -translate-y-1/2"
              initial={{ rotate: 30, opacity: 0 }}
              animate={{ 
                rotate: [30, 20, 30],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-full h-full bg-gradient-to-l from-blue-400/50 to-purple-400/50 rounded-r-full" />
            </motion.div>
          </>
        )}

        {/* Crown */}
        {crown && (
          <motion.div
            className="absolute top-4 left-1/2 -translate-x-1/2"
            animate={{ 
              y: [0, -5, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Crown className="h-12 w-12 text-yellow-400" />
          </motion.div>
        )}

        {/* Level Badge */}
        <motion.div
          className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {avatar.level}
        </motion.div>
      </div>
    )
  }

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
              <User className="h-5 w-5 text-purple-400" />
            </motion.div>
            <span className="text-white text-sm font-medium">Avatar Evolution System</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-8">
            Dream Avatar Evolution
          </h2>
          <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
            Your virtual self grows stronger with every dream achieved. Unlock new abilities, 
            evolve your appearance, and become the ultimate version of yourself.
          </p>
        </motion.div>

        {/* Main Avatar Display */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-3xl p-8 border border-purple-500/30 relative overflow-hidden">
            {/* Level Up Effect */}
            <AnimatePresence>
              {isLevelingUp && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-yellow-400/20 flex items-center justify-center z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <motion.div
                      className="text-6xl font-bold text-yellow-400 mb-4"
                      animate={{ 
                        textShadow: [
                          "0 0 10px #fbbf24",
                          "0 0 30px #fbbf24",
                          "0 0 10px #fbbf24"
                        ]
                      }}
                      transition={{ duration: 0.5, repeat: 3 }}
                    >
                      LEVEL UP!
                    </motion.div>
                    <div className="text-2xl text-white">Level {avatar.level + 1}</div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Avatar Visual */}
              <div className="text-center">
                {getAvatarVisual()}
                
                {/* Quick Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="glass rounded-xl p-4">
                    <div className="text-2xl font-bold text-white mb-1">Level {avatar.level}</div>
                    <div className="text-sm text-slate-300">Dream Warrior</div>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400 mb-1">{avatar.experience}</div>
                    <div className="text-sm text-slate-300">/ {avatar.maxExperience} XP</div>
                  </div>
                </div>

                {/* XP Bar */}
                <div className="mt-4">
                  <div className="bg-slate-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${(avatar.experience / avatar.maxExperience) * 100}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div>
                <div className="flex space-x-2 mb-6">
                  {[
                    { id: 'stats', label: 'Stats', icon: Target },
                    { id: 'abilities', label: 'Abilities', icon: Zap },
                    { id: 'appearance', label: 'Style', icon: Sparkles },
                    { id: 'achievements', label: 'Achievements', icon: Trophy }
                  ].map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id as any)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                        selectedTab === tab.id
                          ? 'bg-purple-500 text-white'
                          : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <tab.icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{tab.label}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="h-80 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    {selectedTab === 'stats' && (
                      <motion.div
                        key="stats"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        {[
                          { name: 'Wisdom', value: avatar.wisdom, max: 100, color: '#3b82f6', icon: Brain },
                          { name: 'Creativity', value: avatar.creativity, max: 100, color: '#8b5cf6', icon: Sparkles },
                          { name: 'Persistence', value: avatar.persistence, max: 100, color: '#10b981', icon: Shield },
                          { name: 'Charisma', value: avatar.charisma, max: 100, color: '#f59e0b', icon: Heart },
                          { name: 'Luck', value: avatar.luck, max: 100, color: '#ef4444', icon: Star }
                        ].map((stat) => (
                          <div key={stat.name} className="flex items-center space-x-3">
                            <stat.icon className="h-5 w-5" style={{ color: stat.color }} />
                            <div className="flex-1">
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-white">{stat.name}</span>
                                <span className="text-slate-300">{stat.value}/{stat.max}</span>
                              </div>
                              <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
                                <motion.div
                                  className="h-full"
                                  style={{ backgroundColor: stat.color }}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${(stat.value / stat.max) * 100}%` }}
                                  transition={{ duration: 1, delay: 0.1 }}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {selectedTab === 'abilities' && (
                      <motion.div
                        key="abilities"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        {abilities.map((ability) => (
                          <motion.div
                            key={ability.id}
                            className={`p-4 rounded-xl border ${
                              ability.isUnlocked
                                ? 'bg-slate-800/50 border-purple-500/30'
                                : 'bg-slate-900/50 border-slate-600/30 opacity-50'
                            }`}
                            whileHover={ability.isUnlocked ? { scale: 1.02 } : {}}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center space-x-3">
                                <ability.icon className={`h-6 w-6 ${ability.isUnlocked ? 'text-purple-400' : 'text-slate-500'}`} />
                                <div>
                                  <h4 className={`font-semibold ${ability.isUnlocked ? 'text-white' : 'text-slate-500'}`}>
                                    {ability.name}
                                  </h4>
                                  <p className={`text-sm ${ability.isUnlocked ? 'text-slate-300' : 'text-slate-600'}`}>
                                    {ability.description}
                                  </p>
                                </div>
                              </div>
                              {ability.isUnlocked ? (
                                <motion.button
                                  onClick={() => useAbility(ability.id)}
                                  className="px-3 py-1 bg-purple-500 text-white rounded-lg text-sm font-medium"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  disabled={Date.now() - ability.lastUsed < ability.cooldown}
                                >
                                  Use
                                </motion.button>
                              ) : (
                                <div className="flex items-center space-x-1 text-slate-500 text-sm">
                                  <Lock className="h-4 w-4" />
                                  <span>Lv.{ability.unlockLevel}</span>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}

                    {selectedTab === 'achievements' && (
                      <motion.div
                        key="achievements"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        {achievements.map((achievement) => (
                          <motion.div
                            key={achievement.id}
                            className={`p-4 rounded-xl border ${
                              achievement.unlocked
                                ? 'bg-yellow-500/10 border-yellow-500/30'
                                : 'bg-slate-800/50 border-slate-600/30'
                            }`}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-start space-x-3">
                              <achievement.icon className={`h-6 w-6 ${achievement.unlocked ? 'text-yellow-400' : 'text-slate-500'}`} />
                              <div className="flex-1">
                                <h4 className={`font-semibold ${achievement.unlocked ? 'text-yellow-400' : 'text-slate-300'}`}>
                                  {achievement.title}
                                </h4>
                                <p className={`text-sm ${achievement.unlocked ? 'text-slate-200' : 'text-slate-500'}`}>
                                  {achievement.description}
                                </p>
                                <div className="flex items-center space-x-4 mt-2 text-xs">
                                  <span className={achievement.unlocked ? 'text-green-400' : 'text-slate-500'}>
                                    +{achievement.xpReward} XP
                                  </span>
                                  {achievement.unlocked && achievement.dateUnlocked && (
                                    <span className="text-slate-400">
                                      {achievement.dateUnlocked.toLocaleDateString()}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={() => gainExperience(25)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="h-5 w-5" />
              <span>Complete Daily Quest (+25 XP)</span>
            </motion.button>
            
            <motion.button
              onClick={() => unlockAchievement('first-dream')}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Trophy className="h-5 w-5" />
              <span>Unlock Achievement</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Ability Effect Display */}
        <AnimatePresence>
          {showAbilityEffect && (
            <motion.div
              className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="text-4xl font-bold text-purple-400 text-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                style={{
                  textShadow: '0 0 20px #a855f7, 0 0 40px #a855f7'
                }}
              >
                {abilities.find(a => a.id === showAbilityEffect)?.effect}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default DreamAvatar