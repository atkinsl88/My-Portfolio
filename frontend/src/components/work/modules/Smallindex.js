import React from 'react'
import { getAllSmalls } from '../../../lib/api'

import Smallcard from './Smallcard'

class Smallindex extends React.Component {

  state = {
    smalls: []
  }

  async componentDidMount() {
    try {
      const res = await getAllSmalls()
      console.log(res)
      this.setState({ smalls: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <section>

        <div className="small-container">

          <div className="title">
            <h1>small</h1>
          </div>

          <div className="small-wrapper">
            {this.state.smalls.map(small => (
              <Smallcard key={small.id} {...small}/>
            ))}
          </div>

        </div>

      </section>
    )
  }
}

export default Smallindex