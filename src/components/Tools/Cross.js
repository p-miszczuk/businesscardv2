import React from "react";

const Cross = ({ classWrapper, doClick }) => {
  return (
    <div className={classWrapper}>
      <div className="cross" onClick={doClick}>
        <span />
        <span />
      </div>
    </div>
  );
};

export default Cross;
