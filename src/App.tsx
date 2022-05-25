import { ChangeEvent, FormEvent, useState } from "react";
import { Repository } from "./interfaces/repository";
import { api } from "./service/api";

import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { RepositoryList } from "./components/RepositoryList";
import { AxiosError } from "axios";

import { ImSearch } from "react-icons/im";

import styles from "./styles/app.module.scss";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { ToggleTheme } from "./components/ToggleTheme";
import { Spinner } from "./components/Spinner";

export function App() {
  const [user, setUser] = useState("");
  const [repositoryList, setRepositoryList] = useState<Repository[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onUserChange(event: ChangeEvent<HTMLInputElement>) {
    setUser(event.target.value);
  }

  async function handleSearchRepositoryList(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    if (user.trim()) {
      try {
        const { data } = await api.get<Repository[]>(`/users/${user}/repos`);

        setError("");
        setRepositoryList(data);
        setIsLoading(false);
      } catch (err) {
        const typeError = err as AxiosError;

        if (typeError.response?.status === 404) {
          setError("Usuário não encontrado");
        }

        setIsLoading(false);
      }
    }
  }

  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${styles.container} ${styles[theme]}`}>
      <ToggleTheme />
      <form onSubmit={handleSearchRepositoryList}>
        <Input
          placeholder="Usuário do Github"
          value={user}
          onChange={onUserChange}
          messageError={error}
        />
        <Button type="submit">
          <ImSearch />
        </Button>
      </form>
      <hr />
      {isLoading ? (
        <Spinner />
      ) : (
        <RepositoryList repositoryList={repositoryList} />
      )}
    </main>
  );
}
