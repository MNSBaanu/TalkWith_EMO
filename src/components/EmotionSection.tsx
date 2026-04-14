import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Emotion } from '../data/emotions';
import ChatModal from './ChatModal';
import joyImg from '../assets/joy.png';
import sadImg from '../assets/sad.png';
import angerImg from '../assets/anger.png';
import fearImg from '../assets/Fear.png';
import disgustImg from '../assets/Disgust.png';

gsap.registerPlugin(ScrollTrigger);

interface Props { emotion: Emotion; index: number; }

export default function EmotionSection({ emotion, index }: Props) {
  const sectionRef    = useRef<HTMLElement>(null);
  const numRef        = useRef<HTMLSpanElement>(null);
  const titleRef      = useRef<HTMLHeadingElement>(null);
  const subRef        = useRef<HTMLParagraphElement>(null);
  const quoteRef      = useRef<HTMLParagraphElement>(null);
  const btnRef        = useRef<HTMLButtonElement>(null);
  const contentRef    = useRef<HTMLDivElement>(null);
  const bgLayerRef    = useRef<HTMLDivElement>(null);
  const orbRef        = useRef<HTMLDivElement>(null);
  const joyImgRef     = useRef<HTMLImageElement>(null);
  const sadImgRef     = useRef<HTMLImageElement>(null);
  const angerImgRef   = useRef<HTMLImageElement>(null);
  const fearImgRef    = useRef<HTMLImageElement>(null);
  const disgustImgRef = useRef<HTMLImageElement>(null);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      const st = { trigger: section, start: 'top 75%', toggleActions: 'play none none reverse' };

      gsap.fromTo(numRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: st });
      gsap.fromTo(titleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power4.out', delay: 0.15, scrollTrigger: st });
      gsap.fromTo([subRef.current, quoteRef.current, btnRef.current], { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.28, scrollTrigger: st });

      gsap.to(numRef.current, { y: -80, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1.2 } });
      gsap.to(contentRef.current, { y: -40, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 2 } });
      gsap.to(orbRef.current, { y: -160, x: index % 2 === 0 ? 60 : -60, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1.8 } });
      gsap.fromTo(bgLayerRef.current, { scale: 1.06 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'top top', scrub: true } });

      if (emotion.id === 'joy' && joyImgRef.current) gsap.to(joyImgRef.current, { y: 80, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1.5 } });
      if (emotion.id === 'sadness' && sadImgRef.current) gsap.to(sadImgRef.current, { y: -60, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1.5 } });
      if (emotion.id === 'anger' && angerImgRef.current) gsap.to(angerImgRef.current, { y: -50, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1.5 } });
      if (emotion.id === 'fear' && fearImgRef.current) gsap.to(fearImgRef.current, { y: -50, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1.5 } });
      if (emotion.id === 'disgust' && disgustImgRef.current) gsap.to(disgustImgRef.current, { y: -50, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1.5 } });
    }, section);
    return () => ctx.revert();
  }, [emotion.id, index]);

  const isLeft = ['joy', 'anger', 'disgust'].includes(emotion.id);

  return (
    <>
      <section
        ref={sectionRef}
        id={`emotion-${emotion.id}`}
        className="relative w-full flex items-center overflow-hidden"
        style={{ minHeight: '100vh', backgroundColor: emotion.bg, borderBottom: `1px solid ${emotion.border}` }}
      >
        <div ref={bgLayerRef} className="absolute inset-0 pointer-events-none" style={{ backgroundColor: emotion.bg }} />

        <div ref={orbRef} className="absolute pointer-events-none"
          style={{ width: 600, height: 600, borderRadius: '50%', top: index % 2 === 0 ? '-15%' : 'auto', bottom: index % 2 !== 0 ? '-15%' : 'auto', right: index % 2 === 0 ? '-10%' : 'auto', left: index % 2 !== 0 ? '-10%' : 'auto', background: `radial-gradient(circle, ${emotion.surface} 0%, transparent 70%)`, opacity: 0.9 }} />

        {/* Character images — hidden on mobile */}
        {emotion.id === 'joy' && (
          <img ref={joyImgRef} src={joyImg} alt="Joy" className="hidden sm:block"
            style={{ position: 'absolute', top: '-6%', left: '8%', width: 'clamp(220px, 44vw, 620px)', pointerEvents: 'none', zIndex: 5, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.12))' }} />
        )}
        {emotion.id === 'sadness' && (
          <img ref={sadImgRef} src={sadImg} alt="Sadness" className="hidden sm:block"
            style={{ position: 'absolute', bottom: '-4%', right: '0', width: 'clamp(200px, 42vw, 580px)', pointerEvents: 'none', zIndex: 5, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.12))' }} />
        )}
        {emotion.id === 'anger' && (
          <img ref={angerImgRef} src={angerImg} alt="Anger" className="hidden sm:block"
            style={{ position: 'absolute', bottom: '-8%', left: '5%', width: 'clamp(200px, 42vw, 600px)', pointerEvents: 'none', zIndex: 5, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.12))', objectFit: 'contain', objectPosition: 'bottom' }} />
        )}
        {emotion.id === 'fear' && (
          <img ref={fearImgRef} src={fearImg} alt="Fear" className="hidden sm:block"
            style={{ position: 'absolute', bottom: '-8%', right: '5%', width: 'clamp(200px, 42vw, 600px)', pointerEvents: 'none', zIndex: 5, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.12))', objectFit: 'contain', objectPosition: 'bottom' }} />
        )}
        {emotion.id === 'disgust' && (
          <img ref={disgustImgRef} src={disgustImg} alt="Disgust" className="hidden sm:block"
            style={{ position: 'absolute', bottom: '-8%', left: '5%', width: 'clamp(200px, 42vw, 600px)', pointerEvents: 'none', zIndex: 5, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.12))', objectFit: 'contain', objectPosition: 'bottom' }} />
        )}

        {/* Content */}
        <div
          ref={contentRef}
          className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-24"
          style={{
            maxWidth: '56rem',
            marginLeft: isLeft ? 'auto' : undefined,
            paddingLeft: isLeft ? undefined : undefined,
          }}
        >
          <span ref={numRef} className="block select-none leading-none"
            style={{ fontSize: 'clamp(48px, 10vw, 120px)', color: emotion.primary, opacity: 0.08, marginLeft: '-0.04em', lineHeight: 1, fontFamily: "'Sora', sans-serif", fontWeight: 800 }}>
            {String(index + 1).padStart(2, '0')}
          </span>

          <h2 ref={titleRef} className="leading-none tracking-tight"
            style={{ fontSize: 'clamp(36px, 6vw, 80px)', color: emotion.dark, marginBottom: 14, fontFamily: "'Sora', sans-serif", fontWeight: 800 }}>
            {emotion.name}
          </h2>

          <p ref={subRef} className="font-semibold tracking-widest uppercase mb-5"
            style={{ fontSize: 'clamp(9px, 1.1vw, 12px)', color: emotion.mid, letterSpacing: '0.22em', fontFamily: "'DM Sans', sans-serif" }}>
            {emotion.subtitle}
          </p>

          <p ref={quoteRef} className="leading-relaxed mb-8"
            style={{ fontSize: 'clamp(13px, 1.4vw, 18px)', color: emotion.mid, opacity: 0.8, maxWidth: 480, fontFamily: "'Sora', sans-serif", fontStyle: 'italic', fontWeight: 400 }}>
            "{emotion.quote}"
          </p>

          <button
            ref={btnRef}
            onClick={() => setChatOpen(true)}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-sm tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: emotion.primary, color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
          >
            Talk to {emotion.name} EMO
            <span style={{ fontSize: 15, opacity: 0.8 }}>→</span>
          </button>
        </div>

        {['joy', 'sadness', 'anger', 'fear'].includes(emotion.id) && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
            <span className="text-xs font-medium tracking-[0.25em] uppercase" style={{ color: emotion.mid, opacity: 0.4 }}>Scroll</span>
            <div className="relative w-px h-8 overflow-hidden" style={{ background: emotion.border }}>
              <div className="absolute top-0 left-0 w-full animate-scrollLine" style={{ height: '40%', background: emotion.primary }} />
            </div>
          </div>
        )}
      </section>

      {chatOpen && <ChatModal emotion={emotion} onClose={() => setChatOpen(false)} />}
    </>
  );
}
