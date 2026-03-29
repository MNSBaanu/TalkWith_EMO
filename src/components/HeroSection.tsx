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
      // Parallax layers on hero scroll
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
      // Text drifts up as you scroll away
      gsap.to([headlineRef.current, subRef.current, pillsRef.current], {
        yPercent: -30, opacity: 0, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top top', end: '60% top', scrub: true },
      });

      // Entrance animations
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(headlineRef.current,
        { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out' })
        .fromTo(subRef.current,
          { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.6')
        .fromTo(pillsRef.current ? Array.from(pillsRef.current.children) : [],
          { y: 20, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: 'back.out(1.5)' }, '-=0.5')
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
      style={{ height: '100vh', minHeight: 640, backgroundColor: '#FFFFFF' }}
    >
      {/* ── BG LAYER: large soft color blobs ── */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform', height: '130%', top: '-15%' }}>
        {/* One blob per emotion color — arranged in a row */}
        {EMOTIONS.map((e, i) => (
          <div key={e.id} style={{
            position: 'absolute',
            width: 340, height: 340,
            borderRadius: '50%',
            background: e.light,
            opacity: 0.55,
            left: `${8 + i * 20}%`,
            top: `${30 + (i % 2) * 20}%`,
            transform: 'translate(-50%, -50%)',
          }} />
        ))}
      </div>

      {/* ── MID LAYER: medium rings ── */}
      <div ref={midRef} className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform', height: '150%', top: '-25%' }}>
        {EMOTIONS.map((e, i) => (
          <div key={e.id} style={{
            position: 'absolute',
            width: 180, height: 180,
            borderRadius: '50%',
            border: `3px solid ${e.primary}`,
            opacity: 0.2,
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
            transform: 'translate(-50%, -50%)',
          }} />
        ))}
        {/* Extra accent circles */}
        <div style={{ position:'absolute', right:'5%', top:'15%', width:120, height:120, borderRadius:'50%', background:'#F59E0B', opacity:0.12 }} />
        <div style={{ position:'absolute', left:'3%', bottom:'20%', width:90, height:90, borderRadius:'50%', background:'#3B82F6', opacity:0.12 }} />
      </div>

      {/* ── FG LAYER: small solid dots ── */}
      <div ref={fgRef} className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform', height: '170%', top: '-35%' }}>
        {EMOTIONS.flatMap((e, ei) =>
          [0,1,2].map(j => (
            <div key={`${e.id}-${j}`} style={{
              position: 'absolute',
              width: 10 + j * 4, height: 10 + j * 4,
              borderRadius: '50%',
              background: e.primary,
              opacity: 0.25,
              left: `${10 + ei * 18 + j * 5}%`,
              top: `${15 + j * 25 + (ei % 2) * 10}%`,
              transform: 'translate(-50%, -50%)',
            }} />
          ))
        )}
      </div>

      {/* ── HERO TEXT ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-6">

        <h1
          ref={headlineRef}
          className="font-black tracking-tight leading-none"
          style={{ fontSize: 'clamp(52px, 10vw, 120px)', color: '#0F172A', marginBottom: 24 }}
        >
          Emotion
          <br />
          <span style={{ color: '#F59E0B' }}>Universe</span>
        </h1>

        <p
          ref={subRef}
          className="font-light leading-relaxed"
          style={{
            fontSize: 'clamp(15px, 2vw, 22px)',
            color: '#475569',
            maxWidth: 520,
            marginBottom: 40,
          }}
        >
          A cinematic journey through the five core emotions that make us human.
          Scroll to explore each world.
        </p>

        {/* Emotion pills */}
        <div ref={pillsRef} className="flex flex-wrap gap-3 justify-center">
          {EMOTIONS.map(e => (
            <button
              key={e.id}
              onClick={() => document.getElementById(`emotion-${e.id}`)?.scrollIntoView({ behavior: 'smooth' })}
              className="px-5 py-2 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: e.light,
                color: e.dark,
                border: `2px solid ${e.primary}`,
              }}
            >
              {e.name}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-400">Scroll</span>
        {/* Animated scroll line */}
        <div className="relative w-px h-12 bg-slate-200 overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-slate-400 animate-scrollLine" style={{ height: '40%' }} />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }} />
    </section>
  );
}
