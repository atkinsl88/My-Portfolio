import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ isOpen: false })
    }
  }

  render(){
    return (

      <nav className="navbar">
        <div className="navbar-brand">
          <span onClick={this.handleToggle} className={`navbar-burger ${this.state.isOpen ? 'is-active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div className={`navbar-end navbar-menu ${this.state.isOpen ? 'is-active' : ''}`}>
          <Link to="/" className="navbar-item navbar-end">Home</Link>
          <Link to="/about" className="navbar-item navbar-end">About</Link>
          <Link to="/work" className="navbar-item navbar-end">Work</Link>
          <Link to="/contact" className="navbar-item navbar-end">Contact</Link>
        </div>
      </nav>

    )
  }
}

export default withRouter(Navbar)