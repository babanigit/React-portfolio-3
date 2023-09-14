import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

// import { Route,  HashRouter, NavLink } from "react-router-dom";

import Splash from "../pages/0splash/Splash";
import Home from "../pages/1home/HomeComponent";
// import Experience from "../pages/3experience/Experience";
import Education from "../pages/2education/EducationComponent";
import Projects from "../pages/4projects/Projects";
import Contact from "../pages/5contact/ContactComponent";

const Main = (propss) => {
  var demo = true;
  if (demo) {
    return (
      <div>
        {/* <NavLink exact to={"/"}>
          {" "}
          clicked{" "}
        </NavLink> */}
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              // element={<Splash/>}
              // i used render instead of component
              render={() => (
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
              render={() => (
                <>
                  <Home
                    {...propss}
                    theme={propss.theme}
                    setTheme={propss.setTheme}
                  />
                </>
              )}
            />
            <Route
              path="/splash"
              render={() => (
                <Splash
                  // {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/education"
              render={(props) => (
                <Education
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            {/* <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            /> */}

            <Route
              path="/projects"
              render={(props) => (
                <Projects
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />

            <Route
              path="/contact"
              render={(props) => (
                <Contact
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
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
