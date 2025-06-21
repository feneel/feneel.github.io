type ExperienceCardProps= {
    company: string,
    title: string,
    dates: string,
    location?: string,
    bullets: string[]
}

export default function ExperienceCard({ company, title, dates, location, bullets }: ExperienceCardProps) {
  return (
    <div className="mb-4" data-aos="fade-up">
      <h5>
        {title} @ {company} {location && `- ${location}`}
      </h5>
      <small className="text-muted">{dates}</small>
      <ul className="mt-2">
        {bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
