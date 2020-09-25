import React from 'react'
import { Link } from 'react-router-dom'

const Smallcard = ({ proj_short_title, proj_short_img, id }) => (

  <section>

    <div className="smol-card">
      <img src={proj_short_img} alt=""></img>
      <div className="para-title">
        <p>{proj_short_title}</p>
        <Link to={`/small/${id}`}>+ Read more</Link>
      </div>
    </div>
  </section>

)

export default Smallcard