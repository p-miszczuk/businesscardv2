import React, { useContext } from "react";
import Cross from "../Tools/Cross";
import Tabs from "../Tools/Tabs";
import { ProjectContext } from "./index";

const ProjectDescription = () => {
  const { desc, name, setProjectId, tech } = useContext(ProjectContext);
  if (!name) return null;

  const getProjectDesc = (desc) => {
    if (desc.text) {
      return (
        <React.Fragment>
          {desc.text.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <ul>
            {desc.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </React.Fragment>
      );
    }

    return <p>{desc}</p>;
  };

  return (
    <div className="projects__full-desc">
      <Cross
        classWrapper="project__full-close"
        doClick={() => setProjectId(null)}
      />
      <div className="project__full-name">{name}</div>
      <div className="project__full-description">{getProjectDesc(desc)}</div>
      <div className="project__full-tech">
        <p>Wykorzystane technologie:</p>
        <Tabs tabs={tech} />
      </div>
    </div>
  );
};

export default ProjectDescription;
