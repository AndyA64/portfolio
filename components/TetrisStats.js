import Section from "./Section";
import Window from "./Window";
import VideoCard from "./VideoCard";
import { tetris } from "../data/site";

export default function TetrisStats() {
  return (
    <Section id="tetris" cmd="tetris --stats">
      <p className="dim">{tetris.mode}</p>
      <div className="stats">
        {tetris.stats.map((s) => (
          <div key={s.label} className="stat">
            <span className="pixel">{s.value}</span>
            <span className="dim">{s.label}</span>
          </div>
        ))}
      </div>

      <h3>achievements</h3>
      <div className="grid two">
        {tetris.achievements.map((a) => (
          <Window key={a.year + a.text} title={`replays/${a.year}`}>
            <VideoCard video={a.video} title={a.text} />
            <p className="vid-meta"><span className="dim">{a.year}</span>{a.text}</p>
          </Window>
        ))}
      </div>
    </Section>
  );
}
