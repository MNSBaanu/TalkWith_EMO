import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import stripeImg from '../assets/emotions-stripe.jpg';
import { EMOTIONS } from '../data/emotions';

gsap.registerPlugin(ScrollTrigger);

const QUESTIONS = [
  {
    q: 'How does your body feel right now?',
    options: [
      { label: 'Light & energized', scores: { joy: 3, sadness: 0, anger: 0, fear: 0, disgust: 0 } },
      { label: 'Heavy & slow', scores: { joy: 0, sadness: 3, anger: 0, fear: 0, disgust: 0 } },
      { label: 'Tense & hot', scores: { joy: 0, sadness: 0, anger: 3, fear: 1, disgust: 1 } },
      { label: 'Shaky & restless', scores: { joy: 0, sadness: 0, anger: 1, fear: 3, disgust: 0 } },
      { label: 'Uneasy & unsettled', scores: { joy: 0, sadness: 1, anger: 1, fear: 1, disgust: 3 } },
    ],
  },
  {
    q: "What's going through your mind most?",
    options: [
      { label: 'Good memories or excitement', scores: { joy: 3, sadness: 0, anger: 0, fear: 0, disgust: 0 } },
      { label: 'Loss or missing someone', scores: { joy: 0, sadness: 3, anger: 0, fear: 0, disgust: 0 } },
      { label: 'Something unfair or frustrating', scores: { joy: 0, sadness: 0, anger: 3, fear: 0, disgust: 1 } },
      { label: 'Worst case scenarios', scores: { joy: 0, sadness: 0, anger: 0, fear: 3, disgust: 0 } },
      { label: 'Something that feels wrong or off', scores: { joy: 0, sadness: 0, anger: 1, fear: 0, disgust: 3 } },
    ],
  },
  {
    q: "What do you most want right now?",
    options: [
      { label: 'To celebrate or share joy', scores: { joy: 3, sadness: 0, anger: 0, fear: 0, disgust: 0 } },
      { label: 'To be heard and comforted', scores: { joy: 0, sadness: 3, anger: 0, fear: 1, disgust: 0 } },
      { label: 'To vent and be validated', scores: { joy: 0, sadness: 0, anger: 3, fear: 0, disgust: 1 } },
      { label: 'To feel safe and reassured', scores: { joy: 0, sadness: 1, anger: 0, fear: 3, disgust: 0 } },
      { label: 'To set a boundary or say no', scores: { joy: 0, sadness: 0, anger: 1, fear: 0, disgust: 3 } },
    ],
  },
];

type ScoreMap = { joy: number; sadness: number; anger: number; fear: number; disgust: number };

function getResult(scores: ScoreMap) {
  return (Object.keys(scores) as (keyof ScoreMap)[]).reduce((a, b) => scores[a] >= scores[b] ? a : b);
}

