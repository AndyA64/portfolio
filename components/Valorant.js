import Section from "./Section";
import Window from "./Window";
import VideoCard from "./VideoCard";
import { valorant as v } from "../data/site";

export default function Valorant() {
  return (
    <Section id="valorant" cmd="valorant --peak">
      <div className="grid two">
        <Window title="rank.png">
          <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            {v.rankImage && (
              <img src={v.rankImage} alt={`${v.rank} rank icon`} width="120" height="120"
                   style={{ width: 120, height: 120, objectFit: "contain" }} />
            )}
            <div>
              <p className="dim" style={{ margin: 0 }}>Peak Rank</p>
              <p className="pixel" style={{ margin: "6px 0 14px", fontSize: 18, color: "var(--link)" }}>{v.rank}</p>
              {v.riotId && <p className="dim" style={{ margin: "0 0 12px" }}>{v.riotId}</p>}
              <a className="btn ghost" href={v.trackerUrl} target="_blank" rel="noreferrer">view tracker.gg profile</a>
            </div>
          </div>
        </Window>

        <Window title="best_clip.mp4">
          <VideoCard video={v.clip} title={v.clipTitle} />
          <p className="vid-meta">{v.clipTitle}</p>
        </Window>
      </div>
      <p className="dim" style={{ fontSize: 12, marginTop: 12 }}>
        VALORANT and its rank icons are trademarks of Riot Games, Inc. This is a fan portfolio, not affiliated with or endorsed by Riot Games.
      </p>
    </Section>
  );
}
