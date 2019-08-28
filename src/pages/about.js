import React, { useEffect, useState, useRef } from 'react'
import Layout from '../components/layout'
import HomeImg from '../components/home'
import AboutImg from '../components/about'

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

    setTimeout(() => {
      if (lastStatus.current === 1) return
      setStatus(2)
    }, 10000)
  }, [])

  return (
    <Layout title="关于">
      <div className="content">
        <h2>我和女儿</h2>
        <AboutImg />
        <h2>#社畜#</h2>
        <HomeImg />
        <h2>我去过的地方...</h2>
        {status === 0 && (
          <p className="sans-serif" style={{ fontSize: '14px' }}>
            加载 Google 地图...
          </p>
        )}
        {status === 2 && (
          <p className="sans-serif" style={{ fontSize: '14px' }}>
            你没翻墙吧？我去过的地方你看不到
          </p>
        )}
        <iframe
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