export default function FindEmotionSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const bgRef       = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);

  const [quizOpen, setQuizOpen]   = useState(false);
  const [step, setStep]           = useState(0);
  const [scores, setScores]       = useState<ScoreMap>({ joy: 0, sadness: 0, anger: 0, fear: 0, disgust: 0 });
  const [result, setResult]       = useState<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        y: 80, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
      });
      const st = { trigger: section, start: 'top 70%', toggleActions: 'play none none reverse' };
      gsap.fromTo(headlineRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', scrollTrigger: st });
      gsap.fromTo(subRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.15, scrollTrigger: st });
    }, section);
    return () => ctx.revert();
  }, []);

  const handleAnswer = (optionScores: ScoreMap) => {
    const updated = { ...scores };
    (Object.keys(optionScores) as (keyof ScoreMap)[]).forEach(k => { updated[k] += optionScores[k]; });
    if (step < QUESTIONS.length - 1) {
      setScores(updated);
      setStep(step + 1);
    } else {
      setResult(getResult(updated));
    }
  };

  const resetQuiz = () => { setStep(0); setScores({ joy: 0, sadness: 0, anger: 0, fear: 0, disgust: 0 }); setResult(null); };

  const resultEmotion = EMOTIONS.find(e => e.id === result);

  return (
    <>
      <section
        ref={sectionRef}
        id="find-emotion"
        className="relative w-full overflow-hidden"
        style={{ minHeight: '100vh' }}
      >
        <div ref={bgRef} style={{
          position: 'absolute', inset: '-10% 0',
          backgroundImage: `url(${stripeImg})`,
          backgroundSize: 'cover', backgroundPosition: 'center center', zIndex: 0,
        }} />

        {/* Content — top right */}
        <div className="relative flex flex-col items-end px-16 text-right"
          style={{ zIndex: 2, paddingTop: 100, maxWidth: 560, marginLeft: 'auto' }}>

          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 11,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)', marginBottom: 16,
          }}>
            Not sure how you feel?
          </p>

          <h2 ref={headlineRef} style={{
            fontFamily: "'Sora', sans-serif", fontWeight: 800,
            fontSize: 'clamp(32px, 5.5vw, 68px)',
            lineHeight: 1.05, letterSpacing: '-0.03em',
            color: '#FFFFFF', marginBottom: 16,
            textShadow: '0 4px 32px rgba(0,0,0,0.5)',
          }}>
            Find your<br />emotion
          </h2>

          <p ref={subRef} style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
            fontSize: 'clamp(14px, 1.3vw, 17px)', lineHeight: 1.7,
            color: 'rgba(255,255,255,0.75)', maxWidth: 340, marginBottom: 32,
          }}>
            Answer 3 quick questions and we'll match you with the emotion that understands you best right now.
          </p>

          <button
            onClick={() => { resetQuiz(); setQuizOpen(true); }}
            style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
              color: '#0F172A', background: '#FFFFFF', border: 'none',
              borderRadius: 50, padding: '14px 36px', cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)'; }}
          >
            Discover my emotion →
          </button>
        </div>
      </section>

      {/* Quiz Modal */}
      {quizOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: 'rgba(5,5,20,0.75)', backdropFilter: 'blur(8px)' }}
          onClick={e => { if (e.currentTarget === e.target) { setQuizOpen(false); resetQuiz(); } }}
        >
          <div style={{
            background: '#FFFFFF', borderRadius: 24, width: '100%', maxWidth: 520,
            padding: '40px 40px 36px', boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
          }}>
            {!result ? (
              <>
                {/* Progress */}
                <div className="flex gap-2 mb-8">
                  {QUESTIONS.map((_, i) => (
                    <div key={i} style={{
                      flex: 1, height: 3, borderRadius: 2,
                      background: i <= step ? '#0F172A' : '#E2E8F0',
                      transition: 'background 0.3s',
                    }} />
                  ))}
                </div>

                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 12 }}>
                  Question {step + 1} of {QUESTIONS.length}
                </p>

                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: '#0F172A', marginBottom: 28, lineHeight: 1.3 }}>
                  {QUESTIONS[step].q}
                </h3>

                <div className="flex flex-col gap-3">
                  {QUESTIONS[step].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt.scores as ScoreMap)}
                      style={{
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 15,
                        color: '#0F172A', background: '#F8FAFC',
                        border: '1.5px solid #E2E8F0', borderRadius: 12,
                        padding: '14px 20px', cursor: 'pointer', textAlign: 'left',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#0F172A'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#0F172A'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#F8FAFC'; e.currentTarget.style.color = '#0F172A'; e.currentTarget.style.borderColor = '#E2E8F0'; }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              /* Result */
              <div className="flex flex-col items-center text-center">
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 16 }}>
                  You're feeling
                </p>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 56, color: resultEmotion?.primary, marginBottom: 8, lineHeight: 1 }}>
                  {resultEmotion?.name}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 13, color: resultEmotion?.mid, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>
                  {resultEmotion?.subtitle}
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontStyle: 'italic', fontSize: 15, color: '#64748B', maxWidth: 360, lineHeight: 1.7, marginBottom: 32 }}>
                  "{resultEmotion?.quote}"
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => { setQuizOpen(false); resetQuiz(); document.getElementById(`emotion-${result}`)?.scrollIntoView({ behavior: 'smooth' }); }}
                    style={{
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
                      color: '#fff', background: resultEmotion?.primary, border: 'none',
                      borderRadius: 50, padding: '13px 28px', cursor: 'pointer',
                    }}
                  >
                    Talk to {resultEmotion?.name} EMO →
                  </button>
                  <button
                    onClick={resetQuiz}
                    style={{
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14,
                      color: '#64748B', background: '#F1F5F9', border: 'none',
                      borderRadius: 50, padding: '13px 24px', cursor: 'pointer',
                    }}
                  >
                    Retake
                  </button>
                </div>
              </div>
            )}

            {/* Close */}
            <button
              onClick={() => { setQuizOpen(false); resetQuiz(); }}
              style={{
                position: 'absolute' as const, top: 20, right: 20,
                background: '#F1F5F9', border: 'none', borderRadius: 8,
                width: 32, height: 32, cursor: 'pointer', fontSize: 14, color: '#64748B',
              }}
            >✕</button>
          </div>
        </div>
      )}
    </>
  );
}
