"use client";

import { FormEvent, KeyboardEvent, useMemo, useRef, useState } from "react";
import { aboutText, projectsData, skillsData } from "./data/data";
import styles from "./page.module.css";
import { useTheme } from "@/components/ThemeProvider/ThemeProvider";

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);
  const { devMode } = useTheme();
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to Feneel OS terminal. Type `help` to get started.",
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const topSkills = useMemo(
    () => [
      ...skillsData.Languages.slice(0, 4),
      ...skillsData.Frameworks.slice(0, 4),
      ...skillsData.Tools.slice(0, 4),
    ].join(", "),
    []
  );

  const commandSuggestions = [
    { label: "Show commands", command: "help" },
    { label: "List projects", command: "list projects" },
    { label: "Search AI projects", command: "search ai" },
    { label: "Open projects page", command: "open projects" },
    { label: "Show socials", command: "social" },
    { label: "Clear terminal", command: "clear" },
  ];

  const runCommand = (input: string) => {
    const value = input.trim().toLowerCase();
    if (!value) return;

    if (value === "clear") {
      setHistory([]);
      return;
    }

    let output = "Bad command. Type `help`.";
    if (value === "help") {
      output =
        "Commands: help, ls, whoami, pwd, date, about, list projects|skills|experience, project <n>, search <term>, open about|projects|experience|skills|contact, social, history, clear";
    } else if (value === "ls") {
      output = "about.txt  projects/  skills.txt  experience.log  contact.card";
    } else if (value === "whoami") {
      output = "feneel :: full-stack engineer";
    } else if (value === "pwd") {
      output = "C:\\FENEEL\\PORTFOLIO";
    } else if (value === "date") {
      output = new Date().toLocaleString();
    } else if (value === "about") {
      output = aboutText.trim().split("\n")[0];
    } else if (value === "list projects" || value === "projects") {
      output = projectsData
        .slice(0, 5)
        .map((project, index) => `${index + 1}. ${project.title}`)
        .join("\n");
    } else if (value === "list skills" || value === "skills") {
      output = topSkills;
    } else if (value === "list experience") {
      output = "Use `open experience` to view complete work history.";
    } else if (value.startsWith("project ")) {
      const projectNumber = Number(value.replace("project ", "").trim());
      const selected = Number.isInteger(projectNumber)
        ? projectsData[projectNumber - 1]
        : undefined;
      output = selected
        ? `${selected.title}\n${selected.description}\nStack: ${selected.tech.join(
            ", "
          )}${selected.github ? `\nGitHub: ${selected.github}` : ""}`
        : "Project not found. Try `project 1`.";
    } else if (value === "contact") {
      output =
        "Email: feneeldoshi@gmail.com | LinkedIn: linkedin.com/in/feneeldoshi | GitHub: github.com/feneel";
    } else if (value === "social") {
      output =
        "Email: mailto:feneeldoshi@gmail.com\nGitHub: https://github.com/feneel\nLinkedIn: https://linkedin.com/in/feneeldoshi";
    } else if (value === "resume") {
      output = "Use the Experience page for role history and impact highlights.";
    } else if (value === "history") {
      output = commandHistory.length
        ? commandHistory.map((item, index) => `${index + 1}. ${item}`).join("\n")
        : "No command history yet.";
    } else if (value.startsWith("search ")) {
      const query = value.replace("search ", "").trim();
      const results = projectsData
        .filter(
          (project) =>
            project.title.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query) ||
            project.tech.some((tech) => tech.toLowerCase().includes(query))
        )
        .slice(0, 5)
        .map((project, index) => `${index + 1}. ${project.title}`);

      output = results.length
        ? `Results for "${query}":\n${results.join("\n")}`
        : `No results found for "${query}".`;
    } else if (value.startsWith("open ")) {
      const route = value.replace("open ", "").trim();
      const routeMap: Record<string, string> = {
        about: "/about",
        projects: "/projects",
        experience: "/experience",
        skills: "/skills",
        contact: "/contact",
      };
      if (routeMap[route]) {
        output = `Opening ${routeMap[route]} ...`;
        if (typeof window !== "undefined") {
          window.location.href = routeMap[route];
        }
      }
    }

    setCommandHistory((current) => [...current, input]);
    setHistory((current) => [...current, `$ ${input}`, output]);
    setHistoryIndex(-1);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = command;
    setCommand("");
    runCommand(value);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!commandHistory.length) return;

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const nextIndex =
        historyIndex < commandHistory.length - 1
          ? historyIndex + 1
          : commandHistory.length - 1;
      setHistoryIndex(nextIndex);
      setCommand(commandHistory[commandHistory.length - 1 - nextIndex]);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = historyIndex - 1;
      if (nextIndex < 0) {
        setHistoryIndex(-1);
        setCommand("");
        return;
      }
      setHistoryIndex(nextIndex);
      setCommand(commandHistory[commandHistory.length - 1 - nextIndex]);
      return;
    }

    if (event.key === "Tab") {
      event.preventDefault();
      const match = commandSuggestions.find((suggestion) =>
        suggestion.command.startsWith(command.toLowerCase())
      );
      if (match) {
        setCommand(match.command);
      }
    }
  };

  const renderLine = (line: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = line.split(urlRegex);
    return parts.map((part, index) => {
      if (part.startsWith("http://") || part.startsWith("https://")) {
        return (
          <a
            key={`${part}-${index}`}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.terminalLink}
          >
            {part}
          </a>
        );
      }
      return <span key={`${part}-${index}`}>{part}</span>;
    });
  };

  return (
    <section className={styles.home} data-aos="fade-up">
      {devMode ? (
        <div className={`container ${styles.terminalShell}`}>
          <div className={styles.terminalHeader}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <p>C:\FENEEL&gt;</p>
          </div>
          <div
            className={styles.terminalBody}
            onClick={() => inputRef.current?.focus()}
            role="presentation"
          >
            {history.map((line, index) => (
              <p key={`${line}-${index}`}>{renderLine(line)}</p>
            ))}
            <p className={styles.terminalHint}>
              Suggested:
            </p>
            <div className={styles.suggestionRow}>
              {commandSuggestions.map((item) => (
                <button
                  key={item.command}
                  type="button"
                  className={styles.suggestionChip}
                  onClick={() => {
                    setCommand(item.command);
                    inputRef.current?.focus();
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <form onSubmit={onSubmit} className={styles.commandForm}>
              <span>$</span>
              <input
                ref={inputRef}
                value={command}
                onChange={(event) => setCommand(event.target.value)}
                onKeyDown={onKeyDown}
                placeholder="help"
                aria-label="Terminal command input"
              />
            </form>
          </div>
        </div>
      ) : (
        <>
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
              <strong>3 yrs</strong>
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
        </>
      )}
    </section>
  );
}
