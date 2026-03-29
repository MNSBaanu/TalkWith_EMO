export interface Emotion {
  id: string;
  name: string;
  subtitle: string;
  quote: string;
  color: string;       // primary solid color
  colorDark: string;   // darker shade
  colorLight: string;  // lighter tint for text/elements
  bgColor: string;     // deep dark bg
  shapes: Shape[];
}

export interface Shape {
  type: 'circle' | 'ring' | 'square' | 'triangle' | 'dot';
  size: number;        // px
  x: number;          // % from left
  y: number;          // % from top (within layer)
  layer: 0 | 1 | 2;   // 0=bg, 1=mid, 2=fg
  opacity: number;
}

export const EMOTIONS: Emotion[] = [
  {
    id: 'joy',
    name: 'JOY',
    subtitle: 'The spark that lights everything',
    quote: '"Happiness is not something ready-made. It comes from your own actions."',
    color: '#F59E0B',
    colorDark: '#92400E',
    colorLight: '#FDE68A',
    bgColor: '#0C0800',
    shapes: [
      { type: 'circle', size: 500, x: 75, y: 20, layer: 0, opacity: 0.07 },
      { type: 'circle', size: 300, x: 15, y: 60, layer: 0, opacity: 0.05 },
      { type: 'ring',   size: 280, x: 70, y: 55, layer: 1, opacity: 0.18 },
      { type: 'ring',   size: 160, x: 25, y: 30, layer: 1, opacity: 0.14 },
      { type: 'circle', size: 80,  x: 60, y: 75, layer: 1, opacity: 0.25 },
      { type: 'dot',    size: 12,  x: 45, y: 20, layer: 2, opacity: 0.6 },
      { type: 'dot',    size: 8,   x: 80, y: 40, layer: 2, opacity: 0.5 },
      { type: 'dot',    size: 16,  x: 20, y: 70, layer: 2, opacity: 0.4 },
      { type: 'dot',    size: 10,  x: 55, y: 85, layer: 2, opacity: 0.55 },
      { type: 'square', size: 60,  x: 85, y: 65, layer: 2, opacity: 0.2 },
    ],
  },
  {
    id: 'sadness',
    name: 'SADNESS',
    subtitle: 'The depth that makes us human',
    quote: '"Tears are words the heart cannot express."',
    color: '#3B82F6',
    colorDark: '#1E3A8A',
    colorLight: '#BFDBFE',
    bgColor: '#00050F',
    shapes: [
      { type: 'circle', size: 600, x: 20, y: 10, layer: 0, opacity: 0.06 },
      { type: 'circle', size: 250, x: 80, y: 70, layer: 0, opacity: 0.05 },
      { type: 'ring',   size: 320, x: 30, y: 50, layer: 1, opacity: 0.15 },
      { type: 'ring',   size: 180, x: 75, y: 25, layer: 1, opacity: 0.12 },
      { type: 'circle', size: 60,  x: 50, y: 80, layer: 1, opacity: 0.2 },
      { type: 'dot',    size: 10,  x: 30, y: 15, layer: 2, opacity: 0.5 },
      { type: 'dot',    size: 14,  x: 65, y: 35, layer: 2, opacity: 0.45 },
      { type: 'dot',    size: 8,   x: 85, y: 60, layer: 2, opacity: 0.4 },
      { type: 'dot',    size: 12,  x: 15, y: 80, layer: 2, opacity: 0.5 },
      { type: 'ring',   size: 40,  x: 55, y: 55, layer: 2, opacity: 0.35 },
    ],
  },
  {
    id: 'anger',
    name: 'ANGER',
    subtitle: 'The fire that demands justice',
    quote: '"Speak when you are angry and you will make the best speech you will ever regret."',
    color: '#EF4444',
    colorDark: '#7F1D1D',
    colorLight: '#FECACA',
    bgColor: '#0F0000',
    shapes: [
      { type: 'circle', size: 550, x: 80, y: 30, layer: 0, opacity: 0.07 },
      { type: 'circle', size: 200, x: 10, y: 75, layer: 0, opacity: 0.05 },
      { type: 'triangle', size: 200, x: 65, y: 45, layer: 1, opacity: 0.15 },
      { type: 'ring',   size: 260, x: 20, y: 35, layer: 1, opacity: 0.14 },
      { type: 'square', size: 80,  x: 75, y: 70, layer: 1, opacity: 0.18 },
      { type: 'dot',    size: 14,  x: 40, y: 20, layer: 2, opacity: 0.6 },
      { type: 'dot',    size: 10,  x: 70, y: 50, layer: 2, opacity: 0.5 },
      { type: 'dot',    size: 18,  x: 25, y: 65, layer: 2, opacity: 0.45 },
      { type: 'square', size: 30,  x: 88, y: 30, layer: 2, opacity: 0.3 },
      { type: 'dot',    size: 8,   x: 50, y: 90, layer: 2, opacity: 0.4 },
    ],
  },
  {
    id: 'fear',
    name: 'FEAR',
    subtitle: 'The guardian of survival',
    quote: '"Do the thing you fear most and the death of fear is certain."',
    color: '#8B5CF6',
    colorDark: '#3B0764',
    colorLight: '#DDD6FE',
    bgColor: '#04000F',
    shapes: [
      { type: 'circle', size: 480, x: 50, y: 50, layer: 0, opacity: 0.06 },
      { type: 'circle', size: 220, x: 85, y: 15, layer: 0, opacity: 0.05 },
      { type: 'ring',   size: 300, x: 50, y: 50, layer: 1, opacity: 0.16 },
      { type: 'ring',   size: 150, x: 20, y: 70, layer: 1, opacity: 0.13 },
      { type: 'ring',   size: 80,  x: 78, y: 35, layer: 1, opacity: 0.2 },
      { type: 'dot',    size: 8,   x: 35, y: 25, layer: 2, opacity: 0.5 },
      { type: 'dot',    size: 12,  x: 60, y: 45, layer: 2, opacity: 0.45 },
      { type: 'dot',    size: 6,   x: 80, y: 70, layer: 2, opacity: 0.4 },
      { type: 'dot',    size: 10,  x: 15, y: 55, layer: 2, opacity: 0.5 },
      { type: 'ring',   size: 50,  x: 45, y: 80, layer: 2, opacity: 0.3 },
    ],
  },
  {
    id: 'disgust',
    name: 'DISGUST',
    subtitle: 'The taste that sets standards',
    quote: '"Standards are the foundation of identity."',
    color: '#22C55E',
    colorDark: '#14532D',
    colorLight: '#BBF7D0',
    bgColor: '#000F04',
    shapes: [
      { type: 'circle', size: 520, x: 25, y: 40, layer: 0, opacity: 0.06 },
      { type: 'circle', size: 180, x: 80, y: 80, layer: 0, opacity: 0.05 },
      { type: 'ring',   size: 240, x: 70, y: 30, layer: 1, opacity: 0.16 },
      { type: 'square', size: 120, x: 20, y: 60, layer: 1, opacity: 0.12 },
      { type: 'ring',   size: 100, x: 55, y: 70, layer: 1, opacity: 0.18 },
      { type: 'dot',    size: 12,  x: 40, y: 15, layer: 2, opacity: 0.55 },
      { type: 'dot',    size: 8,   x: 75, y: 45, layer: 2, opacity: 0.45 },
      { type: 'dot',    size: 14,  x: 20, y: 75, layer: 2, opacity: 0.4 },
      { type: 'square', size: 25,  x: 60, y: 85, layer: 2, opacity: 0.3 },
      { type: 'dot',    size: 10,  x: 88, y: 20, layer: 2, opacity: 0.5 },
    ],
  },
];
