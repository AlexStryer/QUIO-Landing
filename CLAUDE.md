# QUIO Marketing Studio — Project Reference

## Tech Stack

- **Framework:** Vite + React 19 + TypeScript
- **Styling:** Tailwind CSS v3 (utility-first, `tailwind.config.ts`)
- **Routing:** react-router-dom v6 (`BrowserRouter`)
- **Animations:** Framer Motion
- **Package manager:** npm
- **No backend.** Contact via WhatsApp deep links.
- **No component library.** All UI is custom-built.

## Design Philosophy

A **dual-zone** system inspired by Together AI, adapted to QUIO's palette:

- **Light zone (cream canvas):** airy, optimistic sections. A `bg-cloud-light`
  gradient layers soft sage/olive/stone blobs over cream (`#f5eedd`).
- **Dark zone (forest canvas):** denser, editorial sections on forest
  (`#303625`). A `bg-cloud-dark` gradient adds subtle sage/olive warmth.
- **Sharp geometry:** 4 px radius for buttons/badges, 8 px for cards. No pills,
  no generous rounding.
- **Forest-tinted shadow** (`0 4px 10px rgba(48, 54, 37, 0.1)`) — never generic
  black. Ties elevated surfaces back to the brand.
- **Typography with negative tracking** on Garet display text; uppercase
  Poppins with positive letter-spacing for mono-style labels.

## Brand Colors

| Token      | Hex / Value                    | Usage                                  |
|------------|--------------------------------|----------------------------------------|
| `cream`    | `#f5eedd`                      | Primary light background               |
| `sage`     | `#85926d`                      | Soft accent in gradients, indicators   |
| `olive`    | `#767344`                      | Hover states, warm accent in gradients |
| `forest`   | `#303625`                      | Primary text / dark-zone background    |
| `stone`    | `#d4d4d4`                      | Soft cloud-gradient accent             |
| `sand`     | `hsl(38, 30%, 88%)`            | Subtle surface tint                    |
| `muted`    | `rgba(48, 54, 37, 0.55)`       | Secondary/body text                    |

Defined in both `tailwind.config.ts` and as CSS custom properties in `index.css`.

**Borders:** `rgba(48, 54, 37, 0.08)` on light surfaces, `rgba(245, 238, 221, 0.14)` on dark.

## Typography

| Role        | Font        | Source                       | Tailwind class   |
|-------------|-------------|------------------------------|------------------|
| Display     | **Garet**   | Self-hosted `/public/fonts/` | `font-display`   |
| Body / Mono | **Poppins** | Google Fonts (300–600)       | `font-body`      |

Body copy defaults to Poppins 400. Display headings use Garet 400 with negative
letter-spacing (`-0.025em` to `-0.035em`). `Outfit` is declared as a fallback
in the `font-display` stack in case Garet fails to load.

### Display scale (in `index.css`)

| Class         | Size (clamp)            | Line-height | Tracking | Use                      |
|---------------|-------------------------|-------------|----------|--------------------------|
| `display-xl`  | `clamp(2.75rem, 7vw, 5rem)` | `1`     | `-0.03em` | Hero headlines          |
| `display-lg`  | `clamp(2rem, 4.5vw, 3.25rem)` | `1.05` | `-0.025em` | Section headings     |
| `display-md`  | `clamp(1.5rem, 2.6vw, 2rem)` | `1.1`  | `-0.02em` | Sub-section / card title|
| `display-sm`  | `clamp(1.2rem, 1.7vw, 1.4rem)`| `1.2` | `-0.015em` | Small feature title  |
| `stat-number` | `clamp(2.5rem, 4vw, 3.5rem)` | `1`    | `-0.03em` | Large metric numbers  |

### Mono-style labels (Poppins uppercase)

- `mono-label` — 11 px, `letter-spacing: 0.18em`, weight 500, uppercase, muted forest. Section signposts.
- `mono-label-sm` — 10 px, `letter-spacing: 0.2em`, uppercase. Micro-labels.

## File Structure

```
src/
  components/
    LoadingScreen.tsx ← home-only splash
    layout/           ← Navbar, Footer, Layout (with Outlet), FloatingWhatsApp (unused)
    ui/               ← Reserved for reusable small components
  pages/              ← Home, Servicios, Proyectos, Metodo, Estudio, Contacto, NotFound
  lib/
    animations.ts     ← Shared Framer Motion configs (fadeUp, fadeUpDelayed, scaleIn, heroStagger, heroZoom)
  constants.ts        ← WhatsApp URL, Instagram URL/handle (single source of truth)
  App.tsx             ← Router with lazy-loaded pages
  main.tsx            ← Entry point, BrowserRouter wrapper
  index.css           ← CSS variables, @font-face, Tailwind @layer components, gradients, transitions
public/
  fonts/              ← Garet .woff files
  images/             ← Site photography and illustrations
```

