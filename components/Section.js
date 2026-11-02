// Section headings. Edit the text here.
const titles = {
  about: "About",
  projects: "Projects",
  games: "Games",
  tetris: "Tetris",
  valorant: "VALORANT",
  listening: "Now Listening - Last 5",
  contact: "Contact",
};

export default function Section({ id, cmd, children }) {
  return (
    <section id={id} className="section">
      <h2 className="prompt"><span>➢</span> {titles[id] ?? cmd}</h2>
      {children}
    </section>
  );
}