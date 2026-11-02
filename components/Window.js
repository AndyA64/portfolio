// Reusable terminal-style window frame.
export default function Window({ title, children, className = "" }) {
  return (
    <div className={`win ${className}`}>
      <div className="win-bar"><span>{title}</span></div>
      <div className="win-body">{children}</div>
    </div>
  );
}
