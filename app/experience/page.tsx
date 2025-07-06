import ExperienceCard from "@/components/Experience/ExperienceCard";
import { experienceData } from "../data/data";

export default function Experience() {
  return (
    <section className="container py-5">
      <h2 data-aos="fade-up">Experience</h2>
      {experienceData.map((exp, i) => (
        <ExperienceCard key={i} {...exp} />
      ))}
    </section>
  );
}
