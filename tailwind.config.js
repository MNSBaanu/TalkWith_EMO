/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dreamer: {
          purple: '#8B5CF6',
          pink: '#EC4899',
          blue: '#3B82F6',
          gold: '#F59E0B',
        }
      },
      fontFamily: {
        'dreamer': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}