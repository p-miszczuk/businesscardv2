import React from "react";

const Project = ({
  id,
  name,
  img,
  desc,
  shortDesc,
  tech,
  link,
  github,
  setProjectId
}) => {
  const checkLink = (projectLink) =>
    projectLink ? (
      <a href={projectLink} rel="noopener noreferrer" target="_blank">
        {name}
      </a>
    ) : (
      name
    );

  return (
    <div className="project">
      <img src={img} alt="img" />
      <div className="project__content">
        <div className="project__name">{checkLink(link)}</div>
        <div className="project__desc">{shortDesc || desc}</div>
        <div className="project__actions">
          <div className="project__action project__action--github">
            <svg height="40" width="120">
              <rect className="project__action-anim " height="40" width="120" />
            </svg>
            <a href={github} rel="noopener noreferrer" target="_blank">
              Kod źródłowy
            </a>
          </div>
          <div
            className="project__action project__action--desc"
            onClick={(_) => setProjectId(id)}
          >
            <svg height="40" width="120">
              <rect className="project__action-anim" height="40" width="120" />
            </svg>
            <span>Opis projektu</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
