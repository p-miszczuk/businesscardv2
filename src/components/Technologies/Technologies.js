import React from "react";
import ReactTooltip from "react-tooltip";
import Technologie from "./Technologie";

const Technologies = ({ stack }) => {
  const getTooltipContent = (value) => {
    let renderTooltip = null;

    if (value) {
      renderTooltip = value.map(({ id, name, img }) => (
        <div key={id} className="tooltip__item">
          <img src={img} alt="" />
          <div className="tooltip__name">{name}</div>
        </div>
      ));
    }

    return renderTooltip;
  };

  return (
    <div className="about__stack">
      <h2>Umiejętności i technologie</h2>
      <div className="about__stack-content">
        {stack &&
          stack.good &&
          stack.good.map((good) => <Technologie key={good.id} tech={good} />)}
      </div>
      <h3>Podstawy lub trochę więcej...</h3>
      <div className="about__stack-content">
        {stack &&
          stack.basic &&
          stack.basic.map((basic) => (
            <Technologie key={basic.id} basicColor tech={basic} />
          ))}
      </div>
      <ReactTooltip
        id="technologie"
        backgroundColor="#222222"
        borderColor="#fff"
        type="info"
        className="tooltip__technologie"
        getContent={(content) => getTooltipContent(JSON.parse(content))}
      />
    </div>
  );
};

export default Technologies;
