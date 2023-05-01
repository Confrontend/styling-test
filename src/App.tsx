import React, { createContext } from "react";

import LinariaTexts from "./components/linaria/linaria-test/linaria-realistic";
import LinariaBoxes from "./components/linaria/linaria-test/linaria-component";
import { useTheme } from "./components/linaria/theme/theme-provider-linaria";

function App() {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <>
      <h1>{isDarkTheme ? "Dark Theme" : "Light Theme"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <LinariaBoxes numBoxes={1000} />
      <LinariaTexts total={1000} />
    </>
  );
}

export default App;
