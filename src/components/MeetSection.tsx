import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import groupImg from '../assets/emotions-group.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function MeetSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const bgRef       = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Parallax bg
      gsap.to(bgRef.current, {
        y: 100,
        ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
      });

      // Headline + sub entrance
      const st = { trigger: section, start: 'top 65%', toggleActions: 'play none none reverse' };
      gsap.fromTo(headlineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out', scrollTrigger: st });
      gsap.fromTo(subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2, scrollTrigger: st });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="meet"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh', background: '#0a0a14' }}
    >
      {/* Parallax background — group scene */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-10% 0',
          backgroundImage: `url(${groupImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          zIndex: 0,
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(5,5,20,0.55) 0%, rgba(5,5,20,0.3) 40%, rgba(5,5,20,0.85) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center px-6 text-center"
        style={{ zIndex: 2, paddingTop: 140, paddingBottom: 100 }}>

        {/* Top text */}
        <div className="flex flex-col items-center" style={{ marginBottom: 60 }}>          <h2
            ref={headlineRef}
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(36px, 6vw, 80px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              marginBottom: 20,
              textShadow: '0 4px 32px rgba(0,0,0,0.5)',
            }}
          >
            Every feeling has a voice
          </h2>
          <p
            ref={subRef}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.5vw, 19px)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: 500,
            }}
          >
            Inside every mind, five emotions shape every memory, every decision, every moment.
            Which one speaks to you today?
          </p>
        </div>
      </div>
    </section>
  );
}
