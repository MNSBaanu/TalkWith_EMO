import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Plus, Play, Info, Shield, Zap } from 'lucide-react';

const App = () => {
  const [roomCode, setRoomCode] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg z-10"
      >
        {/* Logo/Title Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="inline-block p-4 bg-white/5 rounded-3xl mb-6 glass-morphism border border-white/10"
          >
            <Shield className="w-16 h-16 text-primary" />
          </motion.div>
          <h1 className="text-6xl font-black mb-4 tracking-tighter">
            WORD <span className="text-gradient">IMPOSTER</span>
          </h1>
          <p className="text-white/60 text-lg font-medium">
            Find the imposter before they blend in.
          </p>
        </div>

        {/* Action Cards */}
        <div className="space-y-6">
          {/* Join Room Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-morphism p-8 space-y-4 border-white/10"
          >
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold">Join a Game</h2>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Room Code"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                maxLength={6}
                className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 text-xl tracking-widest font-mono uppercase"
              />
            </div>
            <button className="btn-primary w-full flex items-center justify-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              JOIN ROOM
            </button>
          </motion.div>

          {/* Create Room Section */}
          <div className="grid grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center justify-center gap-2 py-6"
            >
              <Plus className="w-5 h-5" />
              CREATE ROOM
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center justify-center gap-2 py-6"
            >
              <Info className="w-5 h-5" />
              HOW TO PLAY
            </motion.button>
          </div>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/5">
          <div className="text-center space-y-2">
            <div className="flex justify-center"><Zap className="w-5 h-5 text-yellow-500" /></div>
            <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Real-time</p>
          </div>
          <div className="text-center space-y-2">
            <div className="flex justify-center"><Users className="w-5 h-5 text-blue-500" /></div>
            <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Multiplayer</p>
          </div>
          <div className="text-center space-y-2">
            <div className="flex justify-center"><Shield className="w-5 h-5 text-red-500" /></div>
            <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Secure</p>
          </div>
        </div>
      </motion.div>

      {/* Footer Decoration */}
      <div className="absolute bottom-6 text-white/20 text-xs font-mono tracking-widest uppercase">
        v1.0.0 — Build with Precision
      </div>
    </div>
  );
};

export default App;
