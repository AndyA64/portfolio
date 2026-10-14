import Window from "./Window";

export default function ProjectCard({ name, desc, stack, repo, demo, stars }) {
  return (
    <Window title={`projects/${name}`} className="card">
      <p>{desc}</p>
      <div className="tags">{stack.map((s) => <b key={s} className="tag">{s}</b>)}</div>
      <div className="links">
        <a href={repo} target="_blank" rel="noreferrer">source</a>
        {demo && <a href={demo} target="_blank" rel="noreferrer">live demo</a>}
        {stars && <span className="dim">★ {stars}</span>}
      </div>
    </Window>
  );
}
