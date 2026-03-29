# Escape — Cinematic Interactive Storytelling

A scroll-based, branching narrative web experience built with React, Tailwind CSS, and GSAP.

## Stack

- **React 19** + **TypeScript** — functional components, custom hooks
- **Vite** — fast dev/build tooling
- **Tailwind CSS v4** — utility-first styling with glassmorphism effects
- **GSAP + ScrollTrigger** — cinematic scene transitions and parallax animations
- **Lenis** — buttery smooth scrolling

## Project Structure

```
src/
├── components/
│   ├── StoryEngine.tsx     # Root engine: Lenis + GSAP setup, renders Scene
│   ├── Scene.tsx           # Renders a story node with animations
│   ├── ParallaxLayer.tsx   # Mouse-driven parallax wrapper (bg/mid/fg depths)
│   ├── ChoiceBox.tsx       # Animated choice buttons with environment glow
│   ├── TypewriterText.tsx  # Character-by-character text reveal
│   └── Particles.tsx       # Canvas particle system with mouse repulsion
├── hooks/
│   └── useStoryEngine.ts   # Story state: current node, history, navigation
├── data/
│   └── story.json          # Branching story graph (nodes + choices)
├── types/
│   └── story.ts            # TypeScript interfaces for story data
└── main.tsx
```

## Story Structure

Stories are defined as a JSON graph in `src/data/story.json`:

```json
{
  "startNode": "awakening",
  "nodes": {
    "awakening": {
      "id": "awakening",
      "environment": "abstract",
      "text": "...",
      "choices": [
        { "id": "next-node-id", "label": "...", "description": "...", "icon": "✦" }
      ]
    }
  }
}
```

Each node supports:
- `environment` — `forest` | `space` | `cyberpunk` | `abstract` (controls colors, particles, decorations)
- `choices` — array of branching paths
- `isEnding` — marks terminal nodes with an ending card

## Environments

| Environment | Palette | Vibe |
|-------------|---------|------|
| `abstract` | Orange / Pink / Purple | Void, dreamlike |
| `forest` | Green / Emerald | Ancient, bioluminescent |
| `space` | Indigo / Purple | Celestial, vast |
| `cyberpunk` | Fuchsia / Cyan | Neon, digital |

## Getting Started

```bash
npm install
npm run dev
```

## Adding Story Content

1. Add new nodes to `src/data/story.json`
2. Reference them in `choices[].id` of existing nodes
3. Set `isEnding: true` on terminal nodes — no choices needed

## Features

- Multi-layer mouse parallax (background / midground / foreground)
- GSAP-powered scene enter/exit transitions (fade + zoom + slide)
- Canvas particle system with per-environment color palettes and mouse repulsion
- Typewriter text effect with cursor blink
- Glassmorphism UI with per-environment glow effects
- Story history with back navigation
- Multiple endings system
- Lenis smooth scroll integration
- Fully responsive (mobile + desktop)
