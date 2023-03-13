import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from './MainNavigation'

// import classes from './Layout.module.css'

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
