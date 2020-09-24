import React from 'react'
import image from '../../../assets/hero.png'

const Txtimg = () => (
  <section>

    <div className="contact-container">

      <div className="contact-lft">
        <div className="txt-lft">
          <h4>Development</h4>
          <p>Project Manager turned Developer, I have over ten years experience in delivering digital products.</p>
        </div>
      </div>

      <div className="contact-rgt">
        <div className="img-rgt">
          <img src={image} alt="logo" />
        </div>
      </div>

    </div>

  </section>
)

export default Txtimg