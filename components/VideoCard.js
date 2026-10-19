"use client";
import { useState } from "react";

// Accepts YouTube URLs (watch, youtu.be, embed, shorts, live) or a bare 11-character ID.
export function youtubeId(input = "") {
  const m = input.match(/(?:v=|youtu\.be\/|embed\/|shorts\/|live\/)([\w-]{11})/) || input.match(/^([\w-]{11})$/);
  return m ? m[1] : null;
}

// Reads a start time from ?t= or &t= (seconds like 21975, or 1h2m3s). Returns seconds.
export function youtubeStart(input = "") {
  const m = input.match(/[?&](?:t|start)=([\dhms]+)/);
  if (!m) return 0;
  if (/^\d+$/.test(m[1])) return Number(m[1]);
  const part = (unit) => Number((new RegExp(`(\\d+)${unit}`).exec(m[1]) || [0, 0])[1]);
  return part("h") * 3600 + part("m") * 60 + part("s");
}

// Accepts a medal.tv clip URL, or a whole pasted <iframe> snippet containing one.
export function medalSrc(input = "") {
  const m = input.match(/https:\/\/medal\.tv\/[^\s"'<>]+/);
  return m ? m[0].replace(/&amp;/g, "&") : null;
}

export default function VideoCard({ video = "", title }) {
  const [playing, setPlaying] = useState(false);
  const medal = medalSrc(video);
  const id = youtubeId(video);
  const start = youtubeStart(video);

  if (medal) {
    return (
      <div className="video">
        <iframe src={medal} title={title} loading="lazy" allow="autoplay; fullscreen" allowFullScreen />
      </div>
    );
  }
  if (!id) return <div className="video empty">video coming soon</div>;
  if (playing) {
    return (
      <div className="video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0${start ? `&start=${start}` : ""}`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }
  // Click-to-load: no YouTube code runs until the visitor presses play.
  return (
    <button className="video" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
      <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
      <span className="vid-play"><span>▶ PLAY</span></span>
    </button>
  );
}