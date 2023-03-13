import React from 'react'
import './Dropdown.css'
import { MenuItemList } from './MenuItemList'
import MenuItems from './MenuItems'
const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {MenuItemList.map((menu, index) => {
          const depthLevel = 0
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
        })}
      </ul>
    </nav>
  )
}

export default Navbar
