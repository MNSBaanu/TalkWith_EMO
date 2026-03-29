import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Emotion } from '../data/emotions';
import {
  JoyDecorations, SadnessDecorations,
  AngerDecorations, FearDecorations, DisgustDecorations,
} from './EmotionDecorations';

gsap.registerPlugin(ScrollTrigger);

interface Props { emotion: Emotion; index: number; }

function Decorations({ emotion, layer }: { emotion: Emotion; layer: 0|1|2 }) {
  const p = { color: emotion.primary, light: emotion.light, layer };
  if (emotion.id === 'joy')     return <JoyDecorations {...p} />;
  if (emotion.id === 'sadness') return <SadnessDecorations {...p} />;
  if (emotion.id === 'anger')   return <AngerDecorations {...p} />;
  if (emotion.id === 'fear')    return <FearDecorations {...p} />;
  if (emotion.id === 'disgust') return <DisgustDecorations {...p} />;
  return null;
}

export default function EmotionSection({ emotion, index }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);
  const midRef     = useRef<HTMLDivElement>(null);
  const fgRef      = useRef<HTMLDivElement>(null);
  const textRef    = useRef<HTMLDivElement>(null);
  const numRef     = useRef<HTMLSpanElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const subRef     = useRef<HTMLParagraphElement>(null);
  const quoteRef   = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // ── PARALLAX: bg slowest ──────────────────────────────────────
      gsap.to(bgRef.current, {
        yPercent: -18, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
      });
      // ── PARALLAX: mid medium ──────────────────────────────────────
      gsap.to(midRef.current, {
        yPercent: -42, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
      });
      // ── PARALLAX: fg fastest ──────────────────────────────────────
      gsap.to(fgRef.current, {
        yPercent: -72, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
      });
      // ── TEXT drifts up slightly ───────────────────────────────────
      gsap.to(textRef.current, {
        yPercent: -10, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
      });

      // ── REVEAL animations ─────────────────────────────────────────
      const st = { trigger: section, start: 'top 78%', toggleActions: 'play none none reverse' };

      gsap.fromTo(numRef.current,
        { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: st });

      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.7, ease: 'power3.out', delay: 0.15, scrollTrigger: st });

      gsap.fromTo(titleRef.current,
        { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.1, scrollTrigger: st });

      gsap.fromTo([subRef.current, quoteRef.current],
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out', stagger: 0.14, delay: 0.3, scrollTrigger: st });
    }, section);

    return () => ctx.revert();
  }, [emotion.id]);

  return (
    <section
      ref={sectionRef}
      id={`emotion-${emotion.id}`}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: 600, backgroundColor: emotion.bg }}
    >
      {/* ── LAYER 0: Background — slowest ── */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform', height: '130%', top: '-15%' }}>
        <Decorations emotion={emotion} layer={0} />
      </div>

      {/* ── LAYER 1: Midground — medium ── */}
      <div ref={midRef} className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform', height: '150%', top: '-25%' }}>
        <Decorations emotion={emotion} layer={1} />
      </div>

      {/* ── LAYER 2: Foreground — fastest ── */}
      <div ref={fgRef} className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform', height: '170%', top: '-35%' }}>
        <Decorations emotion={emotion} layer={2} />
      </div>

      {/* Subtle bottom fade to separate sections */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: `linear-gradient(to bottom, transparent, ${emotion.bg})` }} />

      {/* ── TEXT CONTENT ── */}
      <div ref={textRef} className="absolute inset-0 flex items-center z-20"
        style={{ willChange: 'transform' }}>
        <div className="px-12 sm:px-20 lg:px-32 max-w-4xl">

          {/* Big faint index number */}
          <span ref={numRef} className="block font-black select-none leading-none"
            style={{
              fontSize: 'clamp(72px, 14vw, 160px)',
              color: emotion.primary,
              opacity: 0.1,
              marginLeft: '-0.04em',
              marginBottom: 8,
            }}>
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Accent line */}
          <div ref={lineRef} style={{
            width: 56, height: 4, background: emotion.primary,
            borderRadius: 2, marginBottom: 20,
          }} />

          {/* Title */}
          <h2 ref={titleRef} className="font-black leading-none tracking-tight"
            style={{
              fontSize: 'clamp(52px, 9vw, 112px)',
              color: emotion.dark,
              marginBottom: 20,
            }}>
            {emotion.name}
          </h2>

          {/* Subtitle */}
          <p ref={subRef} className="font-semibold tracking-widest uppercase"
            style={{
              fontSize: 'clamp(11px, 1.3vw, 15px)',
              color: emotion.mid,
              letterSpacing: '0.22em',
              marginBottom: 18,
            }}>
            {emotion.subtitle}
          </p>

          {/* Quote */}
          <p ref={quoteRef} className="font-light italic leading-relaxed"
            style={{
              fontSize: 'clamp(14px, 1.6vw, 19px)',
              color: emotion.mid,
              opacity: 0.75,
              maxWidth: 460,
            }}>
            {emotion.quote}
          </p>
        </div>
      </div>

      {/* Section bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: emotion.primary, opacity: 0.15 }} />

      {/* Scroll hint — first section only */}
      {index === 0 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase"
            style={{ color: emotion.mid, opacity: 0.5 }}>Scroll</span>
          <div className="w-px h-10" style={{ background: emotion.primary, opacity: 0.4 }} />
        </div>
      )}
    </section>
  );
}
