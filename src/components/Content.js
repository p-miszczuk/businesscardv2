import {
  Route,
  Switch,
} from 'react-router-dom'
import Home from '../pages/Home'
import React from 'react'

const Content = () => {
  return (
    <div className="wrapper__content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          About
        </Route>
        <Route path="/projects">
          Projects
        </Route>
        <Route path="/contact">
          Content
        </Route>
      </Switch>
    </div>
  )
}

export default Content
