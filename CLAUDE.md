# QUIO Marketing Studio — Project Reference

## Tech Stack

- **Framework:** Vite + React 18 + TypeScript
- **Styling:** Tailwind CSS v3 (utility-first, `tailwind.config.ts`)
- **Routing:** react-router-dom v6 (`BrowserRouter`)
- **Animations:** Framer Motion
- **Package manager:** npm
- **No backend.** Contact via WhatsApp deep links.
- **No component library.** All UI is custom-built.

## Brand Colors

| Token      | Hex / Value                    | Usage                                  |
|------------|--------------------------------|----------------------------------------|
| `cream`    | `#f5eedd`                      | Page background, light text on dark    |
| `sage`     | `#85926d`                      | Primary brand color, buttons, accents  |
| `olive`    | `#767344`                      | Secondary accent, hover states         |
| `forest`   | `#303625`                      | Dark text, overlays, navbar dark state |
| `stone`    | `#d4d4d4`                      | Borders, muted elements, dividers      |
| `sand`     | `hsl(38, 30%, 88%)`           | Card backgrounds, CTA sections         |
| `muted`    | `rgba(48, 54, 37, 0.55)`      | Secondary/body text                    |

Defined in both `tailwind.config.ts` and as CSS custom properties in `index.css`.

## Typography

| Role      | Font      | Source                        | Tailwind class   |
|-----------|-----------|-------------------------------|------------------|
| Display   | **Garet** | Self-hosted `/public/fonts/`  | `font-display`   |
| Body      | **Poppins** | Google Fonts (300–600)      | `font-body`      |

Garet is currently **not available** — Outfit is used as a temporary placeholder. When Garet `.woff2` files are added to `/public/fonts/`, uncomment the `@font-face` declarations in `index.css` and remove Outfit from the Google Fonts import.

## File Structure

```
src/
  components/
    layout/          ← Navbar, Footer, Layout (with Outlet), FloatingWhatsApp
    ui/              ← Reusable small components (currently empty)
  pages/             ← Home, Servicios, Proyectos, Metodo, Estudio, Contacto, NotFound
  lib/
    animations.ts    ← Shared Framer Motion configs (fadeUp, fadeUpDelayed, scaleIn, heroStagger)
  constants.ts       ← WhatsApp URL, Instagram URL/handle (single source of truth)
  App.tsx            ← Router with lazy-loaded pages
  main.tsx           ← Entry point, BrowserRouter wrapper
  index.css          ← CSS variables, @font-face, Tailwind @layer components, scrollbar, page transition
public/
  fonts/             ← Garet .woff2 files go here
  images/            ← All site images (hero-bg.png is the only real image so far)
```

## Routing

| Path         | Component    | Title              |
|--------------|--------------|---------------------|
| `/`          | `Home`       | QUIO · Marketing Studio |
| `/servicios` | `Servicios`  | Servicios · QUIO    |
| `/proyectos` | `Proyectos`  | Proyectos · QUIO    |
| `/metodo`    | `Metodo`     | Método QUIO         |
| `/estudio`   | `Estudio`    | Estudio · QUIO      |
| `/contacto`  | `Contacto`   | Contacto · QUIO     |
| `*`          | `NotFound`   | 404 · QUIO          |

All pages are lazy-loaded via `React.lazy()` in `App.tsx`. The `Layout` component wraps all pages except NotFound and handles: Navbar, Footer, FloatingWhatsApp, scroll-to-top, page title, and meta description.

## Coding Conventions

### Animations
- All shared Framer Motion configs live in `src/lib/animations.ts`.
- Use `fadeUp`, `fadeUpDelayed(delay)`, `scaleIn`, or `heroStagger` — spread them onto `<motion.*>` elements.
- `transitionBase` is the standard transition: `{ duration: 0.6, ease: 'easeOut' }`.
- String `ease` values must use `as const` to satisfy TypeScript.

### Tailwind Patterns
- **`.container-site`** — `max-w-[1400px] mx-auto`. Use on all content wrappers.
- **`.section-padding`** — responsive section padding. Apply to `<section>` elements.
- **`.heading-editorial`**, **`.heading-large`**, **`.heading-medium`** — typographic scale classes.
- **`.label-mono`** — uppercase micro-label style.
- **`.whatsapp-btn`**, **`.whatsapp-btn-outline`**, **`.outline-btn`** — button styles.
- All custom classes are defined in `index.css` under `@layer components`.
- Prefer specific transition properties (`transition-colors`, `transition-transform`) over `transition-all`.

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
- `focus-visible` outline globally (`2px solid sage`).
- `aria-label`, `aria-expanded`, `aria-current="page"` on Navbar.
- `aria-hidden="true"` on decorative elements (numbers, arrows).
- `role="img"` + `aria-label` on placeholder divs until real `<img>` tags replace them.

### WhatsApp
The phone number is defined once in `src/constants.ts`. Replace `XXXXXXXXXXX` with the actual number (country code, no dashes, e.g., `5214421234567`).

## Site Voice
Spanish body copy with English section labels (About, Services, Selected work, Our process, etc.). Tone is editorial, intentional, and organic — no flashy/techy aesthetics.
