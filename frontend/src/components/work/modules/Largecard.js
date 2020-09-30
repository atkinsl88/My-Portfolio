import React from 'react'
import { Link } from 'react-router-dom'

const Largecard = ({ proj_title, proj_img, proj_desc, id }) => (

  <section>  

    <div className="large-card">
      <div className="large-card-img">
        <img src={proj_img} alt=""></img>
      </div>
      <div className="large-card-txt">
        <h5>{proj_title}</h5>
        <p>{proj_desc}</p>
        <Link to={`/large/${id}`} className="link-spacing">+ Read more</Link>
      </div>
    </div>
  

  </section>

)

export default Largecard