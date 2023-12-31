import React from "react";
import Header from "../../components/1header/Header";
import Greeting from "../../container/greeting/Greeting";
import Skills from "../../container/skills/Skills";
import Footer from "../../components/2footer/Footer";

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} setTrail={props.setTrail} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
