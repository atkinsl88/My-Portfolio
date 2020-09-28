import React from 'react'
import { getSingleLarge } from '../../../lib/api'

import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'

class Largeshow extends React.Component {
  
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
            <h1>{large.proj_title}</h1>
          </div>

          <div className="largecard-intro">
            <div className="descr">
              <p>{large.proj_desc}</p>
            </div>
            <div className="link-spacing">
              <a href={large.url} target="_blank">+ View Website</a>
              <a href={large.url2} target="_blank">+ View Github</a>
            </div>
          </div>

          <div className="largecard-hero-wrapper">
            <div className="largecard-hero-wrapper-img">
              <img src={large.proj_img} alt="logo" />
            </div>
          </div>

          <div className="txtimg-container extra-mar">

            <div className="txtimg-lft">
              <div className="txt-lft text-space">
                <h4>{large.para_one_title}</h4>
                <p>{large.para_one_copy}</p>
              </div>
            </div>

            <div className="txtimg-rgt ">
              <div className="img-rgt">
                <img src={large.para_one_img} alt="logo" />
              </div>
            </div>

          </div>

          <div className="txtimg-container">

            <div className="txtimg-lft text-space">
              <div className="img-lft">
                <img src={large.para_two_img} alt="logo" />
              </div>
            </div>

            <div className="txtimg-rgt">
              <div className="txt-rgt">
                <h4>{large.para_two_title}</h4>
                <p>{large.para_two_copy}</p>
              </div>
            </div>

          </div>

          <div className="txtimg-container">

            <div className="txtimg-lft text-space">
              <div className="txt-lft">
                <h4>{large.para_three_title}</h4>
                <p>{large.para_three_copy}</p>
              </div>
            </div>

            <div className="txtimg-rgt">
              <div className="img-rgt">
                <img src={large.para_three_img} alt="logo" />
              </div>
            </div>

          </div>



        </div>

        <Footer />

      </section>
    )
  }
}

export default Largeshow
