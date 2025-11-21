import React from "react";
import styles from "../App.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2>Contato</h2>
      <p className={styles.sectionSubtitle}>
        Entre em contato para oportunidades, dúvidas ou para conversar sobre desenvolvimento front-end e jogos narrativos.
      </p>

      <div className={styles.contactGrid}>
        <div>
          <h3>Redes Profissionais</h3>
          <ul className={styles.contactList}>
            <li>
              <strong>Email:</strong> botaumacoisamaiscriativa@gmail.com
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/Rodrigo117-ops" target="_blank" rel="noreferrer">
                github.com/Rodrigo117-ops
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.contactBox}>
          <p>
            Se preferir, me envie uma mensagem falando um pouco sobre o projeto,
            objetivo e prazo. Terei prazer em responder.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
