import Window from "./Window";
import { site } from "../data/site";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <Window title="about me">
        <div className="hero-grid">
          <div>
            <h1 className="title">{site.name}</h1>
            <p>{site.role} · {site.location}</p>
            <p>{site.tagline}</p>
            <div className="btns">
              <a className="btn" href="#projects">view projects</a>
              <a className="btn ghost" href="#tetris">see high scores</a>
            </div>
          </div>
          {site.photo && (
            <figure className="hero-photo">
              <img src={site.photo} alt={`Photo of ${site.name}`} width="460" height="460" />
            </figure>
          )}
        </div>
      </Window>
    </section>
  );
}
