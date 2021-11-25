import React from "react";
import SocialContact from "../../common/SocialContact";

const Contact = () => {
  return (
    <div className="contact">
      <label className="section-title">Contacts</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get Touch? Contact me on these Platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <a href={require("../../../assets/Resume.pdf").default} download>
            <img
              src="https://cdn-icons-png.flaticon.com/512/724/724933.png"
              alt="download-logo"
              className="resume-logo"
            />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
