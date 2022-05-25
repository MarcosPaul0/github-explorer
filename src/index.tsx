import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ThemeContextProvider } from "./contexts/ThemeContext";

import "./styles/reset.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>
);
