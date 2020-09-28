import React from 'react'
import general from '../../../assets/general.png'
import wunderman from '../../../assets/wunderman.png'
import imagination from '../../../assets/imagination.png'
import investis from '../../../assets/investis.png'
import rufus from '../../../assets/rufus-leonard.png'
import ef from '../../../assets/ef.png'
import story from '../../../assets/story.png'
import reply from '../../../assets/reply.png'

const Featured = () => (

  <section>

    <div className="worked-container">

      <div className="title">
        <h3>worked with</h3>
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
                <img src={imagination} alt="Imagination" />
              </div>
            </div>
            <div className="worked-bkgrd">
              <div className="worked-img">
                <img src={investis} alt="Investis Digital" />
              </div>
            </div>
            <div className="worked-bkgrd">
              <div className="worked-img">
                <img src={rufus} alt="Rufus Leonard" />
              </div>
            </div>
            <div className="worked-bkgrd">
              <div className="worked-img">
                <img src={ef} alt="EF" />
              </div>
            </div>
            <div className="worked-bkgrd">
              <div className="worked-img">
                <img src={story} alt="Digital Annexe" />
              </div>
            </div>
            <div className="worked-bkgrd">
              <div className="worked-img">
                <img src={reply} alt="WM Reply" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </section>

)

export default Featured