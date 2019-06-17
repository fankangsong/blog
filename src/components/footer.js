import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  const fullyear = new Date().getFullYear()
  return <footer className="site-footer">&copy; {fullyear} imfer.me</footer>
}

export default Footer
