import React from "react";
import styles from "../App.module.css";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h2>Projetos</h2>
      <p className={styles.sectionSubtitle}>
        Alguns dos projetos desenvolvidos durante o curso, mostrando minha evolução
        com HTML, CSS, JavaScript, React e Next.js.
      </p>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
