import React from 'react'
import image from '../../../assets/hero.png'

const Imgtxt = () => (
  <section>

    <div className="txtimg-container">

      <div className="txtimg-lft">
        <div className="img-lft">
          <img src={image} alt="logo" />
        </div>
      </div>

      <div className="txtimg-rgt">
        <div className="txt-rgt">
          <h4>Development</h4>
          <p>Project Manager turned Developer, I have over ten years experience in delivering digital products.</p>
        </div>
      </div>

    </div>

  </section>
)

export default Imgtxt