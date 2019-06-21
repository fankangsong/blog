import React from 'react'
import Icon from '../images/icon.svg'

const Footer = () => {
  const fullyear = new Date().getFullYear()
  return (
    <footer className="site-footer code">
      <img src={Icon} className="icon" style={{ width: 16, height: 16 }} />
      <span className="copyright">&copy; {fullyear} </span>
      <span>imfer.me</span>
    </footer>
  )
}

export default Footer
