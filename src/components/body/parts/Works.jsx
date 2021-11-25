import React from "react";
import { workData } from "../../../data/works";
import WorkCard from "../WorkCard";

const Works = () => {
  const data = workData;
  console.log(data);

  return (
    <div className="work">
      <label className="work-title">Works</label>
      <div className="work-list">
        {data.map((item, index) => {
          return <WorkCard item={item} key={index.toString()} />;
        })}
      </div>
    </div>
  );
};

export default Works;
