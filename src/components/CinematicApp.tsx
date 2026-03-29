import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EMOTIONS } from '../data/emotions';
import EmotionSection from './EmotionSection';
import NavDots from './NavDots';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicApp() {
  useEffect(() => {
    // Lenis smooth scroll wired into GSAP ticker
    const lenis = new Lenis({ duration: 1.4, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-black">
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 pointer-events-none">
        <span className="text-white font-black text-sm tracking-[0.3em] uppercase opacity-60">
          Emotion Universe
        </span>
        <span className="text-white text-xs tracking-[0.2em] uppercase opacity-30">
          Inside Out
        </span>
      </header>

      {/* All emotion sections stacked — each 100vh */}
      {EMOTIONS.map((emotion, i) => (
        <EmotionSection key={emotion.id} emotion={emotion} index={i} />
      ))}

      {/* Fixed side nav dots */}
      <NavDots emotions={EMOTIONS} />
    </div>
  );
}
