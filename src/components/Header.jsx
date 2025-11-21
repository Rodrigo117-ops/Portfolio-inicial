import React from "react";
import styles from "../App.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Rodrigo • Dev Front-end</h1>
        <nav className={styles.nav}>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
