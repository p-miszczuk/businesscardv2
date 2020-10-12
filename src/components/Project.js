import React from "react";

const Project = ({ name, img, desc, shortDesc, tech, link, github }) => {
  return (
    <div className="project">
      <img src={img} alt="img" />
      <div className="project__content">
        <div className="project__name">
          <a href={link} rel="noopener noreferrer" target="_blank">
            {name}
          </a>
        </div>
        <div className="project__desc">{shortDesc || desc}</div>
        <div className="project__actions">
          <div className="project__action project__action--github">
            Kod źródłowy
          </div>
          <div className="project__action project__action--desc">
            Opis projektu
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
