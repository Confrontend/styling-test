import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AppSc from "./App.sc";
import { ThemeProvider } from "./components/styled-components/theme/theme-provider-sc";

console.log(document.getElementById("root"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <AppSc />
  </ThemeProvider>
);
