import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'

import Roster from './Roster'
import Schedule from './Schedule'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/products' component={Products}/>
      <Route exact path='/contact' component={Contact}/>

      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)

export default Main
