import React from 'react'
import { getSingleLarge } from '../../../lib/api'

import Navbar from '../../common/Navbar'
import Footerdrk from '../../common/Footerdrk'

class Smallshow extends React.Component {
  
  state = { 
    large: null 
  }

  async componentDidMount() {
    try {
      const largeId = this.props.match.params.id
      const res = await getSingleLarge(largeId)
      this.setState({ large: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if (!this.state.large) return null
    const { large } = this.state
    
    return (
      <section>

        <Navbar />

        <div className="largecard-title-container">

          <div className="largecard-title">
            <h1>{large.para_one_title}</h1>
          </div>

          <div className="largecard-intro">
            <p>{large.para_one_copy}</p>
          </div>

          <div className="largecard-hero-wrapper">
            <div className="largecard-hero-wrapper-img">
              <img src={large.para_two_img1} alt="logo" />
            </div>
            <div className="largecard-hero-wrapper-txt">
              <div className="skill2">
                <p>User Experience</p>
              </div>
              <div className="skill2">
                <p>User Experience</p>
              </div>
              <div className="skill2">
                <p>User Experience</p>
              </div>
              <a href={large.proj_short_link1} target="_blank">+ View Website</a>
            </div>
          </div>



        </div>

        <Footerdrk />

      </section>
    )
  }
}

export default Smallshow
