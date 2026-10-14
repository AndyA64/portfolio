import { site } from "../data/site";
const items = ["about", "projects", "games", "tetris", "valorant", "listening", "contact"];

export default function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="brand">{site.handle}@portfolio:~</a>
      <nav aria-label="Primary">
        {items.map((i) => <a key={i} href={`#${i}`}>{i}</a>)}
      </nav>
    </header>
  );
}
