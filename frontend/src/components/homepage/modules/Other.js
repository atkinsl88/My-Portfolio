import React from 'react'
import pensacola from '../../../assets/pensacola.png'
import park from '../../../assets/park-house.png'

const Featured = () => (

  <section>

    <div className="other-container">

      <div className="title">
        <h2>other work</h2>
        <p>& achievements</p>
        <a>+ More</a>
      </div>

      <div className="other-wrapper">
        <div className="other">
          <img src={pensacola} alt="logo" />
          <p>Pensacola</p>
          <a>+ Read more</a>
        </div>
        <div className="divider">
        </div>
        <div className="other">
          <img src={park} alt="logo" />
          <p>Pensacola</p>
          <a>+ Read more</a>
        </div>
      </div>

    </div>

  </section>

)

export default Featured