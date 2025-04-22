import React from "react";
import ProjectCard from "./ProjectCard";
import "./style.css";

const Projects = () => {
  return (
    <section id="projects">
      <article className="projects_title">
        <h2>Projects</h2>
      </article>
      <article className="projects_list">
        <ProjectCard
          projectName="Landing Page Template"
          brief="Demonstration on how to implement HTML & CSS to create a landing page for a website (Project Odin)"
          github="https://github.com/Ahmad-Arabi/landing-page-odin"
          preview="https://ahmad-arabi.github.io/landing-page-odin/"
        />
        <ProjectCard
          projectName="Workout Tracking Website:"
          brief="A fitness tracking website using HTML, CSS, Bootstrap, and JavaScript, allowing users to log and monitor their workout routines (Orange Coding Academey)"
          github="https://github.com/Ahmad-Arabi/group1/tree/main"
          preview="https://tuqajr.github.io/group1/"
        />
        <ProjectCard
          projectName="E-Commerce Website (Carftify)"
          brief="Led as Scrum Master in a PHP and MySQL-based project. Managed a team to develop a web application using HTML, CSS, JavaScript, and PHP. Ensured agile workflow, coordinated team meetings, and maintained smooth project progression (Orange Coding Academey)"
          github="https://github.com/Ahmad-Arabi/php_project_group_2"
        />
        <ProjectCard
          projectName="Servecies Website (JoHotels)"
          brief="Worked with a team to build a hotel booking website with a fully functional admin dashboard using Laravel (Orange Coding Academey)"
          github="https://github.com/Ahmad-Arabi/Laravel_Project"
        />
      </article>
    </section>
  );
};

export default Projects;
