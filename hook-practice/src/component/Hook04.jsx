import React, { useState } from "react";
import { FunctionContextComponent } from "./useContextExample/FunctionContextComponent";
import ThemeProvider from "./useContextExample/ThemeContext";

const Hook04 = () => {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
};

export default Hook04;
