import React from "react";

import styles from "@styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.centered}>
        Made with 💚 by{" "}
        <a
          className="featured"
          href="https://github.com/justkahdri"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          target="_blank"
        >
          JustKahdri
        </a>
        {" © " + new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
