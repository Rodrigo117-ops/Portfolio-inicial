import React from "react";
import styles from "../App.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutGrid}>
        <div>
          <h2>Sobre Mim</h2>
          <p>
            Olá! Meu nome é Rodrigo, sou desenvolvedor front-end em formação, com foco na
            criação de interfaces web modernas, responsivas e bem estruturadas.
            Ao longo do curso desenvolvi projetos que envolvem React, PWA, Next.js
            e boas práticas de organização de código.
          </p>
          <p>
            Gosto de unir tecnologia, narrativa e experiência do usuário
            para criar aplicações que sejam claras, funcionais e visualmente agradáveis.
          </p>
          <div className={styles.aboutInfo}>
            <p><strong>Localização:</strong> Brasil</p>
            <p><strong>Área de interesse:</strong> Front-end, React, UI para jogos e narrativas interativas</p>
            <p><strong>Contato:</strong> botaumacoisamaiscriativa@gmail.com</p>
          </div>
        </div>

        <div className={styles.profileBox}>
          <div className={styles.profileAvatar}>
            R
          </div>
          <p className={styles.profileRole}>Desenvolvedor Front-end</p>
        </div>
      </div>
    </div>
  );
};

export default About;
