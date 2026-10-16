// ✏️ EDIT EVERYTHING HERE. Components read from this file only.
export const site = {
  name: "Andrew Artiaga",
  photo: "/ctwcdasraisetrophy (1).png",
  handle: "andrew",
  role: "Software Engineering Student",
  tagline: "Software engineering student. Classic Tetris DAS World Champion.",
  location: "Dallas, TX",
  email: "andrew.artiaga64@gmail.com",
  contactNote: "Looking for internships and chances to build real software. Also happy to talk Classic Tetris.",
  resume: "", // e.g. "/resume.pdf" once you add one to /public. Empty hides the link.
  // TODO: replace with your real profile URLs (delete any you don't use)
  links: [
    { label: "github", href: "https://github.com/AndyA64" },
    { label: "linkedin", href: "https://www.linkedin.com/in/andrew-artiaga/" },
    { label: "wikipedia", href: "https://en.wikipedia.org/wiki/Andrew_Artiaga" },
  ],
};

export const about = {
  bio: [
    "I'm a junior in college studying software engineering in Dallas, Texas. I'm building my skills and looking for my first internship.",
    "Outside of school I compete in Classic Tetris. I held the score world record in 2024 and won the DAS World Championship in 2026. That mix of practice, precision, and pressure is what I want to bring to engineering.",
  ],
  education: [
    { when: "Now", what: "B.S. Software Engineering, junior year" },
  ],
  sideTitle: "outside of code",
  side: {
    travel: ["Vietnam", "UK", "Germany", "France", "Canada", "Japan (next!)"],
    playing: ["Final Fantasy VII REMAKE", "VALORANT", "Tetris", "The Legend of Zelda"],
  },
};

// No projects yet. Add objects like the example below and they'll appear automatically.
// { name: "my-project", desc: "One line on what it does.", stack: ["Next.js"], repo: "https://github.com/...", demo: "https://...", stars: 0 }
export const projects = [
  {
    name: "shrink-to-size",
    desc: "Browser tool that compresses an image to a file size you choose (like 300 KB or 1 MB), entirely on your device with no uploads. Uses a binary search over JPEG/WebP quality with a downscale fallback, and runs in a Web Worker so the UI stays responsive.",
    stack: ["JavaScript", "Web Workers", "Node test runner", "GitHub Actions", "Vercel"],
    repo: "https://github.com/AndyA64/shrink-to-size",
    demo: "https://shrink-to-size.vercel.app/",
  },
  {
    name: "tetris-stats-tracker",
    desc: "Log Classic Tetris games and track score, lines, and tetris rate over time, with a chart, JSON export/import, and unit tests.",
    stack: ["JavaScript", "HTML/CSS", "Node test runner"],
    repo: "https://github.com/AndyA64/tetris-stats-tracker",
    demo: "https://andya64.github.io/tetris-stats-tracker/",
  },
];

export const games = [
  { title: "Classic Tetris (NES)", genre: "Competitive", year: "2026", desc: "My main game. DAS World Champion, Jonas Cup champion, and former score world record holder.", engine: "NES", href: "#tetris", cta: "see my results" },
];

export const tetris = {
  mode: "Classic Tetris (NES)",
  stats: [
    { label: "Score world record (2024)", value: "8.9M" },
    { label: "DAS World Champion", value: "2026" },
    { label: "Jonas Cup champion", value: "2025 · 2026" },
  ],
  achievements: [
    { year: "2026", text: "Classic Tetris DAS World Champion", video: "https://www.youtube.com/watch?v=iUofvUxOBCM" },
    { year: "2026", text: "Jonas Cup Champion", video: "" },
    { year: "2025", text: "Jonas Cup Champion", video: "https://www.youtube.com/watch?v=fl0iInwnZOo&t=2917s&pp=0gcJCT8MAYcqIYzv" },
    { year: "2024", text: "Score world record: 8.9 million (former record holder)", video: "https://www.youtube.com/watch?v=l8673fMRDC0" },
    { year: "2024", text: "Beat the game: reached the game crash", video: "https://www.youtube.com/watch?v=CnuhtfAzVm0" },
  ],
  // Decorative stack. Letters = tetromino colours, "." = empty. Edit freely.
  board: [
    "..........",
    "..........",
    "...T......",
    "..TTT.....",
    "I.OO.SS.JJ",
    "I.OOSSLLLJ",
    "IZZ.ZZ.LJJ",
    "IIZZ.ZZ.LL",
  ],
};
   export const valorant = {
     rank: "Ascendant 1",
     rankImage: "/ascendant-1.png",
     riotId: "Jonzo#9281",
     trackerUrl: "https://tracker.gg/valorant/profile/riot/Jonzo%239281/overview?platform=pc&playlist=competitive&season=8102cd81-43a0-d0d7-bd59-47b8fe9bed1b",
     clip: "", // paste your YouTube link here
     clipTitle: "Best clip", // e.g. "Ace on Ascent"
   };