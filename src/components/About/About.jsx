import styles from "./About.module.css";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.heading}>Let me introduce <span className="special">Myself</span> </h2>

      <div className={styles.content}>
        <p className={styles.intro}>
          Hi Everyone, I am{" "}
          <span className="special">Jasandeep Singh</span>.
        </p>
        <p className={styles.description}>
          I am a frontend developer with 3 years of hands-on experience in
          building scalable and responsive web applications. Over the past few
          years, I have worked extensively with modern technologies like{" "}
          <span className={styles.techHighlight}>
            React.js, Redux, JavaScript (ES6+), HTML, CSS
          </span>
          , focusing on creating intuitive user interfaces and delivering
          seamless user experiences.
        </p>

        <div className={styles.section}>
          <h3>🎓 Education</h3>
          <p>
            <strong>B.Tech in Computer Science Engineering</strong>
            <span className={styles.university}>
              Guru Gobind Singh Indraprastha University (2018 - 2022) CGPA: 8.2
            </span>
          </p>
        </div>

        {/* Tech Stack */}
        <Skills />
      </div>
    </section>
  );
};

export default About;
