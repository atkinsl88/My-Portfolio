import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/homepage/Home'
import About from './components/about/About'
import Work from './components/work/Work'
import Smallshow from './components/work/modules/Smallshow'
import Largeshow from './components/work/modules/Largeshow'
import Contact from './components/contact/Contact'

const App = () => {

  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route path="/small/:id" component={Smallshow} />
        <Route path="/large/:id" component={Largeshow} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App