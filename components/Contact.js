import Section from "./Section";
import Window from "./Window";
import { site } from "../data/site";

export default function Contact() {
  return (
    <Section id="contact" cmd="mail --to me">
      <div className="grid two">
        <Window title="send_message.sh">
          {/* No backend needed: opens the visitor's email client. Swap for Formspree/Resend later. */}
          <form action={`mailto:${site.email}`} method="post" encType="text/plain" className="form">
            <label>name<input name="name" required autoComplete="name" /></label>
            <label>email<input name="email" type="email" required autoComplete="email" /></label>
            <label>message<textarea name="message" rows="4" required /></label>
            <button className="btn" type="submit">send message</button>
          </form>
        </Window>
        <div>
          <p>{site.contactNote}</p>
          <ul className="plain">
            <li><span className="dim">email</span> <a href={`mailto:${site.email}`}>{site.email}</a></li>
            {site.links.map((l) => (
              <li key={l.label}><span className="dim">{l.label}</span> <a href={l.href} target="_blank" rel="noreferrer">{l.href.replace("https://", "")}</a></li>
            ))}
            {site.resume && <li><span className="dim">resume</span> <a href={site.resume}>download pdf</a></li>}
          </ul>
        </div>
      </div>
    </Section>
  );
}
