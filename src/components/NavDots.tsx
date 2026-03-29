import { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Emotion } from '../data/emotions';

interface Props { emotions: Emotion[]; }

export default function NavDots({ emotions }: Props) {
  const [active, setActive] = useState(-1); // -1 = hero

  useEffect(() => {
    // Hero trigger
    const heroTrigger = ScrollTrigger.create({
      trigger: '#hero',
      start: 'top 50%', end: 'bottom 50%',
      onEnter: () => setActive(-1),
      onEnterBack: () => setActive(-1),
    });

    const triggers = emotions.map((e, i) =>
      ScrollTrigger.create({
        trigger: `#emotion-${e.id}`,
        start: 'top 50%', end: 'bottom 50%',
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      })
    );

    return () => {
      heroTrigger.kill();
      triggers.forEach(t => t.kill());
    };
  }, [emotions]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className="fixed right-7 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 items-end">
      {/* Hero dot */}
      <button
        onClick={() => scrollTo('hero')}
        aria-label="Go to Hero"
        className="flex items-center gap-2 group"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        <span className="text-xs font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-slate-500">
          Home
        </span>
        <div className="rounded-full transition-all duration-300"
          style={{
            width: active === -1 ? 10 : 6,
            height: active === -1 ? 10 : 6,
            background: active === -1 ? '#0F172A' : '#CBD5E1',
          }} />
      </button>

      {emotions.map((e, i) => (
        <button
          key={e.id}
          onClick={() => scrollTo(`emotion-${e.id}`)}
          aria-label={`Go to ${e.name}`}
          className="flex items-center gap-2 group"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ color: e.mid }}>
            {e.name}
          </span>
          <div className="rounded-full transition-all duration-300"
            style={{
              width: active === i ? 10 : 6,
              height: active === i ? 10 : 6,
              background: active === i ? e.primary : `${e.primary}55`,
            }} />        </button>
      ))}
    </nav>
  );
}
