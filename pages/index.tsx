import React from "react";
import type {NextPage, GetStaticProps} from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

import ArrowAnimated from "@components/ArrowAnimated";
import StyledButton from "@components/StyledButton";
import ProjectCard from "@components/ProjectCard";
import Footer from "@components/Footer";

interface Props {
  skills: Skills;
  projects: Project[];
}

const Home: NextPage<Props> = ({skills, projects}) => {
  return (
    <>
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
          <h4 className={styles.title}>👋 Hi!</h4>

          <h1 className={styles.description}>
            I&apos;m <b>{"Joaquín Montes"}</b>, a frontend developer passionate about technology and
            self&#8209;taught learning.
          </h1>

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
            <StyledButton isUpperCase color="secondary" url="#contact">
              Contact
            </StyledButton>
            <StyledButton isUpperCase color="primary" url="#projects">
              Projects
            </StyledButton>
          </div>

          <a className={styles.down} href="#skills">
            <ArrowAnimated />
          </a>
        </section>

        <section className={styles.grid} id="skills">
          <h2 className={styles.italic}>Some technologies I worked with are</h2>
          {Object.entries(skills).map(([category, values]) => (
            <article key={category} className={styles.category}>
              <h3>{category}</h3>
              <ul>
                {values.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className={styles.stack} id="projects">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const skillsRes = await fetch(`${process.env.BASE_URL}/api/skills`);
  const skills = await skillsRes.json();

  const projectsRes = await fetch(`${process.env.BASE_URL}/api/projects`);
  const projects = await projectsRes.json();

  return {
    props: {
      skills,
      projects,
    },
  };
};

export default Home;
