import React from "react";

const WorkCard = ({ item }) => {
  console.log(item);
  return (
    <div className="work-card">
      <div className="work-info">
        <label className="company-name">
          <a
            href="https://my.newtonschool.co/course/3fs8i8lyhg/certificate/0ilw5p9ovz3y/verify/"
            target="_blank"
            rel="noreferrer"
            className="cert-link"
          >
            {item.company}
          </a>
        </label>
        <div className="work-dates">
          <label>{item.dateJoining}</label> - <label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.workDes}</p>
        </div>
      </div>
      <img src={item.companyLogo} alt="" className="work-logo" />
    </div>
  );
};

export default WorkCard;
