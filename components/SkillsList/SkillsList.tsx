import styles from "./SkillsList.module.css";

type SkillsListProps = {
  skills: Record<string, string[]>;
};

export default function SkillsList({ skills }: SkillsListProps) {
  return (
    <>
      {Object.entries(skills).map(([category, skillArray], idx) => (
        <div
          key={category}
          className={styles.category}
          data-aos="fade-right"
          data-aos-delay={idx * 150}
        >
          <h5 className={styles.heading}>{category}</h5>
          <div className={styles.skillsContainer}>
            {skillArray.map((skill, i) => (
              <span key={i} className={styles.skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
