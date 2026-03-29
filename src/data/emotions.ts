export interface Emotion {
  id: string;
  name: string;
  subtitle: string;
  quote: string;
  // Light theme colors
  bg: string;          // solid light background
  primary: string;     // rich solid accent color
  dark: string;        // dark text color
  mid: string;         // medium text / secondary elements
  light: string;       // lightest tint for bg shapes
}

export const EMOTIONS: Emotion[] = [
  {
    id: 'joy',
    name: 'JOY',
    subtitle: 'The spark that lights everything',
    quote: '"Happiness is not something ready-made. It comes from your own actions."',
    bg: '#FFFBEB',
    primary: '#F59E0B',
    dark: '#78350F',
    mid: '#B45309',
    light: '#FDE68A',
  },
  {
    id: 'sadness',
    name: 'SADNESS',
    subtitle: 'The depth that makes us human',
    quote: '"Tears are words the heart cannot express."',
    bg: '#EFF6FF',
    primary: '#3B82F6',
    dark: '#1E3A8A',
    mid: '#1D4ED8',
    light: '#BFDBFE',
  },
  {
    id: 'anger',
    name: 'ANGER',
    subtitle: 'The fire that demands justice',
    quote: '"Speak when you are angry and you will make the best speech you will ever regret."',
    bg: '#FEF2F2',
    primary: '#EF4444',
    dark: '#7F1D1D',
    mid: '#B91C1C',
    light: '#FECACA',
  },
  {
    id: 'fear',
    name: 'FEAR',
    subtitle: 'The guardian of survival',
    quote: '"Do the thing you fear most and the death of fear is certain."',
    bg: '#F5F3FF',
    primary: '#8B5CF6',
    dark: '#3B0764',
    mid: '#6D28D9',
    light: '#DDD6FE',
  },
  {
    id: 'disgust',
    name: 'DISGUST',
    subtitle: 'The taste that sets standards',
    quote: '"Standards are the foundation of identity."',
    bg: '#F0FDF4',
    primary: '#22C55E',
    dark: '#14532D',
    mid: '#15803D',
    light: '#BBF7D0',
  },
];
