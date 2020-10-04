import React from "react";
import classnames from "classnames";
import { withRouter } from "react-router-dom";

const Footer = ({ history: { location } }) => {
  const footerClasses = classnames("footer", {
    "footer--home": location.pathname === "/"
  });

  return (
    <div className={footerClasses}>
      <h4>Piotr Miszczuk &copy;{new Date().getFullYear()}</h4>
    </div>
  );
};

export default withRouter(Footer);
