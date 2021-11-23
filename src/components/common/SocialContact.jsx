import React from "react";
import "./social.css";
import { socialLinks } from "../../data/socialLinks";

const SocialContact = () => {
  const data = socialLinks;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link} target="_blank" rel="noreferrer">
            <div className="social-icon-div">
              <img src={item.icon} alt="social-icons" className="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialContact;
