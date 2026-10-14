# Terminal / Gaming Portfolio (Next.js)

Sections: hero, about, projects, games, Tetris stats & records, contact + social links.

## Run locally
Requires Node.js 18.17+.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit content
All text, links, projects, games and Tetris numbers live in **`data/site.js`**.
Put your resume at `public/resume.pdf` (create the `public/` folder).
Colors and fonts: top of `app/globals.css` (`:root` variables). Piece colors double as the Tetris palette.

## Structure
- `app/`: layout, page, global styles
- `components/`: `Window` (terminal frame), `Section`, `ProjectCard`, `TetrisStats`, etc.
- `data/site.js`: your content

## Deploy
**Vercel (easiest)**
1. `git init && git add . && git commit -m "init"`, push to GitHub.
2. Import the repo at vercel.com/new. Click Deploy (no config needed).

**Netlify / other Node hosts**: build `npm run build`, start `npm run start`
(Netlify auto-detects Next.js).

**Docker / VPS**: `npm run build && npm run start` behind nginx or Caddy on port 3000.

## Notes
- The contact form uses `mailto:` (no backend). For real submissions, swap the `<form action>` for Formspree or a Next.js route handler with Resend.
- Update `metadata` in `app/layout.js` for SEO.
