import React from "react";
import { Route, Routes, HashRouter, NavLink } from "react-router-dom";

import Splash from "../pages/splash/Splash";
import Home from "../pages/home/HomeComponent";

const Main = (propss) => {
  var demo = true;
  if (demo) {
    return (
      <>
        {/* <NavLink exact to={"/"}>
          {" "}
          clicked{" "}
        </NavLink> */}

        <Routes>
          <Route
            path="/"
            exact
            // element={<Splash/>}
            Component={() => (
              <>
                <Splash
                  // {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              </>
            )}
          />
          <Route
            path="/home"
            // element={<Home/>}
            Component={() => (
              <>
                <Home
                  // {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              </>
            )}
          />

          <Route
            path="/splash"
            Component={() => (
              <Splash
                // {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
        </Routes>
      </>
    );
  } else {
    return <></>;
  }

  // return (
  //   <div>

  //   <Splash/>
  //     hello main
  //   </div>
  // )
};

export default Main;
