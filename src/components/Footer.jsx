import React from "react";
import styles from "../App.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} Rodrigo • Portfólio de Desenvolvimento</p>
      </div>
    </footer>
  );
};

export default Footer;
