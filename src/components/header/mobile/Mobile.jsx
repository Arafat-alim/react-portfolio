import React from "react";

const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/607/607863.png"
          alt="close"
        />
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects" className="option-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/751/751429.png"
              alt="projects"
              className="option-icon"
            />
            Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <img
              src="https://cdn-icons-png.flaticon.com/512/482/482469.png"
              alt="skills"
              className="option-icon"
            />
            Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#works">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1243/1243560.png"
              alt="works"
              className="option-icon"
            />
            Works
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact" className="option-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
              alt="contact"
              className="option-icon"
            />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
