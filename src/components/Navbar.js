import React from 'react'
import { menuItems } from '../menuItem';
import MenuItems from './MenuItems';

const Navbar = () => {
  
  return (
    <div>
    <nav>
    <ul className="menus">
    {menuItems.map((menu, index) => {
      const depthLevel=0;
     return <MenuItems items={menu} key={index}  depthLevel={depthLevel}/>;
    })}
   </ul>
  </nav>
      
    </div>
  )
}

export default Navbar
