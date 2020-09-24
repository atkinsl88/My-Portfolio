import React from 'react'
import damienlee from '../../../assets/damienlee.jpg'
import parkhouse from '../../../assets/parkhouse.jpg'

const Featured = () => (

  <section>

    <div className="feature-container">

      <div className="title-area">
        <h2>featured</h2>
        <p>Recent work</p>
        <a>+ More</a>
      </div>

      <div className="featured-wrapper">
        <div className="feature">
          <img src={damienlee} alt="logo" />
          <div className="feature-txt">
            <p>Damien King Lee</p>
            <a>+ Read more</a>
          </div>
        </div>
        
        <div className="divider">
        </div>

        <div className="feature">
          <img src={parkhouse} alt="logo" />
          <div className="feature-txt">
            <p>Park House Care Home</p>
            <a>+ Read more</a>
          </div>
        </div>
      </div>

    </div>

  </section>

)

export default Featured