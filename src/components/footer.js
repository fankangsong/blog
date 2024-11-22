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
      <a href="https://www.travellings.cn/go-by-clouds.html" target="_blank" className="travellings">🚇开往</a>
    </footer>
    <div style={{ textAlign: 'center', padding: '10px 0'}}>
      <img src="https://count.getloli.com/@imcolin.fan?theme=capoo-2" alt="访客次数" width="320" />
    </div>
    </>
  )
}

export default Footer
