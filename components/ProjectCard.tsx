import React from "react";
import Image from "next/image";

import StyledButton from "./StyledButton";

import styles from "@styles/ProjectCard.module.css";

const ProjectCard = ({title, description, cover, tag, url, background = "#D2F3F4"}: Project) => {
  return (
    <article className={styles.project}>
      <div className={styles.content} style={{background}}>
        <span>{tag}</span>
        <h3>{title}</h3>
        {typeof description == "string" ? (
          <p>{description}</p>
        ) : (
          description.map((paragraph, i) => <p key={i}>{paragraph}</p>)
        )}
        <StyledButton color="dark" url={url}>
          See more
        </StyledButton>
      </div>
      <figure className={styles.cover}>
        <Image alt={title} layout="fill" src={`/images/${cover}`} />
      </figure>
    </article>
  );
};

export default ProjectCard;
