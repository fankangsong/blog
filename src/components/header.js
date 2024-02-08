import React from 'react'
import { Link } from 'gatsby'
import AvatarImage from '../images/avatar.jpg'
import './header.css'

const Header = ({ theme }) => {
  if (theme === 'simple') {
    return (
      <div
        style={{
          margin: '0 auto',
          maxWidth: '800px',
          width: '90%',
        }}
      >
        <Link className="back-to-home" to="/" title="回到首页">
          <span>🏠</span>
        </Link>
      </div>
    )
  }
  return (
    <header className="site-header">
      <Link to={`/`} className="logo-link">
        <img src={AvatarImage} alt="Colin" />
      </Link>

      <ul className="navigator">
        {
          <li>
            <Link to={`/`}>Hi</Link>
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
