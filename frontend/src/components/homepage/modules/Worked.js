import React from 'react'
import ga from '../../../assets/ga.png'

const Featured = () => (

  <section>

    <div className="worked-container">

      <div className="title">
        <h3>worked with</h3>
        <p>Who I have worked with</p>
      </div>

      <div className="worked-wrapper">
        <div className="worked">
          <div className="worked-title">
            <h4>As a developer</h4>
          </div>
          <div className="worked-bkgrd">
            <div className="worked-img">
              <img src={ga} alt="logo" />
            </div>
          </div>
        </div>
        <div className="divider">
        </div>
        <div className="worked">
          <h4>As a project manager</h4>
          <div className="worked-bkgrd">
            <div className="worked-img">
              <img src={ga} alt="logo" />
            </div>
          </div>
        </div>
      </div>

    </div>

  </section>

)

export default Featured