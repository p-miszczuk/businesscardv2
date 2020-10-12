import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import React from "react";

const Content = () => (
  <div className="wrapper__content">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/contact">Content</Route>
    </Switch>
  </div>
);

export default Content;
