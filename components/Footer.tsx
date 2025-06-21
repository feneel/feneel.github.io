import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0">© {new Date().getFullYear()} Feneel Doshi. All rights reserved.</p>
        <div>
          <a
            href="mailto:youremail@example.com"
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
            href="https://linkedin.com/in/feneel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
