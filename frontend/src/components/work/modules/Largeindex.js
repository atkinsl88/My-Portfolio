import React from 'react'
import { getAllLarge } from '../../../lib/api'

import Largecard from './Largecard'

class Largeindex extends React.Component {

  state = {
    larges: []
  }

  async componentDidMount() {
    try {
      const res = await getAllLarge()
      console.log(res)
      this.setState({ larges: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <section>

        <div className="large-wrapper">
          <div className="large-title">
            <h1>featured</h1>
          </div>
          <div>
            {this.state.larges.map(large => (
              <Largecard key={large.id} {...large}/>
            ))}
          </div>
        </div>

      </section>
    )
  }
}

export default Largeindex