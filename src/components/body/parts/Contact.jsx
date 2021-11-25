import React from "react";
import SocialContact from "../../common/SocialContact";

const Contact = () => {
  return (
    <div className="contact">
      <div className="section-title">Contacts</div>
      <div className="contact-left">
        <div className="contact-container">
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
