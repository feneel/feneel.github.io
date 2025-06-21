type ProjectCardProps={

    title: string,
    description: string,
    tech: string[],
    github: string,
}

export default function ProjectCard({ title, description, tech, github }: ProjectCardProps) {
  return (
    <div className="card mb-4 shadow-sm" data-aos="zoom-in">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p>{description}</p>
        <div className="mb-3">
          {tech.map((t, i) => (
            <span
              key={i}
              className="badge badge-tech text-white mx-1 py-2 px-3 rounded-pill"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={github}
          className="btn btn-outline-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
