import { useEffect, useState } from "react";
import NavButton from "../sharedComponent/NavButton/NavButton";
import styles from "./Navbar.module.css";
import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaFileAlt,
  FaBars,
  FaTimes,
  FaGithub,
} from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>js</div>

      <nav className={styles.desktopNav}>
        <ul className={styles.navlinks}>
          <li>
            <NavButton to="/">
              <FaHome className={styles.icon} /> Home
            </NavButton>
          </li>
          <li>
            <NavButton to="/projects">
              <FaProjectDiagram className={styles.icon} /> Projects
            </NavButton>
          </li>
          <li>
            <NavButton to="/about">
              <FaUser className={styles.icon} /> About
            </NavButton>
          </li>
          <li>
            <NavButton to="/resume">
              <FaFileAlt className={styles.icon} /> Resume
            </NavButton>
          </li>
          <li>
            <a
              href="https://github.com/Jasan7/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubBtn}
            >
              <FaGithub className={styles.giticon} /> GitHub
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <NavButton to="/" onClick={() => setMenuOpen(false)}>
            <FaHome className={styles.icon} /> Home
          </NavButton>
          <NavButton to="/projects" onClick={() => setMenuOpen(false)}>
            <FaProjectDiagram className={styles.icon} /> Projects
          </NavButton>
          <NavButton to="/about" onClick={() => setMenuOpen(false)}>
            <FaUser className={styles.icon} /> About
          </NavButton>
          <NavButton to="/resume" onClick={() => setMenuOpen(false)}>
            <FaFileAlt className={styles.icon} /> Resume
          </NavButton>
          <a
            href="https://github.com/Jasan7/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubBtnMobile}
          >
            <FaGithub /> GitHub
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
