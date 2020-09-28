import React from 'react'
import damienlee from '../../../assets/damienlee.jpg'
import parkhouse from '../../../assets/parkhouse.jpg'

const Featured = () => (

  <section>

    <div className="feature-container">

      <div className="title-area">
        <h2>featured</h2>
        <div className="link-spacing">
          <a href="/work">+ Read more</a>
        </div>
      </div>

      <div className="featured-wrapper">
        <div className="feature">
          <img src={damienlee} alt="logo" />
          <div className="feature-txt">
            <p>damien king lee</p>
            <div className="link-spacing">
              <a href="/large/1/">+ Read more</a>
            </div>
          </div>
        </div>
        
        <div className="divider">
        </div>

        <div className="feature">
          <img src={parkhouse} alt="logo" />
          <div className="feature-txt">
            <p>park house care home</p>
            <div className="link-spacing">
              <a href="/large/2/">+ Read more</a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </section>

)

export default Featured