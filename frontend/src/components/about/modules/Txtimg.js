import React from 'react'
import development from '../../../assets/development.jpg'

const Txtimg = () => (
  <section>

    <div className="txtimg-container">

      <div className="txtimg-lft">
        <div className="txt-lft">
          <h4>Development</h4>
          <p>In September 2020 I graduated from General Assembly's Software Engineering Immersive course and have since been working as a Software Developer on a freelance basis delivering websites and applications local clients.</p>
        </div>
      </div>

      <div className="txtimg-rgt img-none">
        <div className="img-rgt">
          <img src={development} alt="logo" />
        </div>
      </div>

    </div>

  </section>
)

export default Txtimg