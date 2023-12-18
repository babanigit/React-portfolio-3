// will work on dark theme and cursor
// we are using props to change theme state of every components 

// import "./App.css";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
// import { CursorProvider } from "react-cursor-custom";
// import ReactGA from "react-ga";

// import ReactLogo from "./components/reactLogo/ReactLogo";
import Main from "./container/Main";
import { themes } from "./theme";
import { GlobalStyles } from "./global";

// this is for React 18 version
// import styled, {ThemeProvider } from "styled-components";
// import {Routes,Route,Navigate} from "react-router-dom";

function App() {

  const[theme, setTheme] = useState("dark");
  const[ , setTrail] = useState(true);

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Main theme={themes[theme]} setTheme={setTheme} setTrail={setTrail} />
      </ThemeProvider>
      {/* <ReactLogo /> */}
    </>
  );
}

export default App;
