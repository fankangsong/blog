import React from 'react'
import { Link } from 'gatsby'
import '../styles/header.css'
import logo from '../images/avatar.png'

const Header = () => (
  <header className="site-header">
    <Link to={`/`} className="logo-link">
      <img className="logo" src={logo} alt="" />
    </Link>

    <ul className="navigator">
      <li>
        <Link to={`/blog`}>Blog</Link>
      </li>
      <li>
        <Link to={`/about`}>About</Link>
      </li>
    </ul>
  </header>
)

export default Header
