import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { EMOTIONS } from '../data/emotions';

export default function HeroSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const bgRef       = useRef<HTMLDivElement>(null);
  const midRef      = useRef<HTMLDivElement>(null);
  const fgRef       = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const pillsRef    = useRef<HTMLDivElement>(null);
  const scrollRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: -20, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to(midRef.current, {
        yPercent: -45, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to(fgRef.current, {
        yPercent: -70, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to([headlineRef.current, subRef.current, pillsRef.current], {
        yPercent: -28, opacity: 0, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top top', end: '55% top', scrub: true },
      });
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(headlineRef.current,
        { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out' })
        .fromTo(subRef.current,
          { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.6')
        .fromTo(pillsRef.current ? Array.from(pillsRef.current.children) : [],
          { y: 20, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: 'back.out(1.4)' }, '-=0.5')
        .fromTo(scrollRef.current,
          { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2');
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: 640, background: '#FFFFFF' }}
    >
      {/* BG layer — large soft tinted circles */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform', height: '130%', top: '-15%' }}>
        {EMOTIONS.map((e, i) => (
          <div key={e.id} style={{
            position: 'absolute',
            width: 400, height: 400, borderRadius: '50%',
            background: e.surface, opacity: 0.8,
            left: `${4 + i * 19}%`, top: `${22 + (i % 2) * 24}%`,
            transform: 'translate(-50%,-50%)',
          }} />
        ))}
      </div>

      {/* MID layer — rings */}
      <div ref={midRef} className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform', height: '150%', top: '-25%' }}>
        {EMOTIONS.map((e, i) => (
          <div key={e.id} style={{
            position: 'absolute',
            width: 200, height: 200, borderRadius: '50%',
            border: `1.5px solid ${e.border}`,
            left: `${10 + i * 18}%`, top: `${16 + (i % 3) * 22}%`,
            transform: 'translate(-50%,-50%)',
          }} />
        ))}
      </div>

      {/* FG layer — small dots */}
      <div ref={fgRef} className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform', height: '170%', top: '-35%' }}>
        {EMOTIONS.flatMap((e, ei) =>
          [0, 1, 2].map(j => (
            <div key={`${e.id}-${j}`} style={{
              position: 'absolute',
              width: 8 + j * 4, height: 8 + j * 4, borderRadius: '50%',
              background: e.primary, opacity: 0.18,
              left: `${7 + ei * 18 + j * 4}%`,
              top: `${10 + j * 22 + (ei % 2) * 8}%`,
              transform: 'translate(-50%,-50%)',
            }} />
          ))
        )}
      </div>

      {/* Hero text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-6">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-400 mb-6">
          Emotional Intelligence Platform
        </p>

        <h1
          ref={headlineRef}
          className="font-black tracking-tight leading-none"
          style={{ fontSize: 'clamp(48px, 9vw, 108px)', color: '#0F172A', marginBottom: 20 }}
        >
          Talk With <span style={{ color: '#D97706' }}>EMO</span>
        </h1>

        <p
          ref={subRef}
          className="leading-relaxed font-light"
          style={{ fontSize: 'clamp(15px, 1.7vw, 20px)', color: '#64748B', maxWidth: 480, marginBottom: 44 }}
        >
          Express yourself to an emotion that truly understands.
          Each EMO is here to listen, reflect, and respond.
        </p>

        {/* Emotion pills — text only, no icons */}
        <div ref={pillsRef} className="flex flex-wrap gap-3 justify-center">
          {EMOTIONS.map(e => (
            <button
              key={e.id}
              onClick={() => document.getElementById(`emotion-${e.id}`)?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ background: e.surface, color: e.dark, border: `1.5px solid ${e.border}` }}
            >
              {e.name}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <span className="text-xs font-medium tracking-[0.25em] uppercase text-slate-300">Scroll</span>
        <div className="relative w-px h-10 overflow-hidden bg-slate-200">
          <div className="absolute top-0 left-0 w-full bg-slate-400 animate-scrollLine" style={{ height: '40%' }} />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }} />
    </section>
  );
}
