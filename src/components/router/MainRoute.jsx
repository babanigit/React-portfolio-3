import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Result from "./Result";
import Search from "./Search";
import About from "./About";
import Videos from "./Video";
import Menu from "./Menu";

const MainRoutes = () => {


  return (
  <>
      <div className="h-screen">
        <Menu />
        <Routes>
          <Route exact path="/" element={<Navigate to="/search" />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/result" element={<Result />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/videos" element={<Videos />} />
        </Routes>
      </div>
    </>
  );
};

export default MainRoutes;
