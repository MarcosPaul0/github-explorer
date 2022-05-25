import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { RepositoryItemProps } from "../../interfaces/repositoryItemProps";

import styles from "./styles.module.scss";

export function RepositoryItem({
  name,
  createdAt,
  updatedAt,
  description,
  language,
  htmlUrl,
}: RepositoryItemProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <li className={`${styles.container} ${styles[theme]}`}>
      <a href={htmlUrl} target="_blank">
        <h1>{name}</h1>
      </a>
      <span>
        Criado em:{" "}
        {new Intl.DateTimeFormat("pt-BR", {
          timeZone: "UTC",
          dateStyle: "full",
        }).format(new Date(createdAt))}
      </span>
      <span>
        Últia atualização:{" "}
        {new Intl.DateTimeFormat("pt-BR", {
          timeZone: "UTC",
          dateStyle: "full",
        }).format(new Date(updatedAt))}
      </span>
      <p>Descrição: {description ? description : "Não possui descrição"}</p>
      <span>Linguagem Predominante: {language}</span>
    </li>
  );
}
