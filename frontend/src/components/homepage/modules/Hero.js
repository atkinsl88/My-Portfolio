import React from 'react'
import image from '../../../assets/hero.png'

const Hero = () => (

  <section>

    <div className="hero-container">

      <div className="hero-lft">
        <div className="hero-img">
          <img src={image} alt="logo" />
        </div>
      </div>

      <div className="hero-rgt">
        <div className="hero-txt">
          <p>Project Manager turned Developer, I have over ten years experience in delivering digital products.</p>
          <a>+ About</a>
        </div>
      </div>

    </div>

  </section>
  
)

export default Hero