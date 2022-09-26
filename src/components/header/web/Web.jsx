import React from "react";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects" className="option-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/751/751429.png"
            alt="projects"
            className="option-icon"
          />
          Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <img
            src="https://cdn-icons-png.flaticon.com/512/482/482469.png"
            alt="skills"
            className="option-icon"
          />
          Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#works">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1243/1243560.png"
            alt="works"
            className="option-icon"
          />
          Works
        </a>
      </div>
      <div className="web-option">
        <a href="#contact" className="option-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
            alt="contact"
            className="option-icon"
          />
          Contact
        </a>
      </div>
      <div className="web-option">
        <a
          href="https://arafat-alim.github.io/static-repository/"
          className="option-icon"
          target="_blank"
          rel="noopener"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2048/2048844.png"
            alt="contact"
            className="option-icon"
          />
          Go!
        </a>
      </div>
    </div>
  );
}

export default Web;
