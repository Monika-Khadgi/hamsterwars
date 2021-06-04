import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {MenuItems} from "./MenuItems"
import './Navbar.css'

const Navbar = () => {
  const [activePage, setActivePage] = useState('');
    return(
      <nav className ="NavbarItems">
        <h1 className="navbar-logo">HAMSTERS WAR</h1>
        <ul className='nav-menu'>
         { MenuItems.map((item, index) => {
              return (
              <li key= {index}>
                <Link onClick={() => setActivePage(item.url)} className={item.url===activePage ? 'nav-links active': 'nav-links'} to={item.url}>
                  {item.title}
                </Link> 
              </li>
              )
          })
          } 
          
        </ul>
      </nav>
    )
}

export default Navbar;