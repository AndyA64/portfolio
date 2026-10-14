import Section from "./Section";
import Window from "./Window";
import ProjectCard from "./ProjectCard";
import { projects, site } from "../data/site";

export default function Projects() {
  return (
    <Section id="projects" cmd="ls projects/">
      {projects.length === 0 ? (
        <Window title="projects/README.md">
          <p>No projects here yet. My first ones will show up here as I build them.</p>
          <p className="dim">Follow along: {site.links.find((l) => l.label === "github")?.href ?? site.email}</p>
        </Window>
      ) : (
        <div className="grid two">
          {projects.map((p) => <ProjectCard key={p.name} {...p} />)}
        </div>
      )}
    </Section>
  );
}
