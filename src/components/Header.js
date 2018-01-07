import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <div id="menu">
      <div><Link to='/home'>Home</Link></div>
      <div><Link to='/about'>About</Link></div>
      <div><Link to='/products'>Products</Link></div>
      <div><Link to='/contact' id="contact">Contact</Link></div>      
    </div>
  </header>
)

export default Header
