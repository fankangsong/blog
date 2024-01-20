import React from 'react'
import { Link } from 'gatsby'
import AvatarImage from '../images/avatar.jpg'

const Header = props => {
  return (
    <header className="site-header">
      <Link to={`/`} className="logo-link">
        <img src={AvatarImage} alt="Colin" />
      </Link>

      <ul className="navigator">
        {
          <li>
            <Link to={`/`}>欢迎</Link>
          </li>
        }
        <li>
          <Link to={`/blog/archives`}>随笔</Link>
        </li>
        <li>
          <Link to={`/photography`}>摄影</Link>
        </li>
        <li>
          <a href="/running/">
            跑步<span>🏃</span>
          </a>
        </li>
        <li>
          <Link to={`/about`}>我</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
