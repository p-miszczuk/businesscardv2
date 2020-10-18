import React, { createContext, useEffect, useState } from "react";
import Project from "./Project";
import ProjectDescription from "./ProjectDescription";
import { projects } from "../../utils";

export const ProjectContext = createContext(null);

const ProjectContent = () => {
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    scrollToElement(projectId);
  }, [projectId]);

  const scrollToElement = (projectId) => {
    const speed = 100;
    let timer = null;

    const pageScrollTop = (position) => {
      if (position <= 0) return clearTimeout(timer);
      const newPosition = position - speed;
      timer = setTimeout(() => {
        window.scroll({
          left: 0,
          top: newPosition
        });

        pageScrollTop(newPosition);
      }, 15);
    };

    const pageScrollDown = (position, max) => {
      if (position >= max || !max) return clearTimeout(timer);
      const newPosition = position + speed;
      timer = setTimeout(() => {
        window.scroll({
          left: 0,
          top: newPosition
        });

        pageScrollDown(newPosition, max);
      }, 15);
    };

    const position = window.pageYOffset;
    if (!projectId) {
      pageScrollTop(position);
    } else {
      const doc = document.querySelector(".projects__full-desc");
      const { offsetTop } = doc;
      pageScrollDown(0, offsetTop);
    }
  };

  const projectToDescription =
    projectId && projects.find(({ id }) => projectId === id);

  const value = { setProjectId, ...projectToDescription };

  return (
    <React.Fragment>
      <div className="projects__content">
        {projects.map((project) => (
          <Project key={project.id} setProjectId={setProjectId} {...project} />
        ))}
      </div>
      <ProjectContext.Provider value={value}>
        <ProjectDescription />
      </ProjectContext.Provider>
    </React.Fragment>
  );
};

export default ProjectContent;
