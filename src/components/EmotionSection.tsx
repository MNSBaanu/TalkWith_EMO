import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Emotion, Shape } from '../data/emotions';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  emotion: Emotion;
  index: number;
}

// Render a single decorative shape
function ShapeEl({ shape, color }: { shape: Shape; color: string }) {
  const base: React.CSSProperties = {
    position: 'absolute',
    left: `${shape.x}%`,
    top: `${shape.y}%`,
    opacity: shape.opacity,
    color,
  };

  if (shape.type === 'circle') {
    return (
      <div style={{
        ...base,
        width: shape.size,
        height: shape.size,
        borderRadius: '50%',
        background: color,
        transform: 'translate(-50%, -50%)',
      }} />
    );
  }
  if (shape.type === 'ring') {
    return (
      <div style={{
        ...base,
        width: shape.size,
        height: shape.size,
        borderRadius: '50%',
        border: `2px solid ${color}`,
        background: 'transparent',
        transform: 'translate(-50%, -50%)',
      }} />
    );
  }
  if (shape.type === 'square') {
    return (
      <div style={{
        ...base,
        width: shape.size,
        height: shape.size,
        border: `2px solid ${color}`,
        background: 'transparent',
        transform: 'translate(-50%, -50%) rotate(45deg)',
      }} />
    );
  }
  if (shape.type === 'triangle') {
    return (
      <div style={{
        ...base,
        width: 0,
        height: 0,
        borderLeft: `${shape.size / 2}px solid transparent`,
        borderRight: `${shape.size / 2}px solid transparent`,
        borderBottom: `${shape.size}px solid ${color}`,
        background: 'transparent',
        transform: 'translate(-50%, -50%)',
      }} />
    );
  }
  // dot
  return (
    <div style={{
      ...base,
      width: shape.size,
      height: shape.size,
      borderRadius: '50%',
      background: color,
      transform: 'translate(-50%, -50%)',
    }} />
  );
}

export default function EmotionSection({ emotion, index }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);
  const midRef     = useRef<HTMLDivElement>(null);
  const fgRef      = useRef<HTMLDivElement>(null);
  const textRef    = useRef<HTMLDivElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);
  const subRef     = useRef<HTMLParagraphElement>(null);
  const quoteRef   = useRef<HTMLParagraphElement>(null);
  const numRef     = useRef<HTMLSpanElement>(null);

  const bgShapes  = emotion.shapes.filter(s => s.layer === 0);
  const midShapes = emotion.shapes.filter(s => s.layer === 1);
  const fgShapes  = emotion.shapes.filter(s => s.layer === 2);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {

      // ── PARALLAX: background slowest ──────────────────────────────
      gsap.to(bgRef.current, {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // ── PARALLAX: midground medium ─────────────────────────────────
      gsap.to(midRef.current, {
        yPercent: -42,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // ── PARALLAX: foreground fastest ──────────────────────────────
      gsap.to(fgRef.current, {
        yPercent: -72,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // ── TEXT: subtle upward drift as you scroll through ───────────
      gsap.to(textRef.current, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // ── REVEAL: title splits in when section enters viewport ───────
      gsap.fromTo(titleRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.1, ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Accent line grows from left
      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1, duration: 0.8, ease: 'power3.out', delay: 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo([subRef.current, quoteRef.current],
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.15, delay: 0.3,
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Big number fades in
      gsap.fromTo(numRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

    }, section);

    return () => ctx.revert();
  }, [emotion.id]);

  return (
    <section
      ref={sectionRef}
      id={`emotion-${emotion.id}`}
      className="relative w-full overflow-hidden"
      style={{
        height: '100vh',
        minHeight: 600,
        backgroundColor: emotion.bgColor,
      }}
    >
      {/* ── LAYER 0: Background (slowest) ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform', height: '130%', top: '-15%' }}
      >
        {bgShapes.map((s, i) => (
          <ShapeEl key={i} shape={s} color={emotion.color} />
        ))}
        {/* Solid color radial fill — no gradient tricks, just a big circle */}
        <div
          style={{
            position: 'absolute',
            width: '70vw',
            height: '70vw',
            borderRadius: '50%',
            background: emotion.color,
            opacity: 0.04,
            top: '10%',
            right: '-20%',
          }}
        />
      </div>

      {/* ── LAYER 1: Midground (medium) ── */}
      <div
        ref={midRef}
        className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform', height: '150%', top: '-25%' }}
      >
        {midShapes.map((s, i) => (
          <ShapeEl key={i} shape={s} color={emotion.color} />
        ))}
      </div>

      {/* ── LAYER 2: Foreground (fastest) ── */}
      <div
        ref={fgRef}
        className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform', height: '170%', top: '-35%' }}
      >
        {fgShapes.map((s, i) => (
          <ShapeEl key={i} shape={s} color={emotion.color} />
        ))}
      </div>

      {/* ── Vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 35%, ${emotion.bgColor}CC 100%)`,
        }}
      />

      {/* ── TEXT CONTENT ── */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center z-20"
        style={{ willChange: 'transform' }}
      >
        <div className="px-12 sm:px-20 lg:px-32 max-w-4xl">

          {/* Index number — big, faint */}
          <span
            ref={numRef}
            className="block font-black leading-none mb-4 select-none"
            style={{
              fontSize: 'clamp(80px, 15vw, 180px)',
              color: emotion.color,
              opacity: 0.08,
              lineHeight: 1,
              marginLeft: '-0.05em',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Accent line */}
          <div
            ref={lineRef}
            style={{ width: 64, height: 4, background: emotion.color, marginBottom: 24, borderRadius: 2 }}
          />

          {/* Title */}
          <h2
            ref={titleRef}
            className="font-black leading-none tracking-tight"
            style={{
              fontSize: 'clamp(56px, 10vw, 120px)',
              color: emotion.color,
              marginBottom: 24,
            }}
          >
            {emotion.name}
          </h2>

          {/* Subtitle */}
          <p
            ref={subRef}
            className="font-medium tracking-widest uppercase"
            style={{
              fontSize: 'clamp(12px, 1.5vw, 16px)',
              color: emotion.colorLight,
              opacity: 0.7,
              marginBottom: 20,
              letterSpacing: '0.2em',
            }}
          >
            {emotion.subtitle}
          </p>

          {/* Quote */}
          <p
            ref={quoteRef}
            className="font-light italic leading-relaxed"
            style={{
              fontSize: 'clamp(14px, 1.8vw, 20px)',
              color: emotion.colorLight,
              opacity: 0.5,
              maxWidth: 480,
            }}
          >
            {emotion.quote}
          </p>
        </div>
      </div>

      {/* ── Bottom section divider ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `${emotion.color}22` }}
      />

      {/* ── Scroll indicator (first section only) ── */}
      {index === 0 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: `${emotion.colorLight}66` }}
          >
            Scroll
          </span>
          <div
            className="w-px h-12 animate-pulse"
            style={{ background: `linear-gradient(to bottom, ${emotion.color}88, transparent)` }}
          />
        </div>
      )}
    </section>
  );
}
