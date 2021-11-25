import React from "react";
import { skillsData } from "../../../data/skills";
import SkillsCard from "../SkillsCard";

const Skills = () => {
  const data = skillsData;
  return (
    <div className="skills">
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skill-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillsCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
