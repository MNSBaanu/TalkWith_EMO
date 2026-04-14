import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import stripeImg from '../assets/emotions-stripe.jpg';
import { EMOTIONS } from '../data/emotions';

gsap.registerPlugin(ScrollTrigger);

export default function FindEmotionSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const bgRef       = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const cardsRef    = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Parallax bg
      gsap.to(bgRef.current, {
        y: 80,
        ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
      });

      const st = { trigger: section, start: 'top 70%', toggleActions: 'play none none reverse' };

      gsap.fromTo(headlineRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', scrollTrigger: st });

      gsap.fromTo(subRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.15, scrollTrigger: st });

      gsap.fromTo(cardsRef.current ? Array.from(cardsRef.current.children) : [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.25,
          scrollTrigger: st });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="find-emotion"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh', background: '#0a0a14' }}
    >
      {/* Parallax background */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-10% 0',
          backgroundImage: `url(${stripeImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          zIndex: 0,
          opacity: 0.18,
        }}
      />

      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(5,5,20,0.92) 0%, rgba(5,5,20,0.75) 50%, rgba(5,5,20,0.95) 100%)',
      }} />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center px-6 text-center"
        style={{ zIndex: 2, minHeight: '100vh', paddingTop: 100, paddingBottom: 100 }}>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 11,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.35)', marginBottom: 20,
        }}>
          Not sure how you feel?
        </p>

        <h2
          ref={headlineRef}
          style={{
            fontFamily: "'Sora', sans-serif", fontWeight: 800,
            fontSize: 'clamp(32px, 5.5vw, 72px)',
            lineHeight: 1.05, letterSpacing: '-0.03em',
            color: '#FFFFFF', marginBottom: 20,
            textShadow: '0 4px 32px rgba(0,0,0,0.4)',
          }}
        >
          Find your emotion
        </h2>

        <p
          ref={subRef}
          style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
            fontSize: 'clamp(15px, 1.4vw, 18px)', lineHeight: 1.75,
            color: 'rgba(255,255,255,0.55)', maxWidth: 480, marginBottom: 64,
          }}
        >
          Sometimes feelings are hard to name. Pick the one that feels closest
          to what's going on inside you right now — and start a conversation.
        </p>

        {/* Emotion cards */}
        <div
          ref={cardsRef}
          className="flex flex-wrap gap-5 justify-center"
          style={{ maxWidth: 860 }}
        >
          {EMOTIONS.map(e => (
            <button
              key={e.id}
              onClick={() => document.getElementById(`emotion-${e.id}`)?.scrollIntoView({ behavior: 'smooth' })}
              onMouseEnter={() => setHovered(e.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: hovered === e.id ? '#fff' : e.primary,
                background: hovered === e.id ? e.primary : 'rgba(255,255,255,0.05)',
                border: `1.5px solid ${e.primary}55`,
                borderRadius: 16,
                padding: '20px 32px',
                cursor: 'pointer',
                minWidth: 150,
                transition: 'all 0.25s ease',
                backdropFilter: 'blur(8px)',
                boxShadow: hovered === e.id ? `0 8px 32px ${e.primary}44` : 'none',
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 6, opacity: 0.7 }}>
                {e.subtitle}
              </div>
              <div style={{ fontSize: 28, fontWeight: 800, fontFamily: "'Sora', sans-serif" }}>
                {e.name}
              </div>
              <div style={{ fontSize: 12, marginTop: 8, opacity: 0.6, fontStyle: 'italic', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
                "{e.quote.slice(0, 40)}..."
              </div>
            </button>
          ))}
        </div>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 13,
          color: 'rgba(255,255,255,0.25)', marginTop: 56, letterSpacing: '0.05em',
        }}>
          Tap any emotion to begin your conversation
        </p>
      </div>
    </section>
  );
}
