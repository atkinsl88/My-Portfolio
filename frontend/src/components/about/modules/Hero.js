import React from 'react'
import image from '../../../assets/hero.png'

const Hero = () => (

  <section>

    <div className="hero-lrg-container">

      <div className="hero-lrg-lft">
        <div className="hero-txt-lft">
          <p>Project Manager turned Developer, I have over ten years experience in delivering digital products.</p>
        </div>
        <div className="hero-sec-img">
          <img src={image} alt="logo" />
        </div>
      </div>

      <div className="hero-lrg-rgt">
        <div className="hero-img">
          <img src={image} alt="logo" />
        </div>
      </div>

    </div>

  </section>
  
)

export default Hero