import { useContext } from "react";
import { ButtonProps } from "../../interfaces/buttonProps";
import { ThemeContext } from "../../contexts/ThemeContext";

import styles from "./styles.module.scss";

export function Button({ children, ...rest }: ButtonProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <button className={`${styles.container} ${styles[theme]}`} {...rest}>
      {children}
    </button>
  );
}
