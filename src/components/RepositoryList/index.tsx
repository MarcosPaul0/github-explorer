import { RepositoryListProps } from "../../interfaces/repositoryListProps";

import { RepositoryItem } from "../RepositoryItem";

import styles from "./styles.module.scss";

export function RepositoryList({ repositoryList }: RepositoryListProps) {
  function renderRepositoryList() {
    if (repositoryList.length > 0) {
      return repositoryList.map((repository, index) => {
        return (
          <RepositoryItem
            key={index}
            name={repository.name}
            description={repository.description}
            htmlUrl={repository.html_url}
            language={repository.language}
            createdAt={repository.created_at}
            updatedAt={repository.updated_at}
          />
        );
      });
    }
  }

  return <ul className={styles.container}>{renderRepositoryList()}</ul>;
}
