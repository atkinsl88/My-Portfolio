import React from 'react'
import { getSingleSmall } from '../../../lib/api'
import { Link } from 'react-router-dom'

import Navbar from '../../common/Navbar'
import Footerdrk from '../../common/Footerdrk'

class Smallshow extends React.Component {
  
  state = { 
    small: null 
  }

  async componentDidMount() {
    try {
      const smallId = this.props.match.params.id
      const res = await getSingleSmall(smallId)
      this.setState({ small: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if (!this.state.small) return null
    const { small } = this.state
    
    return (
      <section>

        <Navbar />

        <div className="largecard-title-container">

          <div className="largecard-title">
            <h1>{small.proj_short_title}</h1>
          </div>

          <div className="smallcard-wrapper">

            <div className="largecard-intro">
              <p>{small.proj_short_copy}</p>
              <div className="link-spacing-small">
                <a href={small.proj_short_link1} target="_blank">+ View Website</a>
                <a href={small.proj_short_link2} target="_blank">+ View Github</a>
              </div>
            </div>

            <div className="smallcard-hero-wrapper">
              <div className="largecard-hero-wrapper-img">
                <img src={small.proj_short_img} alt="logo" />
              </div>
            </div>

          </div>


        </div>

        <Footerdrk />

      </section>
    )
  }
}

export default Smallshow
