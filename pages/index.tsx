import React from "react";
import type {NextPage} from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

import ArrowAnimated from "@components/ArrowAnimated";
import StyledButton from "@components/StyledButton";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Joaquín Montes</title>
        <meta content="Joaquín Montes | Software Developer" name="title" />
        <meta
          content="Welcome to my portfolio! Here you will see some of my work and my experience as a developer.
I'm focused on frontend dev using technologies such as NextJS and React."
          name="description"
        />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.title}>👋 Hi!</p>

          <p className={styles.description}>
            I&apos;m <b>{"Joaquín Montes"}</b>, a self-taught frontend developer focused on working
            efficiently and bringing value to my costumers.
          </p>

          <p className={styles["full-description"]}>
            During my personal projects, I worked with web development, data analysis and databases.
            Now I&apos;m diving into backend learning Node and client-server communication. My main
            objective is to become a fullstack senior developer. Maybe you can help me achieve it!
          </p>

          {/* <p>
            get in touch:
            <a href="mailto:jrmontes@estudiantes.unsam.edu.ar">jrmontes@estudiantes.unsam.edu.ar</a>
          </p> */}
          <div className={styles["two-buttons"]}>
            <StyledButton color="secondary" tagTarget="contact">
              Contact
            </StyledButton>
            <StyledButton color="primary" tagTarget="projects">
              View Projects
            </StyledButton>
          </div>

          <a className={styles.down} href="#skills">
            <ArrowAnimated />
          </a>
        </section>

        <section className={styles.grid} id="skills">
          {Array(4)
            .fill("")
            .map(() => (
              <article className={styles.category}>
                <h2>Libraries</h2>
                <ul>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                </ul>
              </article>
            ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
