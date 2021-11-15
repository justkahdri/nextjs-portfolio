import React from "react";
import Image from "next/image";

import StyledButton from "./StyledButton";

import styles from "@styles/ProjectCard.module.css";

const ProjectCard = ({title, description, cover, tag, url}: Project) => {
  return (
    <article className={styles.project}>
      <div className={styles.content}>
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
      <Image
        alt={title}
        className={styles.cover}
        height={500}
        src={`/images/${cover}`}
        width={400}
      />
    </article>
  );
};

export default ProjectCard;
