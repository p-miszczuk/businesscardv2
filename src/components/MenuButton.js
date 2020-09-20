import React from 'react'

const MenuButton = ({
  doClick,
  toggleAnim,
}) => (
  <div
    className="navigation-button"
    onClick={doClick}
    role="button"
  >
    <div
      id="menu-svg"
      className={
        toggleAnim ? 'anim' : ''
      }
    >
      <svg viewBox="-3,-5,30,30">
        <path
          id="p1"
          d="M0,0 25,0 C25,0 50,10 22,18 C22,18 22,18 3,2"
        />
        <path
          id="p2"
          d="M0,10 L25,10"
        />
        <path
          id="p3"
          d="M0,20 25,20 C25,20 50,10 22,2 C22,2 22,2 3,18"
        />
      </svg>
    </div>
  </div>
)

export default MenuButton
