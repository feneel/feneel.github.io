import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
        <footer className="bg-dark text-white text-center py-3">
        <p className="mb-2">© {new Date().getFullYear()} Feneel Doshi. All rights reserved.</p>
        <div>
          <a
            href="mailto:feneeldoshi@gmail.com"
            className="text-white mx-3"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://github.com/feneel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/feneeldoshi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
      </div>
    </footer>
  );
}
