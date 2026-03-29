import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { Emotion } from '../data/emotions';
import { useEmoChat } from '../hooks/useEmoChat';

interface Props {
  emotion: Emotion;
  onClose: () => void;
}

export default function ChatModal({ emotion, onClose }: Props) {
  const { messages, input, setInput, send, typing, reset } = useEmoChat(emotion);
  const overlayRef  = useRef<HTMLDivElement>(null);
  const drawerRef   = useRef<HTMLDivElement>(null);
  const bottomRef   = useRef<HTMLDivElement>(null);
  const inputRef    = useRef<HTMLInputElement>(null);

  // Animate in
  useEffect(() => {
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25 });
    gsap.fromTo(drawerRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, ease: 'power3.out' });
    inputRef.current?.focus();
  }, []);

  // Auto-scroll messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const handleClose = () => {
    gsap.to(drawerRef.current, { y: 30, opacity: 0, duration: 0.25, ease: 'power2.in' });
    gsap.to(overlayRef.current, {
      opacity: 0, duration: 0.25,
      onComplete: onClose,
    });
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
    if (e.key === 'Escape') handleClose();
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(15,23,42,0.45)', backdropFilter: 'blur(4px)' }}
      onClick={e => { if (e.target === overlayRef.current) handleClose(); }}
    >
      <div
        ref={drawerRef}
        className="w-full max-w-lg flex flex-col rounded-2xl overflow-hidden"
        style={{
          height: 560,
          background: '#FFFFFF',
          border: `1.5px solid ${emotion.border}`,
          boxShadow: '0 24px 64px rgba(0,0,0,0.12)',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 flex-shrink-0"
          style={{ background: emotion.surface, borderBottom: `1px solid ${emotion.border}` }}
        >
          <div>
            <p className="font-bold text-sm" style={{ color: emotion.dark, fontFamily: "'Inter', sans-serif" }}>
              {emotion.name} — EMO
            </p>
            <p className="text-xs mt-0.5" style={{ color: emotion.mid, opacity: 0.7, fontFamily: "'Inter', sans-serif" }}>
              {typing ? 'Responding...' : 'Ready to listen'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={reset}
              className="text-xs font-medium px-3 py-1.5 rounded-lg transition-opacity duration-200 hover:opacity-70"
              style={{ background: emotion.border, color: emotion.dark }}
            >
              New conversation
            </button>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-opacity duration-200 hover:opacity-70"
              style={{ background: emotion.border, color: emotion.dark }}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3 min-h-0">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'emo' && (
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mr-2 mt-1"
                  style={{ background: emotion.surface, color: emotion.primary, border: `1px solid ${emotion.border}` }}
                >
                  {emotion.name[0]}
                </div>
              )}
              <div
                className="max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed"
                style={
                  msg.role === 'emo'
                    ? { background: emotion.surface, color: emotion.dark, borderBottomLeftRadius: 4, border: `1px solid ${emotion.border}`, fontFamily: "'Inter', sans-serif" }
                    : { background: emotion.primary, color: '#fff', borderBottomRightRadius: 4, fontFamily: "'Inter', sans-serif" }
                }
              >
                {msg.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mr-2 mt-1"
                style={{ background: emotion.surface, color: emotion.primary, border: `1px solid ${emotion.border}` }}
              >
                {emotion.name[0]}
              </div>
              <div
                className="px-4 py-3 rounded-2xl flex items-center gap-1.5"
                style={{ background: emotion.surface, border: `1px solid ${emotion.border}`, borderBottomLeftRadius: 4 }}
              >
                {[0, 1, 2].map(i => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full"
                    style={{ background: emotion.primary, animation: 'typingDot 1.2s ease-in-out infinite', animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div
          className="flex items-center gap-2 px-4 py-3 flex-shrink-0"
          style={{ borderTop: `1px solid ${emotion.border}`, background: '#FAFAFA' }}
        >
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder="Share what you are feeling..."
            className="flex-1 rounded-xl px-4 py-2.5 text-sm outline-none text-slate-800"
            style={{ background: '#FFFFFF', border: `1.5px solid ${emotion.border}` }}
            aria-label={`Message ${emotion.name} EMO`}
          />
          <button
            onClick={send}
            disabled={!input.trim()}
            className="px-5 h-10 rounded-xl text-sm font-semibold transition-opacity duration-200 hover:opacity-90 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ background: emotion.primary, color: '#fff' }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
