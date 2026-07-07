# Michael Martinez — Portfolio

Personal portfolio site for Michael Martinez, frontend developer and founder of [OriginLabs](https://originlabs.space/). Built on the [rbp-portfolio](https://github.com/DavidHDev/rbp-portfolio) template.

## Stack

- **Next.js 16** (App Router) + **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **motion/react** for animation, **Lenis** for smooth scroll
- **Matter.js** for the physics-driven stack chips on `/about`
- **ogl**-based WebGL shader for the hero/contact backdrop and portrait morph
- **next-themes** for dark mode

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
| `npm run typecheck` | Type-check with `tsc --noEmit` |

## Content

- `lib/metadata.ts` — site name, description, SEO/OG config
- `components/hero/hero.tsx` — hero copy and portrait image paths
- `components/projects/projects.tsx` — project cards (title, description, image, link)
- `app/about/page.tsx` + `components/about/*` — bio, experience, skills, stack
- `components/contact/*` — email, social links, resume link

**Known placeholder:** `public/portrait.webp` and `public/portrait-wave.webp` are stand-ins (copied from the original template) for the hero's morphing-portrait effect — swap in real photos at the same filenames.
