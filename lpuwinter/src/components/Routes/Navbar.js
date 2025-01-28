import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"
function Navbar() {
  return (
    <div>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/user'>User</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
