import React from "react";
import "./App.css";

import StyledComponentTest from "./components/styled-component-test/sc-component";
import ScRealistic from "./components/styled-component-test/sc-realistic";

function AppSc() {
  return (
    <>
      <StyledComponentTest numBoxes={500} />
      <ScRealistic />
    </>
  );
}

export default AppSc;
