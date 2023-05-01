import React from "react";
import StyledComponentTest from "./components/styled-components/styled-component-test/sc-component";
import { useScTheme } from "./components/styled-components/theme/theme-provider-sc";
import ScTexts from "./components/styled-components/styled-component-test/sc-realistic";


function AppSc() {
  const { isDarkTheme, toggleTheme } = useScTheme();
  return (
    <>
      <h1>{isDarkTheme ? "Dark Theme" : "Light Theme"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <StyledComponentTest numBoxes={3000} />
      <ScTexts total={3000} />
    </>
  );
}

export default AppSc;
