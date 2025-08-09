import { useEffect, useState } from "react";
import NavButton from "../sharedComponent/NavButton/NavButton";
import styles from "./Navbar.module.css";
import { FaHome, FaProjectDiagram, FaUser, FaFileAlt } from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <nav>
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
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
