# Talk With EMO

An emotional intelligence web platform where users identify what they are feeling and have a conversation with an EMO — a character built around that specific emotion. Each emotion has its own personality, tone, and response style.

Built with React, TypeScript, GSAP, Tailwind CSS, and Lenis.

---

## What It Does

Scroll through a cinematic, parallax-driven experience across six sections:

- **Hero** — Split layout with the full cast of characters and a direct CTA to start exploring
- **Meet the Emotions** — Full-screen cinematic intro with the group scene and a bold headline
- **Five Emotion Sections** — Joy, Sadness, Anger, Fear, and Disgust each get their own full-viewport section with character art, parallax animations, a quote, and a chat button
- **Find Your Emotion** — A closing section with a 3-question quiz that identifies which emotion best matches how you feel right now, then routes you directly to that EMO's chat

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 + TypeScript | Component architecture, type safety |
| Vite | Build tooling and dev server |
| Tailwind CSS v4 | Utility-first styling |
| GSAP + ScrollTrigger | Parallax and scroll-based reveal animations |
| Lenis | Smooth scroll |
| Sora | Display / headline font |
| DM Sans | UI / body / chat font |

---

## Project Structure

```
src/
├── components/
│   ├── CinematicApp.tsx        # Root layout — header, Lenis setup, section order
│   ├── HeroSection.tsx         # Split hero — characters right, text left, parallax bg
│   ├── MeetSection.tsx         # Cinematic intro section with group scene
│   ├── EmotionSection.tsx      # Individual emotion sections with character art + parallax
│   ├── FindEmotionSection.tsx  # Closing section with 3-question emotion quiz modal
│   ├── ChatModal.tsx           # Chat overlay triggered by Talk button
│   └── NavDots.tsx             # Fixed side navigation dots
├── assets/
│   ├── Hero.png                # Hero cast image
│   ├── joy.png                 # Joy character
│   ├── sad.png                 # Sadness character
│   ├── anger.png               # Anger character
│   ├── Fear.png                # Fear character
│   ├── Disgust.png             # Disgust character
│   ├── emotions-group.jpg      # Group scene for Meet section
│   └── emotions-stripe.jpg     # Colorful strip for Find Emotion section
├── data/
│   └── emotions.ts             # All emotion data — colors, responses, greetings
├── hooks/
│   └── useEmoChat.ts           # Chat state — messages, send, typing, reset
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

## Emotion Quiz

The "Find Your Emotion" section includes a 3-question quiz. Each answer carries weighted scores across all five emotions. After all three questions, the highest-scoring emotion is shown as the result with its quote and a direct link to start a chat.

To update questions or scoring, edit the `QUESTIONS` array in `src/components/FindEmotionSection.tsx`.

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

- **Sora** is used for all headlines, emotion names, and display text — geometric, bold, modern
- **DM Sans** handles all UI text, body copy, and chat messages — clean and confident at small sizes
- Each emotion section uses its own light-tinted background palette so the color shift is immediately felt as you scroll
- Character images are positioned with parallax — some top, some bottom, alternating left/right per emotion
- The chat is a modal overlay so the scroll experience stays clean and uninterrupted
- No icons or emojis in the UI — the design relies entirely on typography, color, and character art

---

## Author

Built by [MNSBaanu](https://github.com/MNSBaanu)
