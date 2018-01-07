import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/products' component={Products}/>
    </Switch>
  </main>
)

export default Main
