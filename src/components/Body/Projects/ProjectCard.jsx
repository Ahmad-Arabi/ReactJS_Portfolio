import React from "react";
import image from "../../../assets/images/web.svg";

const ProjectCard = ({ projectName, brief, github, preview }) => {
  return (
    <div>
      <img
        className="projects_img"
        src= {image}
        alt="project image"
      />
      <h3>{projectName}</h3>
      <p className="text">{brief}</p>
      <div className="project_links">
        <a href={github} target="_blank">
          GitHub
        </a>
        {preview ? (
          <a href={preview} target="_blank" rel="noopener noreferrer">
            Live Preview
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
