import React from "react";
import styles from "../App.module.css";
import { skills } from "../data/skills.js";

const Skills = () => {
  return (
    <div className={styles.container}>
      <h2>Habilidades</h2>
      <div className={styles.skillsGrid}>
        <div>
          <h3>Principais Tecnologias</h3>
          <ul className={styles.skillList}>
            {skills.main.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Outras Competências</h3>
          <ul className={styles.skillList}>
            {skills.extras.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
