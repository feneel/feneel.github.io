import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Feneel Doshi. All rights reserved.</p>
      <div className={styles.icons}>
        <a href="mailto:feneeldoshi@gmail.com" aria-label="Email">
          <FaEnvelope size={20} />
        </a>

        <a
          href="https://github.com/feneel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/feneeldoshi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </footer>
  );
}
