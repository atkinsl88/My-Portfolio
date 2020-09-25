import React from 'react'
import general from '../../../assets/general.png'
import wunderman from '../../../assets/wunderman.png'
import imagination from '../../../assets/imagination.png'
import investis from '../../../assets/investis.png'
import rufus from '../../../assets/rufus-leonard.png'
import ef from '../../../assets/ef.png'

const Featured = () => (

  <section>

    <div className="worked-container">

      <div className="title">
        <h3>worked with</h3>
      </div>

      <div className="subtitle">
        <p>Who I have worked with</p>
      </div>

      <div className="worked-wrapper">
        <div className="worked">
          <div className="worked-title">
            <h4>As a developer</h4>
          </div>
          
          <div className="worked-parent">
            <div className="worked-bkgrd">
              <div className="worked-img">
                <img src={general} alt="logo" />
              </div>
            </div>
            <div className="worked-bkgrd">
              <div className="worked-img">
                <img src={wunderman} alt="logo" />
              </div>
            </div>
          </div>


        </div>
        <div className="divider">
        </div>
        <div className="worked">
          <h4>As a project manager</h4>

          <div className="worked-parent">
            <div className="worked-bkgrd">
              <div className="worked-img">
                <img src={imagination} alt="logo" />
              </div>
            </div>
            <div className="worked-bkgrd">
              <div className="worked-img">
                <img src={investis} alt="logo" />
              </div>
            </div>
            <div className="worked-bkgrd">
              <div className="worked-img">
                <img src={rufus} alt="logo" />
              </div>
            </div>
            <div className="worked-bkgrd">
              <div className="worked-img">
                <img src={ef} alt="logo" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </section>

)

export default Featured