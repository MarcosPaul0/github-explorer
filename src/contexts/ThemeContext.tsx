import { useState } from "react";
import { createContext } from "react";
import { ThemeContextData } from "../interfaces/themeContextData";
import { ThemeContextProviderProps } from "../interfaces/themeContextProviderProps";

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
