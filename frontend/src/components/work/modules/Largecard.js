import React from 'react'
import { Link } from 'react-router-dom'

const Largecard = ({ proj_title, proj_img, id }) => (

  <section>
    <div className="large-card">
      <img src={proj_img} alt=""></img>
      <div className="para-title">
        <p>{proj_title}</p>
        <Link to={`/large/${id}`}>+ Read more</Link>
      </div>
    </div>
  </section>

)

export default Largecard