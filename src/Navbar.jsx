import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"


export const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>

      <h2 className={styles.logo}>Sam</h2>

      {/* Hamburger */}
      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>

      {/* Navigation */}
      <ul
        className={`${styles.navLinks} ${
          menuOpen ? styles.showMenu : ""
        }`}
      >

        {/* Home */}
        <li>
          <Link
            to="/"
            className={styles.link}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>

        {/* About */}
        <li>
          <a
            className={styles.link}
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
        </li>

        {/* Skills */}
        <li>
          <a
            className={styles.link}
            href="#skills"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
        </li>

        {/* Projects */}
        <li>
          <a
            className={styles.link}
            href="#projects"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
        </li>

        {/* Experience */}
        <li>
          <a
            className={styles.link}
            href="#experience"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
        </li>

        {/* Blog */}
        <li>
          <Link
            to="/blog"
            className={styles.link}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
        </li>

        {/* Contact */}
        <li>
          <a
            className={styles.link}
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>

      </ul>

    </nav>
  );
};