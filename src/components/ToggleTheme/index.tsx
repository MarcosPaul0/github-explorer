import { useContext } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { ThemeContext } from "../../contexts/ThemeContext";

import styles from "./styles.module.scss";

export function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`${styles.container} ${styles[theme]}`}
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsMoonStars /> : <BsSun />}
    </button>
  );
}
