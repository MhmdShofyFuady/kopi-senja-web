# Kopi Senja

Modern website for **Kopi Senja**, a local cafe. Built with Vite + React + TypeScript — fast, responsive, mobile-first.

## Design Tokens & Color Rationale

All visual values live in [`src/styles/tokens.css`](src/styles/tokens.css) as CSS custom properties. No hardcoded colors or sizes in components.

**Color palette:**

| Token | Value | Role |
|-------|-------|------|
| `--color-background` | `#faf6f1` | Warm cream page base |
| `--color-text` | `#3b2a1a` | Deep espresso body copy |
| `--color-primary` | `#6b3f23` | Roasted coffee — headings, CTA |
| `--color-accent` | `#c8944a` | Golden caramel — highlights |
| `--color-muted` | `#a89279` | Dusty latte — secondary text |

The palette draws from a real coffee color spectrum — espresso darks through steamed-milk creams — to match the client brief of "warm, cozy, nothing corporate." Earth tones ground the design in natural cafe aesthetics, while the golden caramel accent adds visual warmth and draws the eye to interactive elements without feeling flashy. Every shade was picked from actual coffee-shop material references (wood grain, ceramic, latte art) to keep the palette authentic rather than generic.

## Features

| # | Feature | Status |
|---|---------|--------|
| 1 | Responsive navbar with mobile hamburger menu | ✅ |
| 2 | Hero section with CTA | ✅ |
| 3 | About section (story, vibe) | 🔲 |
| 4 | Location & opening hours section | 🔲 |
| 5 | Menu page with category filter | 🔲 |
| 6 | Menu card component | 🔲 |
| 7 | Contact / reservation form | 🔲 |
| 8 | Footer with social links | 🔲 |
| 9 | Mobile-first responsive layout | ✅ |

## Tech Stack

- **Vite** — build tool
- **React 19** + **TypeScript** — UI
- **Vanilla CSS** — styling via design tokens (no Tailwind)
- Deployed via GitHub Pages (planned)

## Getting Started

```bash
# Clone
git clone https://github.com/MhmdShofyFuady/kopi-senja-web.git
cd kopi-senja-web

# Install & run
npm install
npm run dev
```

## Project Structure

```
src/
├── assets/          # Images, icons
├── components/      # Reusable UI components
├── pages/           # Route-level pages (future)
├── styles/          # Design tokens & global CSS
├── App.tsx          # Root component
└── main.tsx         # Entry point
```

## License

MIT
