import React from "react";

import styles from "@styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.centered}>
        Made with 💚 by{" "}
        <a
          className={styles.featured}
          href="https://github.com/justkahdri"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          target="_blank"
        >
          JustKahdri
        </a>
        {" © " + new Date().getFullYear()}
      </p>
      <section className={styles.links} id="contact">
        <a
          className={styles.featured}
          href="mailto:jrmontes@estudiantes.unsam.edu.ar"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          target="_blank"
        >
          Mail
        </a>
        <a
          className={styles.featured}
          href="https://github.com/justkahdri"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </a>
        <a
          className={styles.featured}
          href="https://linkedin.com/in/joaquin-montes"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </section>
    </footer>
  );
};

export default Footer;
