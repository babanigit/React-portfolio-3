// will work on dark theme and cursor

// import "./App.css";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
// import { CursorProvider } from "react-cursor-custom";
import ReactGA from "react-ga";

import ReactLogo from "./components/reactLogo/ReactLogo";
import Main from "./container/Main";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
// import styled, {ThemeProvider } from "styled-components";
// import {Routes,Route,Navigate} from "react-router-dom";

function App() {
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const[theme, setTheme] = useState("dark");

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Main theme={themes[theme]} setTheme={setTheme} />
      </ThemeProvider>
      <ReactLogo />
    </>
  );
}

export default App;
