import React from 'react'
import './header.scss'
import logo from '../../../images/logo.png';
import { NavLink } from 'react-router-dom'

function header() {
    return (
       <header>
           <div className="Container">
               <nav className="MainNav">
                       <h1 className="Logo"></h1>
                       <ul>
                           <li><NavLink to="/" exact activeClassName="active" className="navLink">Home</NavLink></li>
                           <li><NavLink to="/about" exact activeClassName="active" className="navLink">About</NavLink></li>
                           <li><NavLink to="/work" exact activeClassName="active" className="navLink">work</NavLink></li>
                           <li><NavLink to="/contact" exact activeClassName="active" className="navLink">Contact</NavLink></li>
                       </ul>
               </nav>
           </div>
       </header>
    )
}

export default header
