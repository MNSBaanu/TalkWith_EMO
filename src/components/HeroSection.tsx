import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EMOTIONS } from '../data/emotions';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const pillsRef    = useRef<HTMLDivElement>(null);
  const scrollRef   = useRef<HTMLDivElement>(null);
  const tagRef      = useRef<HTMLParagraphElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);
  const orb1Ref     = useRef<HTMLDivElement>(null);
  const orb2Ref     = useRef<HTMLDivElement>(null);
  const orb3Ref     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance animation
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

    // Parallax — content drifts up as you scroll out
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      gsap.to(contentRef.current, {
        y: -120,
        ease: 'none',
        scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
      });

      // Orbs move at different speeds for depth
      gsap.to(orb1Ref.current, {
        y: -200, x: 40,
        ease: 'none',
        scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: 1.5 },
      });
      gsap.to(orb2Ref.current, {
        y: -120, x: -30,
        ease: 'none',
        scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: 2 },
      });
      gsap.to(orb3Ref.current, {
        y: -80,
        ease: 'none',
        scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: 0.8 },
      });

      // Fade out hero as next section approaches
      gsap.to(section, {
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: section, start: '60% top', end: 'bottom top', scrub: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ height: '100vh', minHeight: 600, background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}
    >
      {/* Parallax background orbs */}
      <div ref={orb1Ref} className="absolute pointer-events-none"
        style={{ width: 500, height: 500, borderRadius: '50%', top: '-10%', right: '-8%',
          background: 'radial-gradient(circle, #FEF3C7 0%, transparent 70%)', opacity: 0.7 }} />
      <div ref={orb2Ref} className="absolute pointer-events-none"
        style={{ width: 400, height: 400, borderRadius: '50%', bottom: '5%', left: '-6%',
          background: 'radial-gradient(circle, #EFF6FF 0%, transparent 70%)', opacity: 0.8 }} />
      <div ref={orb3Ref} className="absolute pointer-events-none"
        style={{ width: 300, height: 300, borderRadius: '50%', top: '30%', left: '10%',
          background: 'radial-gradient(circle, #F5F3FF 0%, transparent 70%)', opacity: 0.5 }} />

      {/* Content with its own parallax layer */}
      <div ref={contentRef} className="relative z-10 px-6 max-w-2xl mx-auto">
        <p ref={tagRef} className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-400 mb-6">
          Emotional Intelligence Platform
        </p>

        <h1
          ref={headlineRef}
          className="tracking-tight leading-tight mb-5"
          style={{ fontSize: 'clamp(44px, 8vw, 96px)', color: '#0F172A', fontFamily: "'Sora', sans-serif", fontWeight: 800 }}
        >
          Talk With <span style={{ color: '#D97706' }}>EMO</span>
        </h1>

        <p
          ref={subRef}
          className="leading-relaxed mb-10"
          style={{ fontSize: 'clamp(15px, 1.6vw, 19px)', color: '#64748B', maxWidth: 440, margin: '0 auto 40px', fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          Express yourself to an emotion that truly understands.
          Scroll down and open a conversation with Joy, Sadness, Anger, Fear, or Disgust.
        </p>


      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs font-medium tracking-[0.25em] uppercase text-slate-300">Scroll</span>
        <div className="relative w-px h-10 overflow-hidden bg-slate-100">
          <div className="absolute top-0 left-0 w-full bg-slate-300 animate-scrollLine" style={{ height: '40%' }} />
        </div>
      </div>
    </section>
  );
}
