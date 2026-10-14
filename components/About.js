import Section from "./Section";
import { about } from "../data/site";

export default function About() {
  return (
    <Section id="about" cmd="cat about.md">
      <div className="grid two">
        <div>
          {about.bio.map((p, i) => <p key={i}>{p}</p>)}
          <h3>education</h3>
          <ul className="plain">
            {about.education.map((t) => (
              <li key={t.what}><span className="dim">{t.when}</span> {t.what}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{about.sideTitle}</h3>
          {Object.entries(about.side).map(([group, list]) => (
            <div key={group} className="skill-row">
              <span className="dim">{group}</span>
              <div className="tags">{list.map((s) => <b key={s} className="tag">{s}</b>)}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
