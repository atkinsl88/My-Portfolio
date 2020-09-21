import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/homepage/Home'
import About from './components/about/About'

const App = () => {

  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App