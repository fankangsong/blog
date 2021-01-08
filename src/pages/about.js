import React, { useEffect, useState, useRef } from 'react'
import Layout from '../components/layout'
import HomeImg from '../components/images/home'
import AboutImg from '../components/images/about'

const AboutPage = () => {
  const [status, setStatus] = useState(0)
  const lastStatus = useRef(status)

  useEffect(() => {
    const iframe = document.getElementById('google-map')
    iframe.onload = () => {
      iframe.className = 'google-map done'
      const currentStatus = 1
      setStatus(currentStatus)
      lastStatus.current = currentStatus
    }

    const timer = setTimeout(() => {
      if (lastStatus.current === 1) return
      setStatus(2)
    }, 10000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Layout title="关于">
      <div className="content design">
        <h2>我和女儿</h2>
        <AboutImg />
        <p>&nbsp;</p>
        <h2>#社畜#</h2>
        <p>&nbsp;</p>
        <HomeImg />
        <p>&nbsp;</p>
        <h2>我去过的地方...</h2>
        {status === 0 && (
          <p className="sans-serif" style={{ fontSize: '14px' }}>
            加载 Google 地图...
          </p>
        )}
        {status === 2 && (
          <p className="sans-serif" style={{ fontSize: '14px' }}>
            网络错误，请尝试越过 GFW。
          </p>
        )}
        <iframe
          title="google maps"
          id="google-map"
          className="google-map"
          src="https://www.google.com/maps/d/embed?mid=1ITNU4y9FSrODmHp-Kt6CTbt7uA0"
          frameBorder="0"
        ></iframe>
      </div>
    </Layout>
  )
}

export default AboutPage
