import React from 'react'
import { Link } from 'react-router-dom'

const Smallcard = ({ proj_short_title, proj_short_img, id }) => (

  <section>
    <Link to={`/small/${id}`}>

      <div className="smol-card">
        <img src={proj_short_img} alt=""></img>
        <p>{proj_short_title}</p>
      </div>

    </Link>
  </section>

)

export default Smallcard