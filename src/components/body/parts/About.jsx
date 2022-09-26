import React from "react";
import SocialContact from "../../common/SocialContact";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi! There 👋 Welcome to My Profile. I am
          {/* <br /> */}
          <span className="info-name"> Arafat Alim!</span> I love experimenting
          with the Web
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding-bro.png").default}
            alt="coding-boy"
            className="coding-boy"
          />
        </div>
      </div>
      <div className="about-bottom">
        <SocialContact />
      </div>
    </div>
  );
};

export default About;
