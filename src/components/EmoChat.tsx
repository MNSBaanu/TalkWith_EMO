import { useEffect, useRef } from 'react';
import type { Emotion } from '../data/emotions';
import { useEmoChat } from '../hooks/useEmoChat';

interface Props { emotion: Emotion; }

export default function EmoChat({ emotion }: Props) {
  const { messages, input, setInput, send, typing, reset } = useEmoChat(emotion);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <div
      className="flex flex-col h-full rounded-2xl overflow-hidden"
      style={{ background: '#FFFFFF', border: `1.5px solid ${emotion.border}` }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4 flex-shrink-0"
        style={{ background: emotion.surface, borderBottom: `1px solid ${emotion.border}` }}
      >
        <div>
          <p className="font-bold text-sm" style={{ color: emotion.dark }}>
            {emotion.name} — EMO
          </p>
          <p className="text-xs mt-0.5" style={{ color: emotion.mid, opacity: 0.7 }}>
            {typing ? 'Responding...' : 'Ready to listen'}
          </p>
        </div>
        <button
          onClick={reset}
          className="text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:opacity-80"
          style={{ background: emotion.border, color: emotion.dark }}
          aria-label="New conversation"
        >
          New conversation
        </button>
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
                  ? { background: emotion.surface, color: emotion.dark, borderBottomLeftRadius: 4, border: `1px solid ${emotion.border}` }
                  : { background: emotion.primary, color: '#ffffff', borderBottomRightRadius: 4 }
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
          className="px-5 h-10 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{ background: emotion.primary, color: '#fff' }}
          aria-label="Send"
        >
          Send
        </button>
      </div>
    </div>
  );
}
