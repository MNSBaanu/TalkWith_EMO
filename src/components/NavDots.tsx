import { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Emotion } from '../data/emotions';

interface Props {
  emotions: Emotion[];
}

export default function NavDots({ emotions }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const triggers = emotions.map((e, i) => {
      return ScrollTrigger.create({
        trigger: `#emotion-${e.id}`,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      });
    });
    return () => triggers.forEach(t => t.kill());
  }, [emotions]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(`emotion-${id}`);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {emotions.map((e, i) => (
        <button
          key={e.id}
          onClick={() => scrollTo(e.id)}
          title={e.name}
          aria-label={`Go to ${e.name}`}
          className="flex items-center gap-3 group"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          {/* Label — shows on hover */}
          <span
            className="text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ color: e.color }}
          >
            {e.name}
          </span>
          {/* Dot */}
          <div
            className="rounded-full transition-all duration-300"
            style={{
              width: active === i ? 10 : 6,
              height: active === i ? 10 : 6,
              background: active === i ? e.color : `${e.color}44`,
            }}
          />
        </button>
      ))}
    </nav>
  );
}
