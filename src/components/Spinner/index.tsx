import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import styles from "./styles.module.scss";

export function Spinner() {
  const { theme } = useContext(ThemeContext);

  return <div className={`${styles.container} ${styles[theme]}`} />;
}
