import {
  FaJava,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaAndroid,
  FaTools,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiBootstrap,
  SiAngular,
  SiSpringboot,
  SiPostman,
  SiJira,
  SiHibernate,
  SiJquery,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import styles from "./Skills.module.css";
import Modal from "../../sharedComponent/Modal/Modal";
import { useState } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        icon: <FaJsSquare />,
        description:
          "Core language of my front-end work for 3 years, used extensively in ReactJS projects to create dynamic and responsive interfaces.",
      },
      {
        name: "Java",
        icon: <FaJava />,
        description:
          "Learned and applied in academic and training projects; familiar with OOP, backend services, and enterprise-level application development.",
      },
      {
        name: "C++",
        icon: <SiCplusplus />,
        description:
          "Used in academic settings to understand low-level programming, memory management, and algorithm optimization.",
      },
    ],
  },
  {
    title: "Web & Mobile Technologies",
    skills: [
      {
        name: "ReactJS",
        icon: <FaReact />,
        description:
          "My primary front-end framework for over 3 years — built scalable, component-based UIs, integrated APIs, and optimized performance.",
      },
      {
        name: "NodeJS",
        icon: <FaNodeJs />,
        description:
          "Familiar with building simple backend APIs, handling server-side logic, and integrating with databases.",
      },
      {
        name: "AngularJS",
        icon: <SiAngular />,
        description:
          "Trained in creating structured single-page applications using components, directives, and dependency injection.",
      },
      {
        name: "CSS3",
        icon: <SiCss3 />,
        description:
          "Extensive experience styling responsive layouts and animations; proficient in Flexbox, Grid, and custom animations.",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        description:
          "Recently learned, helps me rapidly design responsive UIs with a utility-first approach.",
      },
      {
        name: "jQuery",
        icon: <SiJquery />,
        description:
          "Trained in manipulating DOM elements, handling events, and making AJAX calls.",
      },
      {
        name: "HTML5",
        icon: <SiHtml5 />,
        description:
          "Strong foundation in semantic HTML, accessibility, and structuring content for SEO-friendly and user-friendly web pages.",
      },
      {
        name: "AJAX",
        icon: <FaTools />,
        description:
          "Familiar with fetching and updating data asynchronously without reloading the page.",
      },
      {
        name: "JSP",
        icon: <FaJava />,
        description:
          "Used in Java-based web applications for rendering dynamic server-side content during my training.",
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap />,
        description:
          "Used to quickly design mobile-first, responsive layouts with pre-built components during my training.",
      },
      {
        name: "ExpressJS",
        icon: <SiExpress />,
        description:
          "Familiar with building backend APIs and handling routing in NodeJS applications.",
      },
      {
        name: "React Native",
        icon: <FaReact />,
        description:
          "Trained in mobile app development, able to create cross-platform apps with shared ReactJS knowledge.",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MySQL",
        icon: <SiMysql />,
        description:
          "Familiar with designing relational schemas, writing queries, and optimizing data retrieval.",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        description:
          "Trained in creating and querying NoSQL collections for flexible, document-based storage.",
      },
    ],
  },
  {
    title: "Tools and Platforms",
    skills: [
      {
        name: "Maven",
        icon: <FaTools />,
        description:
          "Used for managing Java project dependencies and build automation during my training.",
      },
      {
        name: "Hibernate",
        icon: <SiHibernate />,
        description:
          "Familiar with ORM concepts, mapping Java classes to database tables.",
      },
      {
        name: "JDBC",
        icon: <FaJava />,
        description:
          "Used for connecting Java applications to databases in training projects.",
      },
      {
        name: "JIRA",
        icon: <SiJira />,
        description:
          "Used for tracking tasks, managing sprints, and collaborating in Agile teams.",
      },
      {
        name: "Git",
        icon: <FaGitAlt />,
        description:
          "Daily use for version control, branching, and collaborative coding on GitHub.",
      },
      {
        name: "Eclipse",
        icon: <FaJava />,
        description:
          "Worked with Java-based projects in academic and training environments.",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        description:
          "Used to test, debug, and document APIs during development.",
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot />,
        description:
          "Trained in creating REST APIs, managing configurations, and integrating with databases.",
      },
      {
        name: "Android Studio",
        icon: <FaAndroid />,
        description:
          "Used primarily during react native traning for virtual device creation.",
      },
      {
        name: "Microsoft Azure",
        icon: <VscAzure />,
        description:
          "Trained in deploying applications and managing cloud resources.",
      },
      {
        name: "AWS",
        icon: <FaAws />,
        description:
          "Basic knowledge of S3, EC2, and deploying static websites to the cloud.",
      },
    ],
  },
];

export default function Skillset() {
  const allSkills = skillCategories.flatMap((cat) => cat.skills); // Flatten into single list
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openSkill = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goPrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? allSkills.length - 1 : prev - 1));
  };

  const goNext = () => {
    setSelectedIndex((prev) => (prev === allSkills.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.skillSection}>
      {skillCategories.map((category, idx) => (
        <div key={idx} className={styles.category}>
          <h3 className={styles.heading}>{category.title}</h3>
          <div className={styles.grid}>
            {category.skills.map((skill, i) => {
              const globalIndex =
                skillCategories
                  .slice(0, idx)
                  .reduce((sum, cat) => sum + cat.skills.length, 0) + i;
              return (
                <div
                  key={i}
                  className={styles.card}
                  onClick={() => openSkill(globalIndex)}
                >
                  <div className={styles.icon}>{skill.icon}</div>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <Modal
        isOpen={selectedIndex !== null}
        onClose={closeModal}
        onPrev={goPrev}
        onNext={goNext}
      >
        {selectedIndex !== null && (
          <>
            <div className={styles.modalIcon}>
              {allSkills[selectedIndex].icon}
            </div>
            <h2>{allSkills[selectedIndex].name}</h2>
            <p>{allSkills[selectedIndex].description}</p>
          </>
        )}
      </Modal>
    </section>
  );
}
