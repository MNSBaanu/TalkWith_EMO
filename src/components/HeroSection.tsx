import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { EMOTIONS } from '../data/emotions';

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const pillsRef    = useRef<HTMLDivElement>(null);
  const scrollRef   = useRef<HTMLDivElement>(null);
  const tagRef      = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(tagRef.current,
      { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
      .fromTo(headlineRef.current,
        { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }, '-=0.4')
      .fromTo(subRef.current,
        { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo(pillsRef.current ? Array.from(pillsRef.current.children) : [],
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: 'power2.out' }, '-=0.4')
      .fromTo(scrollRef.current,
        { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.2');
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full flex flex-col items-center justify-center text-center"
      style={{ height: '100vh', minHeight: 600, background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}
    >
      <div className="px-6 max-w-2xl mx-auto">
        <p ref={tagRef} className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-400 mb-6">
          Emotional Intelligence Platform
        </p>

        <h1
          ref={headlineRef}
          className="tracking-tight leading-tight mb-5"
          style={{ fontSize: 'clamp(44px, 8vw, 96px)', color: '#0F172A', fontFamily: "'Playfair Display', serif", fontWeight: 800 }}
        >
          Talk With <span style={{ color: '#D97706' }}>EMO</span>
        </h1>

        <p
          ref={subRef}
          className="leading-relaxed mb-10"
          style={{ fontSize: 'clamp(15px, 1.6vw, 19px)', color: '#64748B', maxWidth: 440, margin: '0 auto 40px', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
        >
          Express yourself to an emotion that truly understands.
          Scroll down and open a conversation with Joy, Sadness, Anger, Fear, or Disgust.
        </p>

        {/* Emotion pills */}
        <div ref={pillsRef} className="flex flex-wrap gap-3 justify-center">
          {EMOTIONS.map(e => (
            <button
              key={e.id}
              onClick={() => document.getElementById(`emotion-${e.id}`)?.scrollIntoView({ behavior: 'smooth' })}
              className="px-5 py-2 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:opacity-80 active:scale-95"
              style={{ background: e.surface, color: e.dark, border: `1.5px solid ${e.border}` }}
            >
              {e.name}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs font-medium tracking-[0.25em] uppercase text-slate-300">Scroll</span>
        <div className="relative w-px h-10 overflow-hidden bg-slate-100">
          <div className="absolute top-0 left-0 w-full bg-slate-300 animate-scrollLine" style={{ height: '40%' }} />
        </div>
      </div>
    </section>
  );
}
