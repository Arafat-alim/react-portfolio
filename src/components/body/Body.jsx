import React from "react";
import Seperator from "../common/Seperator";
import "./body.css";
import About from "./parts/About";
import Contact from "./parts/Contact";
import Projects from "./parts/Projects";
import Skills from "./parts/Skills";
import Works from "./parts/Works";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
        <Seperator />
      </section>
      <section id="projects">
        <Projects />
        <Seperator />
      </section>
      <section id="skills">
        <Skills />
        <Seperator />
      </section>
      <section id="works">
        <Works />
        <Seperator />
      </section>
      <section id="contact">
        <Contact />
        <Seperator />
      </section>
    </div>
  );
}

export default Body;
