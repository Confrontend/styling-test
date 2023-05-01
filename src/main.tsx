import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { ThemeProvider } from "./components/linaria/theme/theme-provider-linaria";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
