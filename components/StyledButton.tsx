import React, {FC} from "react";

import styles from "@styles/StyledButton.module.css";

interface Props {
  color: "primary" | "secondary";
  tagTarget: string;
}

const StyledButton: FC<Props> = ({children, color, tagTarget}) => {
  const buttonStyle = `${styles["hvr-outline-out"]} ${styles[color]}`;

  return (
    <a className={buttonStyle} href={`#${tagTarget}`}>
      {children}
    </a>
  );
};

export default StyledButton;
