import styles from "./Resume.module.css";
import resume from "./../../assets/Jasandeep_Resume.pdf";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  const resumeUrl = resume;

  return (
    <section className={styles.resumeSection}>
      {/* Viewable Resume */}
      <div className={styles.resumeViewer}>
        <iframe
          src={resumeUrl}
          title="Resume"
          frameBorder="0"
          className={styles.iframe}
        ></iframe>
      </div>

      {/* Download Button */}
      <a href={resumeUrl} download className={styles.downloadBtn}>
        <FaDownload /> Download Resume
      </a>
    </section>
  );
};

export default Resume;
