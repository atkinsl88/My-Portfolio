import React from 'react'
import { Link } from 'react-router-dom'

const Largecard = ({ para_one_title, para_two_img1, id }) => (

  <section>
    <Link to={`/large/${id}`}>
      <div className="large-card">
        <img src={para_two_img1} alt=""></img>
        <p>{para_one_title}</p>
      </div>
    </Link>
  </section>

)

export default Largecard