import React from "react";
import "./body.css";
import About from "./parts/About";
import Contact from "./parts/Contact";
import Projects from "./parts/Projects";
import Skills from "./parts/Skills";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
