import React, { useState } from 'react';
import { Camera, Plus, Shield, Globe, Clock, ChevronRight, Zap, Star, ArrowUpRight } from 'lucide-react';

function App() {
  const [eventCode, setEventCode] = useState('');

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{fontFamily: "'DM Sans', sans-serif"}}>

      {/* Announcement Bar */}
      <div className="bg-[#991b1b] text-white text-xs font-medium text-center py-2 px-4 tracking-wide">
        🎉 New: AI-powered photo curation is now live —{' '}
        <a href="#" className="underline underline-offset-2 hover:text-red-200 transition-colors">Learn more</a>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-zinc-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#991b1b] rounded-lg flex items-center justify-center shadow-sm shadow-red-200">
                <Camera className="text-white" size={16} />
              </div>
              <span className="text-lg font-bold text-black tracking-tight">Gather</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-zinc-400 hover:text-black transition-colors">Features</a>
              <a href="#" className="text-sm font-medium text-zinc-400 hover:text-black transition-colors">Pricing</a>
              <a href="#" className="text-sm font-medium text-zinc-400 hover:text-black transition-colors">Docs</a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="text-sm font-medium text-zinc-500 hover:text-black transition-colors px-3 py-1.5">
                Sign in
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-all shadow-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">

        {/* Hero */}
        <section className="relative overflow-hidden bg-zinc-50 pt-24 pb-32">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-red-100 rounded-full opacity-60 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-zinc-200 rounded-full opacity-50 blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-[#991b1b] text-xs font-semibold px-3 py-1.5 rounded-full mb-8 tracking-wide uppercase">
              <Zap size={12} />
              Real-time media collection
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold text-black mb-6 leading-[1.1] tracking-tight" style={{fontFamily: "'Cormorant Garamond', serif"}}>
              One place for all your{' '}
              <span className="bg-gradient-to-r from-[#991b1b] to-red-400 bg-clip-text text-transparent">
                event memories.
              </span>
            </h1>

            <p className="text-lg text-zinc-500 mb-12 leading-relaxed max-w-2xl mx-auto font-normal">
              Gather lets attendees upload photos and videos in real-time via a unique link or QR code — organized, moderated, and ready to share.
            </p>

            {/* Input + CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Enter event code..."
                  className="w-full pl-4 pr-4 py-3.5 bg-white border border-zinc-200 rounded-xl shadow-sm focus:ring-2 focus:ring-[#991b1b] focus:border-[#991b1b] outline-none transition-all text-sm text-black placeholder-zinc-400"
                  value={eventCode}
                  onChange={(e) => setEventCode(e.target.value)}
                />
              </div>
              <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-zinc-800 transition-all shadow-sm whitespace-nowrap">
                <Plus size={16} />
                Create Event
              </button>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-2">
                  {['bg-red-300', 'bg-red-400', 'bg-red-600', 'bg-zinc-400'].map((c, i) => (
                    <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-zinc-50`} />
                  ))}
                </div>
                <span className="ml-1 font-medium text-zinc-600">500+ event planners</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-[#991b1b] fill-[#991b1b]" />
                ))}
                <span className="ml-1 font-medium text-zinc-600">4.9 / 5 rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-white border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-[#991b1b] mb-3">Why Gather</p>
              <h2 className="text-3xl font-bold text-black tracking-tight" style={{fontFamily: "'Cormorant Garamond', serif"}}>Everything you need, nothing you don't</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Clock size={20} className="text-[#991b1b]" />}
                color="bg-red-50"
                title="Real-time Collection"
                description="Attendees upload via a unique URL or QR code. Media syncs instantly to your event timeline — no app required."
                accent="text-[#991b1b] hover:text-red-800"
              />
              <FeatureCard
                icon={<Shield size={20} className="text-black" />}
                color="bg-zinc-100"
                title="Full Moderation Control"
                description="Manage permissions, approve uploads, and control visibility for every contributor in your event."
                accent="text-black hover:text-zinc-700"
              />
              <FeatureCard
                icon={<Globe size={20} className="text-[#991b1b]" />}
                color="bg-red-50"
                title="Seamless Distribution"
                description="Share memories with stakeholders or participants via private, secure, beautifully presented links."
                accent="text-[#991b1b] hover:text-red-800"
              />
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="py-16 bg-zinc-50 border-b border-zinc-100">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Event planners' },
              { value: '2M+', label: 'Photos collected' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '<2s', label: 'Upload latency' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-extrabold text-black tracking-tight">{value}</p>
                <p className="text-sm text-zinc-400 mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-black py-20">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 right-0 w-96 h-96 bg-[#991b1b] rounded-full opacity-20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-900 rounded-full opacity-10 blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight" style={{fontFamily: "'Cormorant Garamond', serif"}}>Ready to collect your first memory?</h2>
            <p className="text-zinc-400 mb-8 text-base">Set up your event in under 60 seconds. No credit card required.</p>
            <button className="inline-flex items-center gap-2 bg-[#991b1b] text-white px-8 py-3.5 rounded-xl text-sm font-bold shadow-lg hover:bg-[#7f1d1d] transition-colors">
              Create a free account
              <ArrowUpRight size={16} />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-[#991b1b] rounded-md flex items-center justify-center">
                <Camera className="text-white" size={14} />
              </div>
              <span className="font-bold text-black text-sm">Gather</span>
            </div>
            <div className="flex gap-8 text-sm text-zinc-400">
              <a href="#" className="hover:text-black transition-colors">Privacy</a>
              <a href="#" className="hover:text-black transition-colors">Terms</a>
              <a href="#" className="hover:text-black transition-colors">API Docs</a>
              <a href="#" className="hover:text-black transition-colors">Status</a>
            </div>
            <p className="text-sm text-zinc-400">© 2026 Gather Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, color, title, description, accent }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-sm hover:shadow-md transition-all group">
      <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center mb-5`}>
        {icon}
      </div>
      <h3 className="text-base font-bold text-black mb-2" style={{fontFamily: "'Cormorant Garamond', serif"}}>{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
      <button className={`mt-5 flex items-center gap-1 text-xs font-semibold ${accent} transition-colors group-hover:gap-2`}>
        Learn more <ChevronRight size={13} />
      </button>
    </div>
  );
}

export default App;
