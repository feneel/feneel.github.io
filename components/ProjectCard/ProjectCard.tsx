import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
}: ProjectCardProps) {
  return (
    <div className={styles.projectCard} data-aos="zoom-in">
      <div className={styles.cardBody}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{description}</p>
        <div className={styles.techStack}>
          {tech.map((t, i) => (
            <span key={i} className={styles.techBadge}>
              {t}
            </span>
          ))}
        </div>
        {github ? (
          <a href={github} className={styles.repoLink} target="_blank">
            View on GitHub
          </a>
        ) : (
          <span className={styles.companyTag}>Company Project</span>
        )}
      </div>
    </div>
  );
}
