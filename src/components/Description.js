import React from "react";

const Description = ({ content }) =>
  content && (
    <div className="about__description">
      {content.map(({ id, text }) => (
        <p key={id} className="about__text">
          {text}
        </p>
      ))}
    </div>
  );

export default Description;
