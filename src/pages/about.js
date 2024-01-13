import React, { useEffect, useState, useRef } from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import ImageAbout from '../images/about.png'

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
        <p>👋 Hi，there!</p>

        <ul>
          <li>一名程序员，在深圳工作</li>
          <li>
            爱好广泛：吉他🎸、
            <a href="https://music.douban.com/mine?status=collect">
              黑人音乐🎵
            </a>
            、<Link to="/blog/tags/摄影">摄影📷</Link>、游泳🏊、
            <a href="/running" target="_blank">
              跑步🏃
            </a>
            、徒步⛰️、露营⛺️、滑板🛹
          </li>
        </ul>
        <h2>我和女儿</h2>
        <img src={ImageAbout} alt="about" />

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
