import React from "react";
import Project from "../components/Project";
import { projects } from "../utils";

const Projects = () => (
  <section className="projects">
    <header className="projects__header">
      <span>?</span>
      <span />
      <h2>Portfolio</h2>
    </header>
    <div className="projects__content">
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
