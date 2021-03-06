import React, { useState }from 'react'
import { BiMenu } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css'
const NavBar = () => {

  const [ sidebar, setSidebar ] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars' onClick={showSidebar}>
          <BiMenu />
        </Link>
      </div>

      <nav className={ sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' >
          <li className='navbar-toogle'>
            <Link to='#' className='menu-bars' onClick={showSidebar} >
              <MdOutlineClose />
            </Link>
          </li>
          {
            SidebarData.map((item, index) => (
              <li  key={index} className={item.cName} >
                <Link to={item.path} className='menu-bars' onClick={showSidebar}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </>
  )
}

export default NavBar