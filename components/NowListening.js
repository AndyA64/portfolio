import Section from "./Section";
import Window from "./Window";
import { site } from "../data/site";

const NO_ART = "2a96cbd8b46e442fc41c2b86b821562f"; // Last.fm's grey placeholder image

function ago(uts) {
  const s = Math.max(0, Date.now() / 1000 - Number(uts));
  if (s < 3600) return `${Math.max(1, Math.round(s / 60))}m ago`;
  if (s < 86400) return `${Math.round(s / 3600)}h ago`;
  return `${Math.round(s / 86400)}d ago`;
}

async function getTracks(user) {
  const key = process.env.LASTFM_API_KEY;
  if (!key) return { error: "Add LASTFM_API_KEY to .env.local to show my recent tracks." };
  try {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${encodeURIComponent(user)}&api_key=${key}&format=json&limit=5`;
    const res = await fetch(url, { next: { revalidate: 60 } });
    const json = await res.json();
    if (json.error) {
      return { error: json.error === 17 ? "Recent listening is hidden. Turn off “Hide recent listening information” in Last.fm privacy settings." : `Last.fm error ${json.error}.` };
    }
    return { tracks: (json.recenttracks?.track ?? []).slice(0, 5) };
  } catch {
    return { error: "Couldn't reach Last.fm right now. Check back soon." };
  }
}

export default async function NowListening() {
  const user = site.lastfm ?? "p1xelandy";
  const { tracks, error } = await getTracks(user);

  return (
    <Section id="listening" cmd="now-listening --last 5">
      <Window title={`last.fm/user/${user}`}>
        {error || !tracks.length ? (
          <p className="dim">{error ?? "No scrobbles yet."}</p>
        ) : (
          <ul className="tracks">
            {tracks.map((t, i) => {
              const live = t["@attr"]?.nowplaying === "true";
              const art = [...(t.image ?? [])].reverse().map((x) => x["#text"]).find((u) => u && !u.includes(NO_ART));
              return (
                <li key={`${t.name}-${i}`} className="track">
                  {art ? <img className="art" src={art} alt="" width="56" height="56" loading="lazy" /> : <span className="art" aria-hidden="true">♪</span>}
                  <span>
                    <a className="track-title" href={t.url} target="_blank" rel="noreferrer">{t.name}</a>
                    <span className="dim">{t.artist?.["#text"]}</span>
                  </span>
                  {live ? <span className="live">▶ now playing</span> : <span className="dim">{t.date?.uts ? ago(t.date.uts) : ""}</span>}
                </li>
              );
            })}
          </ul>
        )}
        <p className="dim"><a href={`https://www.last.fm/user/${user}`} target="_blank" rel="noreferrer">see full profile on Last.fm</a></p>
      </Window>
    </Section>
  );
}
