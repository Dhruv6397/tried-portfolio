import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './logo.png'
export default class Navbar extends Component {
  render() {
    return (
      <>
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
}
 