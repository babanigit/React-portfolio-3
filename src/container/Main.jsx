import React from "react";
import { Route, Routes, HashRouter, NavLink } from "react-router-dom";

import Splash from "../pages/splash/Splash";

const Main = () => {
  var demo = true;
  if (demo) {
    return (
      <>

      <NavLink exact to={"/splash"} > search </NavLink>

        <Routes basename="/">
          <Route path="/" exact render={() => <Splash />} />
          <Route
          exact
            path="/splash"
            element={<Splash/>}
            render={(e) => (
              <Splash
                // {...props}
                // theme={propss.theme}
                // setTheme={propss.setTheme}
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
