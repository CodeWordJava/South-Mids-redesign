import * as React from 'react'
import { Link } from 'gatsby'

import logo2 from '../images/logo2.png'

import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    navLogo
  } from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
      <ul className={navLinks}>
      <img className={navLogo} src ={logo2} alt ="logo"/>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link></li>
            <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link></li>
            <li className={navLinkItem}>
            <Link to="/members" className={navLinkText}>Members</Link></li>         
            <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>Get in Touch</Link></li>
        </ul>
      </nav>
      <main>
      <h1 className={heading}>{pageTitle}</h1>
        {children}
       
      </main>
     
    </div>
  )
}

export default Layout