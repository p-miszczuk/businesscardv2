import {routes} from '../utils'
import {Link} from 'react-router-dom'
import React from 'react'
import classnames from 'classnames'

const Navigation = ({isNavOpen}) => {
  const classes = classnames(
    'navigation__wrapper',
    {
      'navigation__wrapper--open': isNavOpen,
    }
  )

  const activeMenu = classnames(
    'navigation',
    {
      navigation__active: isNavOpen,
    }
  )

  return (
    <div className={classes}>
      <div className={activeMenu}>
        <ul>
          {routes.map(
            ({id, name, path}) => (
              <li key={id}>
                <Link to={path}>
                  {name}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}

export default Navigation
