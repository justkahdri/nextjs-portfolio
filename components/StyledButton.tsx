import React, {FC} from "react";

import styles from "@styles/StyledButton.module.css";

interface Props {
  color: "primary" | "secondary" | "dark";
  tagTarget: string;
  children: string;
  isUpperCase?: boolean;
}

const StyledButton: FC<Props> = ({children, color, tagTarget, isUpperCase = false}) => {
  const buttonStyle = `${styles["hvr-outline-out"]} ${styles[color]}`;

  return (
    <a className={buttonStyle} href={`#${tagTarget}`}>
      {isUpperCase ? children.toUpperCase() : children}
    </a>
  );
};

export default StyledButton;
