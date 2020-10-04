import React, { useState, useRef, useLayoutEffect } from "react";
import classnames from "classnames";

const Technologie = ({ basicColor, tech: { id, img, name, extra } }) => {
  const [displayTech, setDisplayTech] = useState(false);
  const isBrowser = typeof window !== "undefined";
  const techRef = useRef();

  useLayoutEffect(() => {
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listener = () => {
    if (!isBrowser) return null;

    const winH = window.innerHeight;
    const elem =
      techRef && techRef.current ? techRef.current.getBoundingClientRect() : 0;

    if (winH > elem.top + 120) {
      !displayTech && setDisplayTech(true);
    }
  };

  const coverClasses = classnames("about__cover", {
    "about__cover--basic": basicColor,
    "about__cover-animation": displayTech
  });

  const aboutClasses = classnames("about__technologie", {
    "about__technologie-display": displayTech
  });

  return (
    <div
      key={id}
      className={aboutClasses}
      data-tip={extra && JSON.stringify(extra)}
      data-for="technologie"
      ref={techRef}
    >
      <div className="about__technologie-name">
        <img src={img} alt="" />
        <span>{name}</span>
      </div>
      <div className="about__technologie-extra">
        {extra &&
          extra.length > 0 &&
          extra.map(({ id, name: _name, top, left }) => (
            <span key={id} style={{ top, left }}>
              {_name}
            </span>
          ))}
      </div>
      <div className={coverClasses} />
    </div>
  );
};

export default Technologie;
