import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋 I am
          <br />
          <span className="info-name">Arafat Alim!</span>
          <br />I love experimenting with the web
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding-bro.png").default}
            alt="coding-boy"
            className="coding-boy"
          />
        </div>
      </div>
      <div className="about-bottom"></div>
    </div>
  );
};

export default About;
