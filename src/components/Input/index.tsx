import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { InputProps } from "../../interfaces/inputProps";

import styles from "./styles.module.scss";

export function Input({ labelText, messageError, ...rest }: InputProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      {labelText && <label htmlFor={rest.id}>{labelText}</label>}
      <input id={rest.id} {...rest} />
      <p>{messageError}</p>
    </div>
  );
}
