import React, { useState } from 'react';
import { Camera, Plus, Users, ArrowRight, Zap, Shield, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [eventCode, setEventCode] = useState('');

  return (
    <div className="min-h-screen text-white selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Camera size={24} className="text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight">Gather</span>
        </div>
        <div className="flex gap-4">
          <button className="text-sm font-medium hover:text-primary transition-colors">How it works</button>
          <button className="btn-primary py-2 text-sm">Sign In</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              New: Real-time event slideshows ✨
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              One shared album for <br />
              <span className="premium-gradient-text">every memory.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Gather captures the magic of your events by bringing everyone's photos and videos into one organized, collaborative timeline.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <div className="glass-card p-2 flex items-center gap-2 min-w-[320px]">
              <input 
                type="text" 
                placeholder="Enter Event Code (e.g. GRAD2026)" 
                className="bg-transparent border-none focus:ring-0 flex-1 px-4 text-sm font-medium"
                value={eventCode}
                onChange={(e) => setEventCode(e.target.value)}
              />
              <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
            <span className="text-gray-500 font-medium">or</span>
            <button className="btn-primary">
              <Plus size={20} />
              Create Event
            </button>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <FeatureCard 
            icon={<Zap className="text-primary" />}
            title="Real-time Sync"
            description="Photos appear in the gallery as soon as they are taken. No waiting, no data cables."
          />
          <FeatureCard 
            icon={<Users className="text-secondary" />}
            title="Unlimited Guests"
            description="Invite as many people as you want. Everyone contributes to the shared experience."
          />
          <FeatureCard 
            icon={<Shield className="text-accent" />}
            title="Full Privacy Control"
            description="Hosts control who can see, upload, or download memories. Your data is safe."
          />
        </div>

        {/* Visual Teaser */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full -z-10 h-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="glass-card p-4 overflow-hidden shadow-2xl">
             <div className="aspect-video bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 text-gray-500 italic">
                {/* We'll add a generated image here later */}
                [ Interactive Memory Timeline Preview ]
             </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 text-center text-gray-500 text-sm">
        <p>© 2026 Gather App. All memories preserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="glass-card p-8 hover:border-white/20 transition-colors group">
      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed font-light">{description}</p>
    </div>
  );
}

export default App;
