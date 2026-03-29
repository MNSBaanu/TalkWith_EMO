export interface Emotion {
  id: string;
  name: string;
  subtitle: string;
  quote: string;
  color: string;       // primary solid color
  colorDark: string;   // dark text color
  colorMid: string;    // medium shade
  colorBg: string;     // light section background
  colorTint: string;   // very light tint for cards/tags
  colorBorder: string; // border color
  features: Feature[];
  shapes: Shape[];
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface Shape {
  type: 'circle' | 'ring' | 'square' | 'triangle' | 'dot';
  size: number;
  x: number;           // % from left
  y: number;           // % from top
  layer: 0 | 1 | 2;
  opacity: number;
}

export const EMOTIONS: Emotion[] = [
  {
    id: 'joy',
    name: 'JOY',
    subtitle: 'The spark that lights everything',
    quote: '"Happiness is not something ready-made. It comes from your own actions."',
    color: '#F59E0B',
    colorDark: '#78350F',
    colorMid: '#B45309',
    colorBg: '#FFFBEB',
    colorTint: '#FEF3C7',
    colorBorder: '#FDE68A',
    features: [
      { icon: '☀️', title: 'Radiant Energy',    desc: 'Joy floods every cell with warmth, turning ordinary moments into golden memories.' },
      { icon: '🎉', title: 'Celebration',        desc: 'It turns milestones into festivals and small wins into reasons to dance.' },
      { icon: '💛', title: 'Connection',         desc: 'Joy is contagious — it pulls people together and builds unbreakable bonds.' },
      { icon: '✨', title: 'Creative Spark',     desc: 'The happiest minds are the most inventive. Joy unlocks imagination.' },
    ],
    shapes: [
      { type: 'circle', size: 420, x: 78, y: 18, layer: 0, opacity: 0.12 },
      { type: 'circle', size: 260, x: 12, y: 65, layer: 0, opacity: 0.08 },
      { type: 'ring',   size: 260, x: 72, y: 58, layer: 1, opacity: 0.3 },
      { type: 'ring',   size: 140, x: 22, y: 28, layer: 1, opacity: 0.22 },
      { type: 'circle', size: 70,  x: 58, y: 78, layer: 1, opacity: 0.35 },
      { type: 'dot',    size: 14,  x: 45, y: 22, layer: 2, opacity: 0.7 },
      { type: 'dot',    size: 9,   x: 82, y: 42, layer: 2, opacity: 0.6 },
      { type: 'dot',    size: 18,  x: 18, y: 72, layer: 2, opacity: 0.5 },
      { type: 'dot',    size: 11,  x: 55, y: 88, layer: 2, opacity: 0.65 },
      { type: 'square', size: 55,  x: 88, y: 62, layer: 2, opacity: 0.25 },
    ],
  },
  {
    id: 'sadness',
    name: 'SADNESS',
    subtitle: 'The depth that makes us human',
    quote: '"Tears are words the heart cannot express."',
    color: '#3B82F6',
    colorDark: '#1E3A8A',
    colorMid: '#1D4ED8',
    colorBg: '#EFF6FF',
    colorTint: '#DBEAFE',
    colorBorder: '#BFDBFE',
    features: [
      { icon: '🌧️', title: 'Deep Empathy',      desc: 'Sadness opens our hearts to others\' pain, making us truly compassionate beings.' },
      { icon: '🪞', title: 'Self-Reflection',    desc: 'In quiet sorrow, we discover who we really are and what truly matters to us.' },
      { icon: '🤝', title: 'Human Connection',   desc: 'Shared sadness dissolves barriers — it is the bridge between two lonely souls.' },
      { icon: '🌱', title: 'Inner Growth',        desc: 'Every tear waters the seeds of resilience. Sadness is how we grow stronger.' },
    ],
    shapes: [
      { type: 'circle', size: 500, x: 18, y: 12, layer: 0, opacity: 0.1 },
      { type: 'circle', size: 220, x: 82, y: 72, layer: 0, opacity: 0.08 },
      { type: 'ring',   size: 300, x: 28, y: 52, layer: 1, opacity: 0.25 },
      { type: 'ring',   size: 160, x: 78, y: 28, layer: 1, opacity: 0.2 },
      { type: 'circle', size: 55,  x: 52, y: 82, layer: 1, opacity: 0.3 },
      { type: 'dot',    size: 11,  x: 32, y: 18, layer: 2, opacity: 0.6 },
      { type: 'dot',    size: 15,  x: 68, y: 38, layer: 2, opacity: 0.55 },
      { type: 'dot',    size: 9,   x: 88, y: 62, layer: 2, opacity: 0.5 },
      { type: 'dot',    size: 13,  x: 14, y: 82, layer: 2, opacity: 0.6 },
      { type: 'ring',   size: 42,  x: 58, y: 58, layer: 2, opacity: 0.4 },
    ],
  },
  {
    id: 'anger',
    name: 'ANGER',
    subtitle: 'The fire that demands justice',
    quote: '"Speak when you are angry and you will make the best speech you will ever regret."',
    color: '#EF4444',
    colorDark: '#7F1D1D',
    colorMid: '#B91C1C',
    colorBg: '#FEF2F2',
    colorTint: '#FEE2E2',
    colorBorder: '#FECACA',
    features: [
      { icon: '🔥', title: 'Fierce Drive',       desc: 'Anger is raw fuel. Channelled right, it powers the most extraordinary achievements.' },
      { icon: '⚖️', title: 'Justice Seeker',     desc: 'Anger refuses to accept what is wrong. It is the voice of moral courage.' },
      { icon: '🛡️', title: 'Fierce Protector',  desc: 'When those we love are threatened, anger rises as an unbreakable shield.' },
      { icon: '💥', title: 'Boundary Setter',    desc: 'Anger draws the line. It teaches the world exactly how we deserve to be treated.' },
    ],
    shapes: [
      { type: 'circle', size: 460, x: 82, y: 28, layer: 0, opacity: 0.11 },
      { type: 'circle', size: 180, x: 8,  y: 78, layer: 0, opacity: 0.08 },
      { type: 'triangle', size: 180, x: 68, y: 48, layer: 1, opacity: 0.22 },
      { type: 'ring',   size: 240, x: 18, y: 38, layer: 1, opacity: 0.22 },
      { type: 'square', size: 75,  x: 78, y: 72, layer: 1, opacity: 0.25 },
      { type: 'dot',    size: 15,  x: 42, y: 22, layer: 2, opacity: 0.7 },
      { type: 'dot',    size: 11,  x: 72, y: 52, layer: 2, opacity: 0.6 },
      { type: 'dot',    size: 19,  x: 24, y: 68, layer: 2, opacity: 0.55 },
      { type: 'square', size: 28,  x: 90, y: 32, layer: 2, opacity: 0.35 },
      { type: 'dot',    size: 9,   x: 52, y: 92, layer: 2, opacity: 0.5 },
    ],
  },
  {
    id: 'fear',
    name: 'FEAR',
    subtitle: 'The guardian of survival',
    quote: '"Do the thing you fear most and the death of fear is certain."',
    color: '#8B5CF6',
    colorDark: '#3B0764',
    colorMid: '#6D28D9',
    colorBg: '#F5F3FF',
    colorTint: '#EDE9FE',
    colorBorder: '#DDD6FE',
    features: [
      { icon: '👁️', title: 'Hyper Awareness',   desc: 'Fear sharpens every sense to a razor edge, making you notice what others miss.' },
      { icon: '⚡', title: 'Instant Reflexes',   desc: 'Fear triggers lightning-fast responses that have kept humans alive for millennia.' },
      { icon: '🧭', title: 'Risk Intelligence',  desc: 'Fear calculates danger before your conscious mind even registers the threat.' },
      { icon: '🦋', title: 'Courage Catalyst',   desc: 'True bravery is not the absence of fear — it is acting despite it.' },
    ],
    shapes: [
      { type: 'circle', size: 400, x: 52, y: 52, layer: 0, opacity: 0.1 },
      { type: 'circle', size: 200, x: 88, y: 14, layer: 0, opacity: 0.08 },
      { type: 'ring',   size: 280, x: 52, y: 52, layer: 1, opacity: 0.25 },
      { type: 'ring',   size: 140, x: 18, y: 72, layer: 1, opacity: 0.2 },
      { type: 'ring',   size: 75,  x: 80, y: 38, layer: 1, opacity: 0.28 },
      { type: 'dot',    size: 9,   x: 36, y: 28, layer: 2, opacity: 0.6 },
      { type: 'dot',    size: 13,  x: 62, y: 48, layer: 2, opacity: 0.55 },
      { type: 'dot',    size: 7,   x: 82, y: 72, layer: 2, opacity: 0.5 },
      { type: 'dot',    size: 11,  x: 14, y: 58, layer: 2, opacity: 0.6 },
      { type: 'ring',   size: 48,  x: 46, y: 82, layer: 2, opacity: 0.38 },
    ],
  },
  {
    id: 'disgust',
    name: 'DISGUST',
    subtitle: 'The taste that sets standards',
    quote: '"Standards are the foundation of identity."',
    color: '#22C55E',
    colorDark: '#14532D',
    colorMid: '#15803D',
    colorBg: '#F0FDF4',
    colorTint: '#DCFCE7',
    colorBorder: '#BBF7D0',
    features: [
      { icon: '🎯', title: 'High Standards',     desc: 'Disgust refuses mediocrity. It is the relentless pursuit of quality in everything.' },
      { icon: '🧬', title: 'Identity Guard',     desc: 'Disgust protects who you are — your values, your taste, your non-negotiables.' },
      { icon: '🔍', title: 'Sharp Discernment',  desc: 'Disgust spots inauthenticity instantly. It is a finely tuned authenticity detector.' },
      { icon: '🌿', title: 'Healthy Boundaries', desc: 'Disgust knows what to let in and what to keep out. It is your personal filter.' },
    ],
    shapes: [
      { type: 'circle', size: 440, x: 22, y: 42, layer: 0, opacity: 0.1 },
      { type: 'circle', size: 160, x: 82, y: 82, layer: 0, opacity: 0.08 },
      { type: 'ring',   size: 220, x: 72, y: 32, layer: 1, opacity: 0.25 },
      { type: 'square', size: 110, x: 18, y: 62, layer: 1, opacity: 0.18 },
      { type: 'ring',   size: 95,  x: 58, y: 72, layer: 1, opacity: 0.26 },
      { type: 'dot',    size: 13,  x: 42, y: 18, layer: 2, opacity: 0.65 },
      { type: 'dot',    size: 9,   x: 78, y: 48, layer: 2, opacity: 0.55 },
      { type: 'dot',    size: 15,  x: 18, y: 78, layer: 2, opacity: 0.5 },
      { type: 'square', size: 24,  x: 62, y: 88, layer: 2, opacity: 0.35 },
      { type: 'dot',    size: 11,  x: 90, y: 22, layer: 2, opacity: 0.6 },
    ],
  },
];
