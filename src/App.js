import {BrowserRouter as Router} from 'react-router-dom'
import React, {useState} from 'react'
import MenuButton from './components/MenuButton'
import Content from './components/Content'
import Navigation from './components/Navigation'

function App() {
  const [
    toggleNav,
    setToggleNav,
  ] = useState(false)

  const toggleNavigation = () =>
    setToggleNav(!toggleNav)

  return (
    <Router>
      <div className="app">
        <MenuButton
          doClick={toggleNavigation}
          toggleAnim={toggleNav}
        />
        <Navigation
          isNavOpen={toggleNav}
        />
        <Content
          isNavOpen={toggleNav}
        />
      </div>
    </Router>
  )
}

export default App
