import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import './header.css'
import AvatarImage from '../images/avatar.jpg'

const DEFAULT_VAL = 20

const Header = ({ theme }) => {
  const location = useLocation()
  const [, rootPath] = location.pathname.split('/')

  const [fixValue, setFixvalue] = useState(DEFAULT_VAL)

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth

      let val = DEFAULT_VAL
      if (windowWidth >= 920) {
        const val = (windowWidth - 800) / 2 - 60
        setFixvalue(val)
      } else {
        setFixvalue(DEFAULT_VAL)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
  }, [])

  if (theme === 'simple') {
    return (
      <div>
        <Link
          className="back-to-home"
          to={`/${rootPath}`}
          title="返回"
          style={{ right: fixValue }}
        >
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
          <Link to={`/blog`}>随笔</Link>
        </li>
        <li>
          <a href="/photography/">摄影</a>
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
