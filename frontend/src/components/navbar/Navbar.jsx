import React from 'react'
import './Navbar.css'
import logo from '../../Assets/kasa.png'
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className='navbar'>

      <NavLink to="/">
        <div className='navbar__logo'>
          <img src={logo} alt="logo" />
        </div>
      </NavLink>

      <NavLink to="/">
        <div>Acceuil</div>
      </NavLink>
      <NavLink to="/about">
        <div>A propos</div>
      </NavLink>
    </nav>
  )
}

export default Navbar
