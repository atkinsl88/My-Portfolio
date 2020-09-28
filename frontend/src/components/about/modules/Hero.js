import React from 'react'
import aboutHero from '../../../assets/aboutHero.jpg'
import heroHero2 from '../../../assets/heroHero2.jpg'

const Hero = () => (

  <section>

    <div className="hero-lrg-container">

      <div className="hero-lrg-lft">
        <div className="hero-txt-lft">
          <p>Digital deisgn and development has always been a passion of mine, in 2020 I decided to transition from Digital Project Manager to Software Engineer.</p>
        </div>
        <div className="hero-sec-img">
          <img src={heroHero2} alt="logo" />
        </div>
      </div>

      <div className="hero-lrg-rgt">
        <div className="hero-img">
          <img src={aboutHero} alt="logo" />
        </div>
      </div>

    </div>

  </section>
  
)

export default Hero