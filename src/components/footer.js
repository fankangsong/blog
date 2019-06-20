import React from 'react'

const Footer = () => {
  const fullyear = new Date().getFullYear()
  return <footer className="site-footer">&copy; {fullyear} imfer.me</footer>
}

export default Footer
