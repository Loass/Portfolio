// components
import React from "react";
import Intro from "./Intro/Intro";
import Competence from "./Competence/Competence";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Formation from "./Formation/Formation";
// styles
import "./Home.css";

function Home() {
  return (
    <div className="background">
      <Intro />
      <Competence />
      <Formation />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Home;
