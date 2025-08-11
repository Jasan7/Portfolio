import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import laptopAnimation from "./../../assets/computer.json";
import styles from "./Home.module.css";

const Home = () => {
  const { ref: aboutRef, inView: aboutVisible } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.intro}>
            <h1 className={styles.greeting}>
              Hey! <span className={styles.wave}>👋 </span>
              <span className={styles.introText}> I'm <span className={styles.name}> Jasandeep Singh</span></span>
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

          <div className={styles.heroAnimation}>
            <Lottie
              animationData={laptopAnimation}
              style={{ width: 500 }}
              loop={false}
              autoplay={false}
            />
          </div>
        </div>
      </section>
      <motion.section
        ref={aboutRef}
        className={styles.moreAboutContainer}
        initial={{ opacity: 0, y: 50 }}
        animate={aboutVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* More About Me */}
        <div className={styles.moreAbout}>
          <h2 className={styles.subHeading}>More About Me</h2>
          <div className={styles.aboutPoints}>
            {[
              "I specialize in building scalable, responsive, and dynamic web applications.",
              "I work with modern technologies like React, HTML, CSS, JavaScript and also have knowledge of framework like Angular.js.",
              "Apart from Frontend i'm also familiar with the concetps of Backend tech. stack as well like Node.js, Express.js and Java",
            ].map((point, i) => {
              const highlighted = point.replace(
                /\b(React|JavaScript|Node\.js|HTML|CSS|Express.js|web applications|MongoDB|Java|Angular.js|UI\/UX)\b/g,
                `<span class="${styles.techHighlight}">$1</span>`
              );

              return (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  dangerouslySetInnerHTML={{ __html: highlighted }}
                />
              );
            })}
          </div>
        </div>

        {/* Contact Links */}
        <div className={styles.contactSection}>
          <h2 className={styles.subHeading}>Find Me Online</h2>
          <div className={styles.contactLinks}>
            <a
              href="https://github.com/Jasan7"
              target="_blank"
              rel="noreferrer"
              className={styles.contactIcon}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jasandeep-singh/"
              target="_blank"
              rel="noreferrer"
              className={styles.contactIcon}
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:sjasandeep7@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={styles.contactIcon}
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
