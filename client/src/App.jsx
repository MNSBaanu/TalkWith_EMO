import React, { useState } from 'react';
import { Camera, Plus, Users, ArrowRight, Shield, Globe, Clock, ChevronRight } from 'lucide-react';

function App() {
  const [eventCode, setEventCode] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Camera className="text-blue-600" size={24} />
              <span className="text-xl font-bold text-gray-900 tracking-tight">Gather</span>
            </div>
            <nav className="flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Features</a>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Pricing</a>
              <div className="h-4 w-[1px] bg-gray-200"></div>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Sign in</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-white pt-20 pb-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              A single repository for all your <br />
              <span className="text-blue-600">event memories.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Gather is the professional choice for organizations and individuals to collect photos and videos from attendees in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
              <div className="flex-grow relative">
                <input 
                  type="text" 
                  placeholder="Enter Event Code" 
                  className="w-full pl-4 pr-10 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                  value={eventCode}
                  onChange={(e) => setEventCode(e.target.value)}
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
                  <ArrowRight size={18} />
                </button>
              </div>
              <button className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-800 transition-all shadow-sm">
                <Plus size={18} />
                Create New Event
              </button>
            </div>
            
            <p className="mt-6 text-xs text-gray-400 font-medium uppercase tracking-widest">
              Trusted by 500+ event planners worldwide
            </p>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <FunctionalFeature 
                icon={<Clock className="text-blue-600" size={32} />}
                title="Real-time Collection"
                description="Attendees can upload media directly via a unique URL or QR code, syncing instantly to your event timeline."
              />
              <FunctionalFeature 
                icon={<Shield className="text-blue-600" size={32} />}
                title="Management Control"
                description="Keep full control over permissions, moderation, and visibility for every contributor in your event."
              />
              <FunctionalFeature 
                icon={<Globe className="text-blue-600" size={32} />}
                title="Seamless Distribution"
                description="Easily share the gathered memories with stakeholders or participants via private, secure links."
              />
            </div>
          </div>
        </section>

        {/* Simple Call to Action */}
        <section className="bg-blue-600 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Ready to collect your first memory?</h2>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md text-sm font-bold shadow-lg hover:bg-gray-50 transition-colors uppercase tracking-wide">
              Create an account — It's Free
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-4 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Camera size={18} className="text-gray-400" />
            <span className="font-bold text-gray-900">Gather Inc.</span>
          </div>
          <div className="flex gap-8 mb-4 md:mb-0">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
            <a href="#" className="hover:text-blue-600">API Documentation</a>
          </div>
          <p>© 2026 Gather. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FunctionalFeature({ icon, title, description }) {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
      <button className="mt-4 flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider">
        Learn more <ChevronRight size={14} />
      </button>
    </div>
  );
}

export default App;
