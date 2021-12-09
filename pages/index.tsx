import React, {useEffect, useRef, useState} from "react";
import type {NextPage, GetServerSideProps} from "next";
import Head from "next/head";
import Image from "next/image";
import {MdMail, MdOutlineDateRange} from "react-icons/md";
import {BsLinkedin, BsGithub, BsTwitter} from "react-icons/bs";

import styles from "../styles/Home.module.scss";

import ArrowAnimated from "@components/ArrowAnimated";
import StyledButton from "@components/StyledButton";
import ProjectCard from "@components/ProjectCard";
import Footer from "@components/Footer";

interface Props {
  skills: Skills;
  projects: Project[];
}

const LINKS = [
  {
    icon: MdMail,
    label: "Email",
    url: "mailto:jrmontes@estudiantes.unsam.edu.ar",
  },
  {
    url: "https://calendly.com/kahdri/15",
    icon: MdOutlineDateRange,
    label: "Book a meeting",
  },
  {
    url: "https://twitter.com/justkahdri",
    icon: BsTwitter,
    label: "Twitter",
  },
  {
    icon: BsLinkedin,
    label: "Linkedin",
    url: "https://linkedin.com/in/joaquin-montes",
  },
  {
    icon: BsGithub,
    label: "Github",
    url: "https://github.com/justkahdri",
  },
];

const Home: NextPage<Props> = ({skills, projects}) => {
  const [toTop, setToTop] = useState(false);
  const hero = useRef(null);

  const toggleToTop: IntersectionObserverCallback = (entry) => {
    entry[0].isIntersecting ? setToTop(false) : setToTop(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleToTop, {threshold: 0.2});

    hero.current && observer.observe(hero.current);

    return () => {
      observer.disconnect;
    };
  }, []);

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
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="Joaquin Montes, Joaquín Rafael Montes, Joaquín Montes, justkahdri, kahdri, developer, frontend"
          name="keywords"
        />
      </Head>

      <main className={styles.main}>
        <a
          aria-label="Go to top"
          href="#top"
          id={styles.top}
          style={toTop ? {display: "block"} : {display: "none"}}
        >
          ☝
        </a>
        <section ref={hero} className={styles.hero}>
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

        <section className={styles["cards-container"]} id="projects">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>

        <section className={styles.contact} id="contact">
          <h2>Get in touch</h2>
          <div className={styles["side-contact"]}>
            <figure>
              <Image alt="Contact Illustration" layout="fill" src="/hello.svg" />
            </figure>
            <div className={styles.links}>
              {LINKS.map(({label, url, ...Link}) => (
                <a
                  key={label}
                  className="featured"
                  href={url}
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Link.icon /> {label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
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
