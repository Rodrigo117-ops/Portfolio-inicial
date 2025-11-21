import React from "react";
import styles from "../App.module.css";

const ProjectCard = ({ project }) => {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectImagePlaceholder}>
        <span>{project.title[0]}</span>
      </div>

      <div className={styles.projectContent}>
        <h3>{project.title}</h3>
        <p className={styles.projectShort}>{project.shortDescription}</p>
        <p className={styles.projectDescription}>{project.description}</p>

        <ul className={styles.techList}>
          {project.techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className={styles.projectLinks}>
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            Repositório
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              Demo online
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
