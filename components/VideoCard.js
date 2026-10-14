"use client";
import { useState } from "react";

// Accepts a full YouTube URL (watch, youtu.be, embed) or a bare 11-character ID.
export function youtubeId(input = "") {
  const m = input.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/) || input.match(/^([\w-]{11})$/);
  return m ? m[1] : null;
}

export default function VideoCard({ video, title }) {
  const [playing, setPlaying] = useState(false);
  const id = youtubeId(video);

  if (!id) return <div className="video empty">video coming soon</div>;
  if (playing) {
    return (
      <div className="video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
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
