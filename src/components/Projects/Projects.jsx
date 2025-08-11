import ProjectCard from "../sharedComponent/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

const projectData = [
  {
    title: "Live Crypto Tracker",
    description:
      "A real-time crypto dashboard in React with live price updates via WebSocket, searchable coin list, and responsive UI. Optimized WebSocket management using useEffect/useRef and deployed on Vercel.",
    tech: [
      "React",
      "JavaScript",
      "Binance API",
      "Coingecko API",
      "WebSocket",
      "Tailwind CSS",
      "Vercel",
      "Git",
    ],
    github: "https://github.com/Jasan7/evalAssessment",
    live: "https://eval-assessment.vercel.app/",
  },
  {
    title: "Job Pipeline Dashboard",
    description:
      "Responsive job tracking app with Firebase authentication, allowing users to add, categorize, and manage personal job applications. Includes drag-and-drop with @dnd-kit for updating job status, with real-time sync across multiple tabs.",
    tech: ["React", "Firebase", "@dnd-kit", "CSS Modules", "JavaScript", "Git"],
    github: "https://github.com/Jasan7/work",
    live: null,
  },
  {
    title: "Product Catalog Website",
    description:
      "A product browsing and search website where users can register and log in to view products, and perform most of the actions that are available in an e-commerce application. Built with Java backend API, AngularJS frontend, and MySQL database.",
    tech: ["Java", "AngularJS", "MySQL", "Git", "CSS3", "HTML5"],
    github: "https://github.com/Jasan7/trainingproj/tree/master/Exit%20Text",
    live: null,
  },
  {
    title: "Training Projects Repository",
    description: [
      "Full-stack web applications built with React.js + Node.js/Express",
      "Java-based solutions using Spring Boot and Spring MVC (CRUD, authentication)",
      "Microservices architecture and containerization using Docker",
      "Serverless implementations with AWS Lambda",
      "Deployment on Azure VMs and backend orchestration",
      "A React Native mobile app showcasing mobile UI skills",
      "Comprehensive frontend and backend testing, modularization, and REST API integration",
    ],
    tech: [
      "Java",
      "JavaScript",
      "AngularJS",
      "Docker",
      "Azure",
      "AWS",
      "React.js",
      "React Native",
      "HTML5",
      "CSS",
      "Node.js",
      "Microservices",
    ],
    github: "https://github.com/Jasan7/trainingproj/tree/master",
    live: null,
  },
];

const Projects = () => {
  return (
    <>
      <h2 className={styles.heading}>
        My <span className="special">Projects</span>{" "}
      </h2>

      <section className={styles.projects}>
        <div className={styles.grid}>
          {projectData.map((project, index) => (
            <div
              key={index}
              className={
                index === projectData.length - 1
                  ? styles.fullWidthCard
                  : styles.gridItem
              }
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
