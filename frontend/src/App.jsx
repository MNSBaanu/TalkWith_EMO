import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Plus, Play, Info, Shield, Zap, Target, HelpCircle } from 'lucide-react';

const App = () => {
  const [roomCode, setRoomCode] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-background-dark">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Floating Sparkles/Particles (Pure CSS) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: 0
            }}
            animate={{
              y: [null, "-100%"],
              opacity: [0.2, 0.5, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl z-10 space-y-8"
      >
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md mb-4"
          >
            <Zap className="w-4 h-4 text-accent fill-accent/20" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">Next Gen Social Game</span>
          </motion.div>

          <div className="relative inline-block">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-7xl md:text-8xl font-black tracking-tighter leading-none"
            >
              WORD <br />
              <span className="text-gradient">IMPOSTER</span>
            </motion.h1>
            <motion.div
              style={{ top: '15%', right: '-15%' }}
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute hidden md:block"
            >
              <Target className="w-12 h-12 text-primary/40" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/40 text-lg md:text-xl font-medium max-w-md mx-auto"
          >
            Unmask the outsider in this high-stakes game of deception and vocabulary.
          </motion.p>
        </div>

        {/* Action Center */}
        <div className="grid gap-6">
          {/* Join Section Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card p-1 pb-6 overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">Join Existing Room</h2>
                </div>
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Global Servers</div>
              </div>

              <div className="space-y-4">
                <div className="relative group/input">
                  <input
                    type="text"
                    placeholder="••••••"
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                    maxLength={6}
                    className="input-premium group-hover/input:border-primary/30"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-white/10 uppercase tracking-tighter">Room ID</div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="btn-premium-primary w-full group/btn"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Play className="w-5 h-5 fill-current" />
                    ENTER BATTLEFIELD
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/btn:opacity-20 transition-opacity duration-500" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-premium group"
            >
              <Plus className="w-5 h-5 text-accent transition-transform group-hover:rotate-90" />
              <span>Host Game</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-premium group"
            >
              <HelpCircle className="w-5 h-5 text-secondary transition-bounce group-hover:scale-110" />
              <span>Guide</span>
            </motion.button>
          </div>
        </div>

        {/* Social Credibility / Stats */}
        <div className="flex items-center justify-center gap-8 py-4 px-8 glass-card bg-white/2 rounded-full border-white/5 mx-auto w-fit">
          <div className="flex flex-col items-center">
            <span className="text-xl font-black text-white">2.4k+</span>
            <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Online</span>
          </div>
          <div className="w-[1px] h-8 bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="text-xl font-black text-white">120k</span>
            <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Games</span>
          </div>
          <div className="w-[1px] h-8 bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="text-xl font-black text-white">4.9</span>
            <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Rating</span>
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-10 pointer-events-none">
        <Shield className="w-32 h-32 text-white animate-float" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 pointer-events-none">
        <Target className="w-40 h-40 text-white animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-4 text-white/10 text-[10px] font-mono tracking-[0.3em] uppercase">
        <div className="h-[1px] w-12 bg-white/5" />
        ENCRYPTED SESSION ID: 0x8F2...A9
        <div className="h-[1px] w-12 bg-white/5" />
      </div>
    </div>
  );
};

export default App;

