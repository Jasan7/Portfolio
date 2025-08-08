import { ReactTyped } from "react-typed";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.home}>
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

        <p className={styles.description}>
          I specialize in building scalable, responsive, and dynamic web
          applications using modern technologies like React, Node.js, Express,
          and MongoDB. Passionate about crafting clean code, intuitive UI/UX,
          and delivering performance-focused solutions.
        </p>
      </div>
    </section>
  );
};

export default Home;
