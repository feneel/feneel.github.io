import styles from "./Experience.module.css";

type ExperienceCardProps = {
  company: string;
  title: string;
  dates: string;
  location?: string;
  bullets: string[];
};

export default function ExperienceCard({
  company,
  title,
  dates,
  location,
  bullets,
}: ExperienceCardProps) {
  return (
    <div className={styles.experienceCard} data-aos="fade-up">
      <h5 className={styles.title}>
        {title} @ {company} {location && `- ${location}`}
      </h5>
      <small className={styles.dates}>{dates}</small>
      <ul className={styles.bullets}>
        {bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
