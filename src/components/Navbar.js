import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export default function Navbar() {
  
  const [sideNavToggle,setSideNavToggle]=useState(true)
  
  return (
    <>
        <div className='side-navbar'>
          {/* <div  className='menu-icon' onClick={()=>setSideNavToggle(!sideNavToggle)}>{sideNavToggle?console.log("s"):console.log("n")}</div> */}
          <ul className={sideNavToggle?'show-side-bar ':'hide-side-bar'}>
                <li ><Link className="sidebar-link" to="/">Home</Link></li >
                <li ><Link className="sidebar-link" to="/about">About</Link></li>
                <li ><Link className="sidebar-link" to="/blog">Projects</Link></li>
                <li><Link className="sidebar-link" to="/blog">Blog</Link></li>
          </ul>
        </div>
        

        <nav>
        <Link to='/'> <img src={logo} alt="Logo" className="logo" /></Link>
        <ul className='nav-list'>
        <li className='list-items home-class'>
          <Link className='link' to="/">Home</Link>
        </li >
        <li className='list-items about-class'>
          <Link className='link' to="/about">About</Link>
        </li>
        <li className='list-items projects-class'>
          <Link className='link' to="/blog">Projects</Link>
        </li>
        <li className='list-items blog-class'>
          <Link className='link' to="/blog">Blog</Link>
        </li>
        
        </ul>
        </nav>

      </>
  )
}
