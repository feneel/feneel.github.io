import SkillsList from "@/components/SkillsList/SkillsList";
import { skillsData } from "../data/data";


// const allSkills = [
//   ...skillsData.Languages,
//   ...skillsData.Frameworks,
//   ...skillsData.Tools
// ];

export default function Skills() {
  return (
    <section className="container py-5">
      <h2 data-aos="fade-up">Skills</h2>
      <SkillsList skills={skillsData} />
    </section>
  );
}
