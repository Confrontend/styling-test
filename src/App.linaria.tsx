import React from "react";
import "./App.css";

import LinariaComponentTest from "./components/linaria-test/linaria-component";
import LinariaRealistic from "./components/linaria-test/linaria-realistic";

function AppLinaria() {
  return (
    <>
      <LinariaComponentTest numBoxes={500} />
      <LinariaRealistic />
    </>
  );
}

export default AppLinaria;
