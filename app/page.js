import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Games from "../components/Games";
import TetrisStats from "../components/TetrisStats";
import Valorant from "../components/Valorant";
import NowListening from "../components/NowListening";
import Contact from "../components/Contact";
import { site } from "../data/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Games />
        <TetrisStats />
        <Valorant />
        <NowListening />
        <Contact />
      </main>
      <footer className="footer dim">
        © {new Date().getFullYear()} {site.name} · built with Next.js · GAME OVER? press F5 to continue
      </footer>
    </>
  );
}
