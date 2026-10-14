export default function Section({ id, cmd, children }) {
  return (
    <section id={id} className="section">
      <h2 className="prompt"><span>$</span> {cmd}</h2>
      {children}
    </section>
  );
}
