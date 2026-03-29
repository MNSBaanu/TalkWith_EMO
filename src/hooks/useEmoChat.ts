import { useState, useCallback } from 'react';
import type { Emotion } from '../data/emotions';

export interface Message { role: 'emo' | 'user'; text: string; }

export function useEmoChat(emotion: Emotion) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'emo', text: emotion.greeting },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const getResponse = useCallback((userText: string): string => {
    const lower = userText.toLowerCase();
    for (const [keywords, response] of emotion.responses) {
      if (keywords.some(k => lower.includes(k))) return response;
    }
    return emotion.fallbacks[Math.floor(Math.random() * emotion.fallbacks.length)];
  }, [emotion]);

  const send = useCallback(() => {
    const text = input.trim();
    if (!text) return;
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'emo', text: getResponse(text) }]);
      setTyping(false);
    }, 900 + Math.random() * 500);
  }, [input, getResponse]);

  const reset = useCallback(() => {
    setMessages([{ role: 'emo', text: emotion.greeting }]);
    setInput('');
    setTyping(false);
  }, [emotion]);

  return { messages, input, setInput, send, typing, reset };
}
