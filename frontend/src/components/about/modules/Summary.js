import React from 'react'
import image from '../../../assets/hero.png'

const Summary = () => (
  <section>

    <div className="summary-container">

      <div className="summary-lft">
        <div className="txt-lft">
          <h2>Summary</h2>
          <p>In één week gaan we samen met jou - de opdrachtgever - een digitaal product vormgeven volgens de Design Sprint methodiek van Google. Van idee naar prototype in 5 dagen.</p>
        </div>
      </div>

      <div className="summary-rgt">
        <div className="img-rgt">
          <img src={image} alt="logo" />
          <p>Liam Atkins</p>
          <p>Web Developer</p>
        </div>
      </div>

    </div>

  </section>
)

export default Summary