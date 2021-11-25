import React from "react";
import { projects } from "../../../data/projects";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  const data = projects;
  return (
    <div className="projects">
      <label className="section-title">Projects</label>
      <div>
        {data.map((item) => {
          return <ProjectCard project={item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
