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
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 sm:px-12 py-5"
        style={{
          background: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #F1F5F9',
        }}
      >
        <span className="font-black text-slate-800 text-sm tracking-[0.25em] uppercase">
          Emotion Universe
        </span>
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400">
          Inside Out
        </span>
      </header>

      <HeroSection />

      {EMOTIONS.map((emotion, i) => (
        <EmotionSection key={emotion.id} emotion={emotion} index={i} />
      ))}

      <NavDots emotions={EMOTIONS} />
    </div>
  );
}
