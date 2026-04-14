import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EMOTIONS } from '../data/emotions';
import HeroSection from './HeroSection';
import EmotionSection from './EmotionSection';
import MeetSection from './MeetSection';
import FindEmotionSection from './FindEmotionSection';
import NavDots from './NavDots';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicApp() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Emotion nav — desktop */}
        <nav className="hidden sm:flex items-center gap-6">
          <button
            onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-xs font-semibold tracking-widest uppercase transition-colors duration-200 hover:opacity-60"
            style={{ color: '#64748B', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: "'DM Sans', sans-serif" }}
          >
            Home
          </button>
          {EMOTIONS.map(e => (
            <button
              key={e.id}
              onClick={() => document.getElementById(`emotion-${e.id}`)?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs font-semibold tracking-widest uppercase transition-colors duration-200 hover:opacity-60"
              style={{ color: e.primary, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: "'DM Sans', sans-serif" }}
            >
              {e.name}
            </button>
          ))}
        </nav>

        {/* Hamburger — mobile only */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span style={{ display: 'block', width: 22, height: 2, background: '#0F172A', borderRadius: 2, transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#0F172A', borderRadius: 2, transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#0F172A', borderRadius: 2, transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none' }} />
        </button>
      </header>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden fixed top-[57px] left-0 right-0 z-40 flex flex-col py-4 px-6 gap-4"
          style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #E2E8F0' }}>
          <button onClick={() => { document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); }}
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#64748B', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '4px 0' }}>
            Home
          </button>
          {EMOTIONS.map(e => (
            <button key={e.id}
              onClick={() => { document.getElementById(`emotion-${e.id}`)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); }}
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', color: e.primary, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '4px 0' }}>
              {e.name}
            </button>
          ))}
        </div>
      )}

      <HeroSection />
      <MeetSection />

      {EMOTIONS.map((emotion, i) => (
        <EmotionSection key={emotion.id} emotion={emotion} index={i} />
      ))}

      <FindEmotionSection />

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
