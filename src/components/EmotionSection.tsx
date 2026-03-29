import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Emotion } from '../data/emotions';
import ChatModal from './ChatModal';

gsap.registerPlugin(ScrollTrigger);

interface Props { emotion: Emotion; index: number; }

export default function EmotionSection({ emotion, index }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);
  const numRef     = useRef<HTMLSpanElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const subRef     = useRef<HTMLParagraphElement>(null);
  const quoteRef   = useRef<HTMLParagraphElement>(null);
  const btnRef     = useRef<HTMLButtonElement>(null);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      const st = { trigger: section, start: 'top 75%', toggleActions: 'play none none reverse' };

      gsap.fromTo(numRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: st });

      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.6, ease: 'power3.out', delay: 0.1, scrollTrigger: st });

      gsap.fromTo(titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power4.out', delay: 0.15, scrollTrigger: st });

      gsap.fromTo([subRef.current, quoteRef.current, btnRef.current],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.28, scrollTrigger: st });
    }, section);
    return () => ctx.revert();
  }, [emotion.id]);

  return (
    <>
      <section
        ref={sectionRef}
        id={`emotion-${emotion.id}`}
        className="relative w-full flex items-center"
        style={{ minHeight: '100vh', backgroundColor: emotion.bg, borderBottom: `1px solid ${emotion.border}` }}
      >
        <div className="w-full px-8 sm:px-16 lg:px-24 py-28 max-w-3xl">

          {/* Faint index number */}
          <span ref={numRef} className="block select-none leading-none"
            style={{
              fontSize: 'clamp(56px, 10vw, 120px)',
              color: emotion.primary, opacity: 0.08,
              marginLeft: '-0.04em', lineHeight: 1,
              fontFamily: "'Playfair Display', serif", fontWeight: 800,
            }}>
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Accent line */}
          <div ref={lineRef} style={{
            width: 40, height: 3, background: emotion.primary,
            borderRadius: 2, marginBottom: 24, marginTop: -4,
          }} />

          {/* Title */}
          <h2 ref={titleRef} className="leading-none tracking-tight"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)', color: emotion.dark, marginBottom: 16, fontFamily: "'Playfair Display', serif", fontWeight: 800 }}>
            {emotion.name}
          </h2>

          {/* Subtitle */}
          <p ref={subRef} className="font-semibold tracking-widest uppercase mb-6"
            style={{ fontSize: 'clamp(10px, 1.1vw, 12px)', color: emotion.mid, letterSpacing: '0.22em', fontFamily: "'Inter', sans-serif" }}>
            {emotion.subtitle}
          </p>

          {/* Quote */}
          <p ref={quoteRef} className="leading-relaxed mb-10"
            style={{ fontSize: 'clamp(14px, 1.4vw, 18px)', color: emotion.mid, opacity: 0.8, maxWidth: 480, fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}>
            "{emotion.quote}"
          </p>

          {/* Chat button */}
          <button
            ref={btnRef}
            onClick={() => setChatOpen(true)}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl text-sm tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: emotion.primary, color: '#fff', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            Talk to {emotion.name} EMO
            <span style={{ fontSize: 16, opacity: 0.8 }}>→</span>
          </button>
        </div>

        {/* Scroll hint on first section */}
        {index === 0 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-xs font-medium tracking-[0.25em] uppercase"
              style={{ color: emotion.mid, opacity: 0.4 }}>Scroll</span>
            <div className="relative w-px h-10 overflow-hidden" style={{ background: emotion.border }}>
              <div className="absolute top-0 left-0 w-full animate-scrollLine"
                style={{ height: '40%', background: emotion.primary }} />
            </div>
          </div>
        )}
      </section>

      {/* Chat modal — rendered outside section so it overlays everything */}
      {chatOpen && (
        <ChatModal emotion={emotion} onClose={() => setChatOpen(false)} />
      )}
    </>
  );
}
