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
  SiExpress
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import styles from "./Skills.module.css";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C++", icon: <SiCplusplus /> },
    ],
  },
  {
    title: "Web & Mobile Technologies",
    skills: [
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "jQuery", icon: <SiJquery /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "AJAX", icon: <FaTools /> },
      { name: "JSP", icon: <FaJava /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "AngularJS", icon: <SiAngular /> },
      { name: "ExpressJS", icon: <SiExpress /> },
      { name: "ReactJS", icon: <FaReact /> },
      { name: "NodeJS", icon: <FaNodeJs /> },
      { name: "React Native", icon: <FaReact /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Mongo DB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Tools and Platforms",
    skills: [
      { name: "Maven", icon: <FaTools /> },
      { name: "Hibernate", icon: <SiHibernate /> },
      { name: "JDBC", icon: <FaJava /> },
      { name: "JIRA", icon: <SiJira /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Eclipse", icon: <FaJava /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Android Studio", icon: <FaAndroid /> },
      { name: "Microsoft Azure", icon: <VscAzure /> },
      { name: "AWS", icon: <FaAws /> },
    ],
  },
];

export default function Skillset() {
  return (
    <section className={styles.skillSection}>
      {skillCategories.map((category, idx) => (
        <div key={idx} className={styles.category}>
          <h3 className={styles.heading}>{category.title}</h3>
          <div className={styles.grid}>
            {category.skills.map((skill, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.icon}>{skill.icon}</div>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
