import React from 'react'
import { Link } from 'react-router-dom'

const Smallcard = ({ proj_short_title, proj_short_img, proj_short_copy, proj_short_link1, proj_short_link2, id }) => (

  <section>

    <div className="small-card">
      <div className="small-card-img">
        <img src={proj_short_img} alt=""></img>
      </div>
      <div className="small-card-txt">
        <h5>{proj_short_title}</h5>
        <p>{proj_short_copy}</p>
        <div className="link-spacing">
          <a href={proj_short_link1} target="_blank">+ View Website</a>
          <a href={proj_short_link2} target="_blank">+ View Github</a>
        </div>
      </div>
    </div>
  </section>

)

export default Smallcard