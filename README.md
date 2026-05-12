# Tino Akpotu — Portfolio Site

Modern Next.js 14 portfolio for visual storyteller **Tino Akpotu**, converted from a single-page HTML/CSS/JS file into a fully componentised, TypeScript-typed, Tailwind-styled Next.js app.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS 3 + CSS custom properties |
| Animation | CSS keyframes + Framer Motion ready |
| Fonts | Next.js `next/font/google` (Bebas Neue, Syne, DM Sans) |
| Language | TypeScript |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, CSS vars, keyframes
│   ├── layout.tsx           # Root layout with font injection + metadata
│   └── page.tsx             # Page assembly (all sections)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Fixed nav with scroll detection + mobile drawer
│   │   └── Footer.tsx       # Footer with sitemap columns
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx      # Full-screen hero with animated title
│   │   ├── MarqueeTicker.tsx    # Infinite scrolling service ticker
│   │   ├── AboutSection.tsx     # Bio + skills grid
│   │   ├── PortfolioSection.tsx # Filtered gallery with video modal
│   │   ├── ServicesSection.tsx  # 6-service card grid
│   │   ├── ClientsSection.tsx   # Brand logo cells
│   │   ├── GridSection.tsx      # Instagram-style visual grid
│   │   ├── CTABanner.tsx        # Stats + call-to-action strip
│   │   └── ContactSection.tsx   # Contact form + details
│   │
│   └── ui/
│       ├── Cursor.tsx           # Custom cursor with lag ring
│       ├── Loader.tsx           # Animated intro loader
│       ├── ScrollProgress.tsx   # Orange scroll progress bar
│       └── ClientProviders.tsx  # Client-only initialisers
│
├── data/
│   └── site.ts              # All static data (portfolio, services, clients…)
│
└── lib/
    └── useScrollReveal.ts   # Intersection Observer hook
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment on Vercel

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub integration

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel auto-detects Next.js — click **Deploy**

No environment variables are required for the base portfolio.

---

## Customisation

### Content
All text, portfolio items, services, and client names live in **`src/data/site.ts`**. Edit that file to update any content without touching component code.

### Colours & fonts
CSS custom properties are defined at the top of `globals.css`. Tailwind config extends the theme in `tailwind.config.ts`.

### Adding real images
Replace the placeholder `card-pattern-*` divs in `PortfolioSection.tsx` with `<Image>` from `next/image` and add your `src` domain to `next.config.js`:

```js
images: {
  domains: ["your-cdn.com"],
},
```

### Adding a real contact form
The contact form in `ContactSection.tsx` currently fires a mock submit. Wire it to [Formspree](https://formspree.io), [Resend](https://resend.com), or any serverless API route:

```ts
// src/app/api/contact/route.ts
export async function POST(req: Request) { ... }
```

---

## Performance Notes

- Fonts are loaded via `next/font/google` — zero layout shift, self-hosted automatically
- `"use client"` is scoped only to interactive components; all static sections are RSCs
- Images should use `next/image` for automatic WebP conversion and lazy loading
- Tailwind purges unused CSS at build time

---

© 2025 Tino Akpotu
