import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>© {new Date().getFullYear()} - JS</p>

      <div className={styles.socialLinks}>
        <a
          href="https://github.com/Jasan7"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jasandeep-singh/"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:sjasandeep7@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
