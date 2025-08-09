import styles from "./About.module.css";

const About = () => {
  const techStack = [
    "React.js",
    "Redux",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "Git & GitHub",
    "REST APIs",
    "WebSockets",
  ];

  return (
    <section className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>

      <div className={styles.content}>
        <p className={styles.intro}>
          Hi Everyone, I am{" "}
          <span className={styles.highlight}>Jasandeep Singh</span>
        </p>
        <p className={styles.description}>
          I am a frontend developer with 3 years of hands-on experience in
          building scalable and responsive web applications. Over the past few
          years, I have worked extensively with modern technologies like{" "}
          <span className={styles.techHighlight}>
            React.js, Redux, JavaScript (ES6+), Node.js, Express, and MongoDB
          </span>
          , focusing on creating intuitive user interfaces and delivering
          seamless user experiences.
        </p>

        {/* Education */}
        <div className={styles.section}>
          <h3>🎓 Education</h3>
          <p>
            <strong>B.Tech in Computer Science Engineering</strong> Guru Gobind
            Singh Indraprastha University (2018 - 2022) CGPA: 8.2
          </p>
        </div>

        {/* Tech Stack */}
        <div className={styles.section}>
          <h3>🛠 Tech Stack</h3>
          <div className={styles.techGrid}>
            {techStack.map((tech, index) => (
              <span key={index} className={styles.techItem}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
