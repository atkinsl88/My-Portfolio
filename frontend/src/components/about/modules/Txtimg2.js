import React from 'react'
import design from '../../../assets/design.jpg'

const Txtimg2 = () => (
  <section>

    <div className="txtimg-container">

      <div className="txtimg-lft">
        <div className="txt-lft">
          <h4>Digital Design</h4>
          <p>Digital design is something I have always had a passion for, although I am primarily a developer, I am able to produce effective wireframes (UX) and designs using software such as Sketch, Photoshop, Invision and more.</p>
        </div>
      </div>

      <div className="txtimg-rgt img-none extra-space">
        <div className="img-rgt">
          <img src={design} alt="logo" />
        </div>
      </div>

    </div>

  </section>
)

export default Txtimg2