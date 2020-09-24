import React from 'react'
import zelda from '../../../assets/zelda.jpg'
import trump from '../../../assets/tumpkanye.jpg'

const Featured = () => (

  <section>

    <div className="other-container">

      <div className="title-area">
        <h2>other work</h2>
        <p>& achievements</p>
        <a>+ More</a>
      </div>

      <div className="other-wrapper">
        <div className="other">
          <img src={zelda} alt="logo" />
          <div className="other-txt">
            <p>Zelda - Vanilla Javascript game</p>
            <a>+ Read more</a>
          </div>
        </div>
        <div className="divider">
        </div>
        <div className="other">
          <img src={trump} alt="logo" />
          <div className="other-txt">
            <p>Trump vs. Kanye</p>
            <a>+ Read more</a>
          </div>
        </div>
      </div>

    </div>

  </section>

)

export default Featured