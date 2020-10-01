import React from 'react'
import profile from '../../../assets/profile.jpg'
import linkedin from '../../../assets/linkedin.png'
import git from '../../../assets/git.png'
import curriculum from '../../../assets/curriculum.png'

const Txtimg = () => (
  <section>

    <div className="contact-container">

      <div className="contact-lft">
        <div className="txt-lft">
          <h4>Information</h4>
          <p>Please find my contact details below.</p>
          <p>Tel: +44 (0) 7531219924 </p>
          <p>Email: liamatkins24@gmail.com</p>
        </div>
        <div className="divider2">
        </div>
        <div className="social">
          <h4>Social & other</h4>
          <a href="https://www.linkedin.com/in/liam-atkins-51753444/" target="_blank"><img src={linkedin} alt="logo"/></a>
          <a href="https://github.com/atkinsl88" target="_blank"><img src={git} alt="logo" /></a>
          <a href="https://drive.google.com/file/d/1pEZYY4jBR3WVIJzIlS9TiqFFCsBb6LmB/view?usp=sharing" target="_blank"><img src={curriculum} alt="logo"/></a>
        </div>
      </div>

      <div className="contact-rgt">
        <div className="img-rgt">
          <img src={profile} alt="logo" />
        </div>
      </div>

    </div>

  </section>
)

export default Txtimg