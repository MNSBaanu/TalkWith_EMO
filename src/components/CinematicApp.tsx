import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EMOTIONS } from '../data/emotions';
import HeroSection from './HeroSection';
import EmotionSection from './EmotionSection';
import NavDots from './NavDots';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicApp() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.4, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    return () => { lenis.destroy(); };
  }, []);

  return (
    <div className="relative bg-white">
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 sm:px-14 py-4"
        style={{
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid #E2E8F0',
        }}
      >
        {/* Brand */}
        <span className="text-slate-900 text-base tracking-tight"
          style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700 }}>
          Talk With EMO
        </span>

        {/* Emotion nav — text only */}
        <nav className="hidden sm:flex items-center gap-6">
          {EMOTIONS.map(e => (
            <button
              key={e.id}
              onClick={() => document.getElementById(`emotion-${e.id}`)?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs font-semibold tracking-widest uppercase transition-colors duration-200 hover:opacity-60"
              style={{ color: e.primary, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              {e.name}
            </button>
          ))}
        </nav>

        <span className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400"
          style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Emotional Intelligence
        </span>
      </header>

      <HeroSection />

      {EMOTIONS.map((emotion, i) => (
        <EmotionSection key={emotion.id} emotion={emotion} index={i} />
      ))}

      {/* Footer */}
      <footer
        className="w-full flex items-center justify-between px-8 sm:px-14 py-6"
        style={{ borderTop: '1px solid #E2E8F0' }}
      >
        <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 14, color: '#0F172A' }}>
          Talk With EMO
        </span>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#94A3B8' }}>
          Built by MNSBaanu
        </span>
      </footer>

      <NavDots emotions={EMOTIONS} />
    </div>
  );
}
