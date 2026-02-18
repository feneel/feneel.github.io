import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useTheme } from "../ThemeProvider/ThemeProvider";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { devMode, setDevMode } = useTheme();

  const toggle = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    // { name: "Contact", href: "/contact" },
  ];

  const toggleDevMode = () => {
    const next = !devMode;
    setDevMode(next);
    if (next) {
      router.push("/");
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${styles.navbar}`}>
      <div className="container">
        <Link href="/" className={`navbar-brand fw-bold ${styles.brand}`}>
          Feneel Doshi
        </Link>
        <button
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className={styles.togglerLine} />
          <span className={styles.togglerLine} />
          <span className={styles.togglerLine} />
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          {!devMode && (
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
          )}
          <div className={styles.devModeWrap}>
            {devMode && (
              <Link href="/" className={styles.terminalLink}>
                Terminal
              </Link>
            )}
            <span className={styles.devModeLabel}>Dev Mode</span>
            <button
              type="button"
              onClick={toggleDevMode}
              className={`${styles.devModeToggle} ${
                devMode ? styles.devModeToggleActive : ""
              }`}
            >
              {devMode ? "ON" : "OFF"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
