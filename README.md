# My Portfolio

Personal portfolio with a terminal and gaming theme, built with Next.js.

**Live site:** https://andy-a64.vercel.app/

## Sections
About, Projects, Tetris results (with videos), Valorant rank, Now Listening (live from Last.fm), and Contact.

## Built with
Next.js, React, plain CSS, the Last.fm API, and Vercel.

## Run locally
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000. To show recent tracks, put `LASTFM_API_KEY=your_key` in a `.env.local` file. Without it, that section shows a short note.

All content lives in `data/site.js`.
