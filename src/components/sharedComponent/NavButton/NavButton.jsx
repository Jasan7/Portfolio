import { Link } from "react-router-dom";
import styles from "./NavButton.module.css";

const NavButton = ({ to, children }) => {
  return (
    <Link to={to} className={styles.navButton} aria-label={String(children)}>
      <span className={styles.label}>{children}</span>
    </Link>
  );
};

export default NavButton;
