import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroBg from '../assets/Hero.png';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const imgRef      = useRef<HTMLDivElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);
  const tagRef      = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLButtonElement>(null);
  const scrollRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(imgRef.current,
        { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power3.out' })
      .fromTo(tagRef.current,
        { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.6')
      .fromTo(headlineRef.current,
        { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out' }, '-=0.4')
      .fromTo(subRef.current,
        { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .fromTo(ctaRef.current,
        { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .fromTo(scrollRef.current,
        { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.2');

    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        y: -60,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to(contentRef.current, {
        y: -40,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to(sectionRef.current, {
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: '65% top', end: 'bottom top', scrub: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: 640, background: '#b8c8d8', paddingTop: 72 }}
    >
      <div className="w-full h-full flex items-center flex-row-reverse">

        {/* Right — image */}
        <div
          ref={imgRef}
          className="flex-shrink-0 flex items-end justify-center"
          style={{ width: '52%', height: '100%', paddingBottom: 0 }}
        >
          <img
            src={heroBg}
            alt="EMO characters"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center bottom',
              display: 'block',
              transform: 'scale(1.5)',
              transformOrigin: 'center bottom',
            }}
          />
        </div>

        {/* Right — text content */}
        <div
          ref={contentRef}
          className="flex flex-col items-start justify-center"
          style={{ flex: 1, paddingLeft: 48, paddingRight: 48 }}
        >
          <p
            ref={tagRef}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'rgba(15,23,42,0.5)',
              marginBottom: 20,
            }}
          >
            Emotional Intelligence Platform
          </p>

          <h1
            ref={headlineRef}
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(40px, 5vw, 80px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#0F172A',
              marginBottom: 24,
            }}
          >
            Talk With <span style={{ color: '#F59E0B' }}>EMO</span>
          </h1>

          <p
            ref={subRef}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(14px, 1.4vw, 18px)',
              lineHeight: 1.75,
              color: 'rgba(15,23,42,0.6)',
              maxWidth: 380,
              marginBottom: 40,
            }}
          >
            Express yourself to an emotion that truly understands.
            Open a conversation with Joy, Sadness, Anger, Fear, or Disgust.
          </p>

          <button
            ref={ctaRef}
            onClick={() => document.getElementById('emotion-joy')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: '0.02em',
              color: '#FFFFFF',
              background: '#0F172A',
              border: 'none',
              borderRadius: 50,
              padding: '15px 40px',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.28)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.18)'; }}
          >
            Start Exploring →
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ zIndex: 2 }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(15,23,42,0.35)' }}>
          Scroll
        </span>
        <div className="relative w-px h-10 overflow-hidden" style={{ background: 'rgba(15,23,42,0.15)' }}>
          <div className="absolute top-0 left-0 w-full animate-scrollLine" style={{ height: '40%', background: 'rgba(15,23,42,0.4)' }} />
        </div>
      </div>
    </section>
  );
}
