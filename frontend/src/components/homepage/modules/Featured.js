import React from 'react'
import pensacola from '../../../assets/pensacola.png'
import park from '../../../assets/park-house.png'

const Featured = () => (

  <section>

    <div className="feature-container">

      <div className="title">
        <h2>featured</h2>
        <p>Recent work</p>
        <a>+ More</a>
      </div>

      <div className="featured-wrapper">
        <div className="feature">
          <img src={pensacola} alt="logo" />
          <p>Pensacola</p>
          <a>+ Read more</a>
        </div>
        <div className="divider">
        </div>
        <div className="feature">
          <img src={park} alt="logo" />
          <p>Pensacola</p>
          <a>+ Read more</a>
        </div>
      </div>

    </div>

  </section>

)

export default Featured