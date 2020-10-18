import React from "react";

const Tabs = ({ tabs }) => (
  <div className="tabs">
    {Array(tabs) &&
      tabs.map((tab) => (
        <div key={tab} className="tabs__tab">
          {tab}
        </div>
      ))}
  </div>
);

export default Tabs;
