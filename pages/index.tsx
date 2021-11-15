import React from "react";
import type {NextPage, GetStaticProps} from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

import ArrowAnimated from "@components/ArrowAnimated";
import StyledButton from "@components/StyledButton";

interface Props {
  skills: Skills;
}

const Home: NextPage<Props> = ({skills}) => {
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
            <StyledButton isUpperCase color="secondary" tagTarget="contact">
              Contact
            </StyledButton>
            <StyledButton isUpperCase color="primary" tagTarget="projects">
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
          {Object.entries(skills).map(([category, values]) => (
            <article key={category} className={styles.project}>
              <div className={styles["project-content"]}>
                <span>💍 {values[1]}</span>
                <h3>{category}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae.
                </p>
                <p>
                  Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
                  earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
                  officia aut!
                </p>
                <StyledButton color="dark" tagTarget="https://github.com/justkahdri/just-payys">
                  See more
                </StyledButton>
              </div>
              <Image
                alt={category}
                className={styles["project-cover"]}
                height={500}
                src="/images/studio.jpg"
                width={400}
              />
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/skills`);
  const skills: Skills = await res.json();

  return {
    props: {
      skills,
    },
  };
};

export default Home;
