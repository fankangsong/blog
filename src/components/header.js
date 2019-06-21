import React from 'react'
import { Link } from 'gatsby'
import Avatar from './avatar'

const Header = () => (
  <header className="site-header">
    <Link to={`/`} className="logo-link">
      <Avatar />
    </Link>

    <ul className="navigator sans-serif">
      <li>
        <Link to={`/`}>Home</Link>
      </li>
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
