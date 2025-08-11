import { useEffect, useRef, useState } from "react";
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
  const [logoOffset, setLogoOffset] = useState({ x: 0, y: 0 });

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    // Delay adding listener to avoid instantly closing when opening
    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 3;
      const centerY = window.innerHeight / 3;

      let moveX = (e.clientX - centerX) / centerX;
      let moveY = (e.clientY - centerY) / centerY;

      const sensitivity = 2;

      moveX = Math.max(0, moveX * sensitivity);
      moveY = Math.max(0, moveY * sensitivity);

      moveX = Math.min(moveX, 1);
      moveY = Math.min(moveY, 1);

      const maxTranslate = 10;
      setLogoOffset({
        x: moveX * maxTranslate,
        y: moveY * maxTranslate,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      setLogoOffset({ x: 0, y: 0 });
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logoWrapper}>
        <div
          className={styles.logoBottom}
          style={{
            transform: `translate(${logoOffset.x * 0.3}px, ${
              logoOffset.y * 0.3
            }px)`,
            transition: "transform 0.1s ease-out",
            willChange: "transform",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          jasan();
        </div>

        <div
          className={styles.logoTop}
          style={{
            transform: `translate(${logoOffset.x}px, ${logoOffset.y}px)`,
            transition: "transform 0.1s ease-out",
            willChange: "transform",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          jasan();
        </div>
      </div>

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

      <div
        className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        ref={hamburgerRef}
      >
        <FaBars
          className={`${styles.hamburgerIcon} ${menuOpen ? styles.hidden : ""}`}
        />
        <FaTimes
          className={`${styles.hamburgerIcon} ${
            !menuOpen ? styles.hidden : ""
          }`}
        />
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu} ref={menuRef}>
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
