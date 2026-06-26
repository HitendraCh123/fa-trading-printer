# PrintHelp Pro

An independent printer setup, driver, and troubleshooting guide — built with
React + Vite. This is **not affiliated with any printer manufacturer**;
brand names are used only for identification, and all driver links point to
each manufacturer's own official site.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Project structure

```
src/
  config/site.js      ← single place to edit phone, email, address, brand links
  components/         ← Header, Footer, FeedLine (animated divider), Reveal
  pages/              ← Home, Diagnose, Manuals, Support, Terms, Privacy, Disclaimer
  index.css           ← design tokens (colors, fonts, spacing) and base styles
  App.jsx             ← routing
```

## Editing contact info

Everything contact-related (phone, email, mailing address) and every brand's
official driver link lives in **`src/config/site.js`**. Edit values there —
no need to touch any component.

## Deploying (SPA routing)

Because this uses client-side routing (`react-router-dom`), your host needs
to serve `index.html` for unknown paths (e.g. `/diagnose` loaded directly,
or refreshed). Config files for the common cases are already included:

| Host                        | Config already included          |
|------------------------------|-----------------------------------|
| Netlify                     | `public/_redirects`              |
| Vercel                      | `vercel.json`                    |
| Apache / shared hosting     | `public/.htaccess`               |
| GitHub Pages                | not natively supported — use Netlify/Vercel instead, or add a 404.html fallback trick |

If you deploy to Netlify or Vercel by connecting this repo, no extra setup
is needed — the included config files are picked up automatically.

## Tech

- React 18 + Vite
- React Router (client-side routing)
- Framer Motion (animations)
- lucide-react (icons)
- Plain CSS with design tokens — no UI framework dependency
