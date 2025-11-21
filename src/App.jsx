import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <section id="sobre" className={styles.section}>
          <About />
        </section>

        <section id="projetos" className={styles.section}>
          <Projects />
        </section>

        <section id="habilidades" className={styles.section}>
          <Skills />
        </section>

        <section id="contato" className={styles.section}>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
