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
        <h3>👋 Hi，there!</h3>

        <p>我是 Colin，程序员、中年三明治。在深圳生活工作。</p>
        <p>
          这里会分享一些读书笔记、摄影照片。爱好笔记广泛：吉他🎸、
          <a href="https://music.douban.com/mine?status=collect">黑人音乐🎵</a>
          、<Link to="/blog/tags/摄影">摄影📷</Link>、游泳🏊、
          <a href="/running" target="_blank">
            跑步🏃
          </a>
          、徒步⛰️、露营⛺️、滑板🛹、骑行🚴
        </p>

        <h3>这是我和女儿的自画像</h3>
        <div style={{ textAlign: 'center' }}>
          <img src={ImageAbout} alt="about" style={{ width: '60%' }} />
        </div>

        <h3>我去过的地方...</h3>
        {status === 0 && (
          <p className="sans-serif" style={{ fontSize: '14px' }}>
            等待 Google 地图...
          </p>
        )}
        {status === 2 && (
          <p className="sans-serif" style={{ fontSize: '14px' }}>
            Google 地图加载失败❌
          </p>
        )}

        <iframe
          style={{ display: status === 1 ? '' : 'none' }}
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