## Routing

| Path         | Component    | Title                   |
|--------------|--------------|-------------------------|
| `/`          | `Home`       | QUIO · Marketing Studio |
| `/servicios` | `Servicios`  | Servicios · QUIO        |
| `/proyectos` | `Proyectos`  | Proyectos · QUIO        |
| `/metodo`    | `Metodo`     | Método QUIO             |
| `/estudio`   | `Estudio`    | Estudio · QUIO          |
| `/contacto`  | `Contacto`   | Contacto · QUIO         |
| `*`          | `NotFound`   | 404 · QUIO              |

All pages are lazy-loaded via `React.lazy()` in `App.tsx`. The `Layout`
component wraps every route except NotFound and handles: Navbar, Footer,
scroll-to-top, page title, and meta description.

## Coding Conventions

### Utility classes (defined in `index.css` under `@layer components`)

**Layout**
- `.container-site` — `max-w-site mx-auto` with responsive horizontal padding (`px-6 md:px-10 lg:px-14`). Use on all content wrappers. `max-w-site` resolves to 1280 px.
- `.section-padding` — `py-20 md:py-28 lg:py-[120px]`. Apply to `<section>` elements (horizontal padding lives on `.container-site`).

**Typography**
- `.display-xl / -lg / -md / -sm` — Garet with negative tracking. See the display scale above.
- `.stat-number` — oversized display numeral for stats cards.
- `.mono-label`, `.mono-label-sm` — uppercase Poppins labels.

**Buttons (sharp 4 px radius, 13 px Poppins 500)**
- `.btn-primary` — forest solid on cream; hover → olive. Primary CTA on light surfaces.
- `.btn-outline` — transparent with `rgba(forest, 0.15)` border. Secondary on light.
- `.btn-glass` — `rgba(cream, 0.10)` with soft border. Primary CTA on dark sections.
- `.btn-cream` — solid cream on dark; hover inverts to outline. Primary CTA on dark sections.

**Surfaces**
- `.card-surface` — white, 8 px radius, light border, forest-tinted shadow. Primary elevated surface on light.
- `.card-tint` — translucent white card with backdrop blur. For layered hero accents.
- `.card-dark` — low-opacity cream fill with soft border. Card equivalent for dark sections.

**Badges**
- `.badge` — 4 px radius, 10 px uppercase, muted forest background + border. Micro-tags.
- `.badge-dark` — same but on dark sections.

**Gradients**
- `.bg-cloud-light` — layered radial gradients (sage / stone / olive) over cream. Used for hero and closing CTA on light pages.
- `.bg-cloud-dark` — subtle sage/olive wash over forest. Used for dark zones.

**Misc**
- `.link-underline` — left-anchored animated underline on hover.
- Prefer specific transitions (`transition-colors`, `transition-transform`) over `transition-all`.

### Animations
- All shared Framer Motion configs live in `src/lib/animations.ts`.
- Use `fadeUp`, `fadeUpDelayed(delay)`, `scaleIn`, `heroStagger`, or `heroZoom` — spread them onto `<motion.*>` elements.
- `transitionBase` is the standard transition: `{ duration: 0.6, ease: 'easeOut' }`.
- String `ease` values must use `as const` to satisfy TypeScript.
- CSS keyframes `drift-a/b/c` (classes `cloud-a/b/c`) animate the floating gradient blobs in the hero.

### Components
- Default exports on all components.
- Static data arrays use `as const` and are declared outside the component.
- List keys use stable data values (e.g., `service.name`), not array indices.
- Event handlers use `useCallback` when passed as props or used in effects.
- Semantic HTML: `<section>`, `<article>`, `<nav>`, `<ol>`/`<ul>` where appropriate.
- `{/* COPY: ... */}` comments mark editable text for easy content updates.
- `{/* TODO: ... */}` comments mark placeholder images that need real assets.

### Accessibility
- Skip-to-content link in Layout.
- `focus-visible` outline globally (`2 px solid sage`, 3 px offset).
- `aria-label`, `aria-expanded`, `aria-current="page"` on Navbar.
- `aria-hidden="true"` on decorative gradient blobs, oversized numbers, massive footer wordmark, and ornamental arrows.
- Every `<img>` has meaningful `alt` text (or `alt=""` + `aria-hidden` when purely decorative).

### WhatsApp
The phone number is defined once in `src/constants.ts`. Replace `XXXXXXXXXXX` with the actual number (country code, no dashes, e.g., `5214421234567`).

## Site Voice
Spanish body copy with English section labels (About, Services, Selected work, Our process, etc.). Tone is editorial, intentional, and organic — no flashy/techy aesthetics. Headings end with a period (`Nosotros.`, `Hablemos.`) to feel declarative.
