import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg shadow-sm sticky-top ${styles.navbar}`}
    >
      <div className="container">
        <Link href="/" className={`navbar-brand fw-bold ${styles.brand}`}>
          Feneel Doshi
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks.map(({ name, href }) => (
              <li key={href} className="nav-item">
                <Link
                  href={href}
                  className={`nav-link ${styles.navLink} ${
                    pathname === href ? styles.active : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
