import React from 'react'
import Icon from '../images/icon.svg'
import './footer.css'

const Footer = () => {
  const fullyear = new Date().getFullYear()
  return (
    <>
      <footer className="site-footer code">
        <img
          src={Icon}
          alt="imcolin.fan"
          className="icon"
          style={{ width: 16, height: 16 }}
        />
        <span className="copyright">&copy; {fullyear} </span>
        <span>imcolin.fan</span>
      </footer>
    </>
  )
}

export default Footer
