import ProjectCard from "../../components/ProjectCard";
import { projectsData } from "../data/data";

export default function Projects() {
  return (
    <section className="container py-5">
      <h2 data-aos="fade-up">Projects</h2>
      {projectsData.map((proj, i) => (
        <ProjectCard key={i} {...proj} />
      ))}
    </section>
  );
}
