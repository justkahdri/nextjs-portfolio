import React from "react";
import {BsGithub} from "react-icons/bs";

import styles from "@styles/Projects.module.scss";
import {PROJECTS} from "@constants";
import ProjectCard from "@components/ProjectCard";

const ProjectsSection = () => {
  return (
    <section className={styles["cards-container"]} id="projects">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
      <a
        className={styles["projects-link"]}
        href="https://github.com/justkahdri"
        referrerPolicy="no-referrer"
        rel="noopener noreferrer"
        target="_blank"
      >
        See all projects on <BsGithub />
      </a>
    </section>
  );
};

export default ProjectsSection;
