import React from "react";

const WorkCard = ({ item }) => {
  console.log(item);
  return (
    <div className="work-card">
      <div className="work-info">
        <label className="company-name">{item.company}</label>
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
