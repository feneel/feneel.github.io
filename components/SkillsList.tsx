type SkillsListProps = {
  skills: Record<string, string[]>;
};


export default function SkillsList({ skills }: SkillsListProps) {
  const badgeColors = [
    "bg-primary",
    "bg-success",
    "bg-info",
    "bg-warning text-dark",
    "bg-danger",
    "bg-secondary",
  ];

  return (
    <>
      {Object.entries(skills).map(([category, skillArray], idx) => (
        <div key={category} className="mb-4" data-aos="fade-right" data-aos-delay={idx * 150}>
          <h5>{category}</h5>
          <div>
            {skillArray.map((skill, i) => (
              <span
                key={i}
                className={`badge mx-1 my-1 ${badgeColors[i % badgeColors.length]} py-2 px-3 rounded-pill`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
