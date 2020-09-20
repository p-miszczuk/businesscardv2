import React from 'react'

const Home = () => {
  return (
    <div className="home">
      <h1>Strona główna</h1>
      <div className="home__content">
        <div className="home__name">
          <h2>Piotr Miszczuk</h2>
        </div>
        <span />
        <div className="home__developer">
          <span>
            Front End Developer
          </span>
        </div>
      </div>
      <div className="home__background-animation" />
    </div>
  )
}

export default Home
