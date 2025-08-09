import styles from "./ProjectCard.module.css";

const ProjectCard = ({ title, description, tech, github, live }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      {Array.isArray(description) ? (
        <>
          <p>
            This repository consolidates all the projects I built during my
            training, showcasing a comprehensive tech stack and practical,
            full-stack experience.
          </p>
          <ul>
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>{description}</p>
      )}
      <div className={styles.tech}>
        {tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
      <div className={styles.links}>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {live && (
          <a href={live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
