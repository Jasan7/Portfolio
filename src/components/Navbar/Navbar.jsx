import { useEffect, useState } from "react";
import NavButton from "../sharedComponent/NavButton/NavButton";
import styles from "./Navbar.module.css";

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
      <div className={styles.logo}>js.</div>
      <nav>
        <ul className={styles.navlinks}>
          <li>
            <NavButton to="/">Home</NavButton>
          </li>
          <li>
            <NavButton to="/projects">Projects</NavButton>
          </li>
          <li>
            <NavButton to="/about">About</NavButton>
          </li>
          <li>
            <NavButton to="/resume">Resume</NavButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
