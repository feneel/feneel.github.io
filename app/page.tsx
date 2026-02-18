"use client";

import { projectsData } from "./data/data";
import styles from "./page.module.css";

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section className={styles.home} data-aos="fade-up">
      <div className={`container ${styles.hero}`}>
        <div>
          <p className={styles.kicker}>FULL-STACK ENGINEER</p>
          <h1 className={styles.title}>
            I build AI-enabled, production-ready products from API architecture
            to polished UI.
          </h1>
          <p className={styles.subtitle}>
            I ship scalable web products with AI workflows, resilient backend
            systems, and clean user experiences.
          </p>
          <div className={styles.ctaRow}>
            <a href="/projects" className={styles.primaryBtn}>
              View Projects
            </a>
            <a href="/experience" className={styles.secondaryBtn}>
              See Experience
            </a>
          </div>
        </div>

        <aside className={styles.statusCard}>
           <h3>Current Focus</h3>
          <ul>
            <li>Full-stack feature ownership: UX, APIs, data, and deployment</li>
            <li>Product engineering: ship fast, iterate from real user feedback</li>
            <li>AI-powered workflows: RAG, citations, guardrails, and evals</li>
            <li>Production readiness: monitoring, debugging, and performance</li>
          </ul>
          <div className={styles.stats}>
            <div>
              <strong>{projectsData.length}+</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>4+ yrs</strong>
              <span>Experience</span>
            </div>
          </div>
        </aside>
      </div>

      <div className={`container ${styles.grid}`}>
        {featuredProjects.map((project) => (
          <article key={project.title} className={styles.card}>
            <p className={styles.cardLabel}>FEATURED</p>
            <h3>{project.title}</h3>
            {/* <p className={styles.cardContext}>
              {project.title.includes("Hackathon")
                ? "Built for rapid hackathon delivery with product-level quality."
                : project.title.includes("Wand KB")
                ? "Designed for AI knowledge retrieval with grounded answers and citations."
                : "Engineered as a full-stack solution for reliable real-world usage."}
            </p> */}
            <p>{project.description}</p>
            <div className={styles.tagWrap}>
              {project.tech.slice(0, 4).map((tech) => (
                <span key={tech} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                View on GitHub
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
