import React, {AnchorHTMLAttributes, FC} from "react";

import styles from "@styles/StyledButton.module.css";

interface Props {
  color: "primary" | "secondary" | "dark";
  url: string;
  children: string;
  isUpperCase?: boolean;
}

const StyledButton: FC<Props> = ({children, color, url, isUpperCase = false}) => {
  const buttonStyle = `${styles["hvr-outline-out"]} ${styles[color]}`;
  const attributes: AnchorHTMLAttributes<HTMLAnchorElement> =
    url[0] !== "#"
      ? {
          referrerPolicy: "no-referrer",
          target: "_blank",
        }
      : {};

  return (
    <a className={buttonStyle} href={url} {...attributes}>
      {isUpperCase ? children.toUpperCase() : children}
    </a>
  );
};

export default StyledButton;
