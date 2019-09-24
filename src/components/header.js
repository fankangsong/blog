import React from 'react'
import { Link } from 'gatsby'
import Avatar from './images/avatar'

const Header = () => (
  <header className="site-header">
    <Link to={`/`} className="logo-link">
      <Avatar />
    </Link>

    <ul className="navigator">
      <li>
        <Link to={`/`}>首页</Link>
      </li>
      <li>
        <Link to={`/blog`}>博客</Link>
      </li>
      <li>
        <Link to={`/about`}>站长</Link>
      </li>
    </ul>
  </header>
)

export default Header
