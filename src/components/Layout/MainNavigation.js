import React from 'react'
import { Link } from 'react-router-dom'
//import classes from './MainNavigation.module.css'
import Navbar from '../UI/Navbar'
function MainNavigation() {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          Logo
        </Link>
        <Navbar />
      </div>
    </header>
  )
}

export default MainNavigation
