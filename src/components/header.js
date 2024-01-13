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
            <Link to={`/`}>首页</Link>
          </li>
        }
        <li>
          <Link to={`/blog`}>博客</Link>
        </li>
        <li>
          <Link to={`/blog/tags/摄影`}>摄影</Link>
        </li>
        <li>
          <Link to={`/about`}>关于</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
