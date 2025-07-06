"use client";
import { Typewriter } from "react-simple-typewriter";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero} data-aos="fade-up">
      <div className={styles.textWrapper}>
        <h1 className={styles.heading}>
          Hi, I’m Feneel 👋
          <br />
          <span className={styles.typewriter}>
            <Typewriter
              words={[
                "Full-Stack Developer",
                "MERN Stack Enthusiast",
                "Always learning",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className={styles.subtext}>
          I love building scalable apps and solving meaningful problems.
        </p>
        <a href="/projects" className={styles.ctaButton}>
          View My Work
        </a>
      </div>
    </section>
  );
}
