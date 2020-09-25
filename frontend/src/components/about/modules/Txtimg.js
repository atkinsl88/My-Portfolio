import React from 'react'
import image from '../../../assets/hero.png'

const Txtimg = () => (
  <section>

    <div className="txtimg-container">

      <div className="txtimg-lft">
        <div className="txt-lft">
          <h4>Development</h4>
          <p>In June 2020 I graduated from General Assembly's Software Engineering Immersive course and have since been working as a Junior Freelance Software Engineer delivering websites and applications local clients.</p>
        </div>
      </div>

      <div className="txtimg-rgt">
        <div className="img-rgt">
          <img src={image} alt="logo" />
        </div>
      </div>

    </div>

  </section>
)

export default Txtimg