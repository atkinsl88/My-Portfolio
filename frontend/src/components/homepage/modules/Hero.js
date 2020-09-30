import React from 'react'
import image from '../../../assets/hero.jpg'

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
          <p>Digital Project Manager turned Softward Engineer, with over ten years of experience delivering, website, business applications and more.</p>
          <div className="link-spacing">
            <a href="/about">+ About</a>
          </div>
        </div>
      </div>

    </div>

  </section>
  
)

export default Hero