import Section from "./Section";
import { games } from "../data/site";

export default function Games() {
  return (
    <Section id="games" cmd="./games --list">
      <div className="grid two">
        {games.map((g) => {
          const external = g.href.startsWith("http");
          return (
            <a key={g.title} className="game" href={g.href} {...(external && { target: "_blank", rel: "noreferrer" })}>
              <span className="pixel">{g.title}</span>
              <span className="dim">{g.genre} · {g.year}</span>
              <p>{g.desc}</p>
              <span className="tag">{g.engine}</span>
              <span className="play">▶ {g.cta ?? "press start"}</span>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
