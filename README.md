# Talk With EMO

An emotional intelligence web platform where users identify what they are feeling and have a conversation with an EMO — a character built around that specific emotion. Each emotion has its own personality, tone, and response style.

Built with React, TypeScript, GSAP, Tailwind CSS, and Lenis.

---

## What It Does

Users scroll through five emotion sections — Joy, Sadness, Anger, Fear, and Disgust. Each section presents the emotion with a quote and description. A "Talk to [Emotion] EMO" button opens a chat modal where the user can express themselves and receive responses tailored to that emotion's personality.

The hero section asks "What are you feeling right now?" and presents all five emotions as CTA cards, letting users jump directly to the one that resonates.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 + TypeScript | Component architecture, type safety |
| Vite | Build tooling and dev server |
| Tailwind CSS v4 | Utility-first styling |
| GSAP + ScrollTrigger | Scroll-based reveal animations |
| Lenis | Smooth scroll |
| Playfair Display | Display / headline font |
| Inter | UI / body font |
| Cormorant Garamond | CTA accent font |

---

## Project Structure

```
src/
├── components/
│   ├── CinematicApp.tsx      # Root layout — header, Lenis setup, section list
│   ├── HeroSection.tsx       # Landing section with CTA emotion cards
│   ├── EmotionSection.tsx    # Individual emotion section with scroll reveal
│   ├── ChatModal.tsx         # Chat overlay triggered by the Talk button
│   └── NavDots.tsx           # Fixed side navigation dots
├── data/
│   └── emotions.ts           # All emotion data — colors, responses, greetings
├── hooks/
│   └── useEmoChat.ts         # Chat state — messages, send, typing, reset
└── main.tsx
```

---

## Emotion Characters

Each EMO has a distinct personality reflected in its greeting, tone, and responses.

| Emotion | Personality | Color |
|---------|-------------|-------|
| Joy | Warm, affirming, celebratory | Amber `#D97706` |
| Sadness | Gentle, patient, deeply empathetic | Blue `#1D4ED8` |
| Anger | Direct, validating, no sugarcoating | Red `#B91C1C` |
| Fear | Cautious, reassuring, grounding | Violet `#6D28D9` |
| Disgust | Sharp, principled, high standards | Green `#15803D` |

---

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Adding or Editing Emotions

All emotion data lives in `src/data/emotions.ts`. Each emotion object contains:

- `greeting` — the first message EMO sends
- `responses` — keyword-matched reply pairs `[string[], string][]`
- `fallbacks` — random responses when no keyword matches
- Color tokens: `bg`, `primary`, `dark`, `mid`, `surface`, `border`

To add a new response, append to the `responses` array:

```ts
[['keyword1', 'keyword2'], 'The response text goes here.'],
```

---

## Design Decisions

- Playfair Display is used for all emotional/display text — emotion names, headlines, quotes — to give them weight and personality
- Inter handles all UI text — labels, buttons, chat messages — for clarity and readability
- Each emotion section uses its own light-tinted background palette so the color shift is immediately felt as you scroll
- The chat is a modal, not an inline panel, so the scroll experience stays clean and uninterrupted
- No icons or emojis anywhere in the UI — the design relies entirely on typography and color

---

## Author

Built by [MNSBaanu](https://github.com/MNSBaanu)
