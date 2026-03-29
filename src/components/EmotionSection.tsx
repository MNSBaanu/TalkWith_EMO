import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Emotion } from '../data/emotions';
import EmoChat from './EmoChat';

gsap.registerPlugin(ScrollTrigger);

interface Props { emotion: Emotion; index: number; }

// Parallax background — clean geometric shapes only, no icons or emojis
function ParallaxBg({ emotion }: { emotion: Emotion }) {
  return (
    <>
      {/* Large soft circle — background depth */}
      <div style={{
        position: 'absolute', right: '-8%', top: '5%',
        width: 520, height: 520, borderRadius: '50%',
        background: emotion.surface, opacity: 0.7,
      }} />
      {/* Medium ring */}
      <div style={{
        position: 'absolute', left: '8%', bottom: '10%',
        width: 280, height: 280, borderRadius: '50%',
        border: `1.5px solid ${emotion.border}`,
      }} />
    </>
  );
}

function ParallaxMid({ emotion }: { emotion: Emotion }) {
  return (
    <>
      {/* Accent ring */}
      <div style={{
        position: 'absolute', right: '12%', top: '30%',
        width: 180, height: 180, borderRadius: '50%',
        border: `1.5px solid ${emotion.border}`,
      }} />
      {/* Small filled circle */}
      <div style={{
        position: 'absolute', left: '20%', top: '25%',
        width: 60, height: 60, borderRadius: '50%',
        background: emotion.surface,
      }} />
      {/* Horizontal rule */}
      <div style={{
        position: 'absolute', left: '5%', top: '60%',
        width: '30%', height: 1,
        background: emotion.border,
      }} />
    </>
  );
}

function ParallaxFg({ emotion }: { emotion: Emotion }) {
  return (
    <>
      {/* Small dots — scattered */}
      {[[15, 20], [82, 38], [45, 72], [68, 18], [30, 82], [55, 48]].map(([x, y], i) => (
        <div key={i} style={{
          position: 'absolute', left: `${x}%`, top: `${y}%`,
          width: 6 + (i % 3) * 3, height: 6 + (i % 3) * 3,
          borderRadius: '50%', background: emotion.primary,
          opacity: 0.15 + (i % 3) * 0.05,
          transform: 'translate(-50%,-50%)',
        }} />
      ))}
    </>
  );
}

export default function EmotionSection({ emotion, index }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);
  const midRef     = useRef<HTMLDivElement>(null);
  const fgRef      = useRef<HTMLDivElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const subRef     = useRef<HTMLParagraphElement>(null);
  const quoteRef   = useRef<HTMLParagraphElement>(null);
  const chatRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      // 3-layer parallax — scrub ties directly to scroll position
      gsap.to(bgRef.current, {
        yPercent: -18, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
      });
      gsap.to(midRef.current, {
        yPercent: -40, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
      });
      gsap.to(fgRef.current, {
        yPercent: -65, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
      });

      // Reveal on scroll into view
      const st = { trigger: section, start: 'top 78%', toggleActions: 'play none none reverse' };
      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.6, ease: 'power3.out', scrollTrigger: st });
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: 'power4.out', delay: 0.1, scrollTrigger: st });
      gsap.fromTo([subRef.current, quoteRef.current],
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, stagger: 0.1, ease: 'power3.out', delay: 0.22, scrollTrigger: st });
      gsap.fromTo(chatRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.85, ease: 'power3.out', delay: 0.18, scrollTrigger: st });
    }, section);
    return () => ctx.revert();
  }, [emotion.id]);

  return (
    <section
      ref={sectionRef}
      id={`emotion-${emotion.id}`}
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh', backgroundColor: emotion.bg }}
    >
      {/* Layer 0 — background, slowest */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform', height: '130%', top: '-15%' }}>
        <ParallaxBg emotion={emotion} />
      </div>

      {/* Layer 1 — midground */}
      <div ref={midRef} className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform', height: '150%', top: '-25%' }}>
        <ParallaxMid emotion={emotion} />
      </div>

      {/* Layer 2 — foreground, fastest */}
      <div ref={fgRef} className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform', height: '170%', top: '-35%' }}>
        <ParallaxFg emotion={emotion} />
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: emotion.border }} />

      {/* Content — split layout */}
      <div className="relative z-20 min-h-screen flex flex-col lg:flex-row items-center gap-12 px-8 sm:px-14 lg:px-20 py-28">

        {/* Left — emotion identity */}
        <div className="flex-1 flex flex-col justify-center max-w-md">
          {/* Faint index number */}
          <span className="block font-black select-none leading-none"
            style={{
              fontSize: 'clamp(60px, 11vw, 130px)',
              color: emotion.primary, opacity: 0.07,
              marginLeft: '-0.04em', lineHeight: 1,
            }}>
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Accent line */}
          <div ref={lineRef} style={{
            width: 40, height: 3, background: emotion.primary,
            borderRadius: 2, marginBottom: 22, marginTop: -4,
          }} />

          {/* Title */}
          <h2 ref={titleRef} className="font-black leading-none tracking-tight"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)', color: emotion.dark, marginBottom: 16 }}>
            {emotion.name}
          </h2>

          {/* Subtitle */}
          <p ref={subRef} className="font-semibold tracking-widest uppercase mb-5"
            style={{ fontSize: 'clamp(10px, 1.1vw, 12px)', color: emotion.mid, letterSpacing: '0.2em' }}>
            {emotion.subtitle}
          </p>

          {/* Quote */}
          <p ref={quoteRef} className="font-light italic leading-relaxed"
            style={{ fontSize: 'clamp(13px, 1.3vw, 16px)', color: emotion.mid, opacity: 0.8, maxWidth: 380 }}>
            "{emotion.quote}"
          </p>
        </div>

        {/* Right — chat panel */}
        <div ref={chatRef} className="w-full lg:w-[420px] xl:w-[460px] flex-shrink-0"
          style={{ height: 520 }}>
          <EmoChat emotion={emotion} />
        </div>
      </div>

      {/* Scroll hint on first section */}
      {index === 0 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
          <span className="text-xs font-medium tracking-[0.25em] uppercase"
            style={{ color: emotion.mid, opacity: 0.5 }}>Scroll</span>
          <div className="relative w-px h-10 overflow-hidden" style={{ background: emotion.border }}>
            <div className="absolute top-0 left-0 w-full animate-scrollLine"
              style={{ height: '40%', background: emotion.primary }} />
          </div>
        </div>
      )}
    </section>
  );
}
