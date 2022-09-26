import React from "react";

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demoLink && (
            <a
              className="project-link"
              href={project.demoLink}
              rel="noreferrer"
              target="_blank"
            >
              <div className="link-button">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/52/52349.png"
                  alt=""
                />
                Visit
              </div>
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} rel="noreferrer" target="_blank">
              <div className="link-button">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                />
                GitHub Links
              </div>
            </a>
          )}
        </div>
        <p>{project.desc}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} alt="projectImage" className="project-image" />
    </div>
  );
};

export default ProjectCard;
