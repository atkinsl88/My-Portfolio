import React from 'react'
import linkedin from '../../../assets/linkedin.png'
import git from '../../../assets/git.png'
import curriculum from '../../../assets/curriculum.png'
import profile from '../../../assets/profile.jpg'

const Summary = () => (
  <section>

    <div className="summary-container">

      <div className="summary-lft">
        <div className="txt-lft">
          <h2>Profile</h2>
          <p>You can find a copy of my latest CV, and link to my Github repositories, and other contact details below.</p>
        </div>
      </div>

      <div className="summary-rgt">
        <div className="img-rgt">
          <img src={profile} alt="logo" className="summary-large"/>
          <p>Liam Atkins</p>
          <p>Software Engineer</p>
          <div className="social">
            <a href="https://www.linkedin.com/in/liam-atkins-51753444/" target="_blank"><img src={linkedin} alt="logo"/></a>
            <a href="https://github.com/atkinsl88" target="_blank"><img src={git} alt="logo" /></a>
            <a href="https://drive.google.com/file/d/1pEZYY4jBR3WVIJzIlS9TiqFFCsBb6LmB/view?usp=sharing" target="_blank"><img src={curriculum} alt="logo"/></a>
          </div>
        </div>
      </div>

    </div>

  </section>
)

export default Summary