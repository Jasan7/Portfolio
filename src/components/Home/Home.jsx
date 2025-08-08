import { ReactTyped } from "react-typed";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.intro}>
          <h1 className={styles.greeting}>
            Hi, I'm <span>Jasandeep Singh</span> 👋
          </h1>

          <ReactTyped
            strings={[
              "Software Engineer",
              "React JS Developer",
              "MERN Stack Developer",
            ]}
            typeSpeed={70}
            backSpeed={50}
            backDelay={1500}
            loop
            className={styles.typedText}
          />
        </div>
      </section>

      {/* More About Me Section */}
      <section className={styles.moreAbout}>
        <h2 className={styles.subHeading}>More About Me</h2>
        <div className={styles.aboutPoints}>
          <p>I specialize in building scalable, responsive, and dynamic web applications.</p>
          <p>I work with modern technologies like React, Node.js, Express, and MongoDB.</p>
          <p>I'm passionate about crafting clean code and intuitive UI/UX.</p>
          <p>I focus on delivering performance-driven solutions.</p>
        </div>
      </section>
    </>
  );
};

export default Home;
