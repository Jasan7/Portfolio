import { Link } from "react-router-dom";
import styles from "./NavButton.module.css";

const NavButton = ({ to, children, onClick }) => {
  return (
    <Link
      to={to}
      className={styles.navButton}
      aria-label={String(children)}
      onClick={onClick}
    >
      <span className={styles.label}>{children}</span>
    </Link>
  );
};

export default NavButton;
