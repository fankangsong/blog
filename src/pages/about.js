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

    var canvas = document.getElementById('contact-me')
    var ctx = canvas.getContext('2d')
    ctx.font =
      '18px -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"'
    ctx.fillText('联系我：', 0, 20)
    ctx.fillStyle = '#f05037'
    ctx.fillText('fankangsong@gmail.com', 70, 20)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Layout title="作者">
      <div className="content design">
        <h3>
          <span>👋</span> 你好!
        </h3>

        <p>
          我是
          Colin，来自深圳的80后程序员，中年三明治。在这里分享随笔和摄影。我的爱好广泛：弹吉他、
          、<Link to="/photography">摄影</Link>。喜欢的运动：游泳、
          <a href="/running" target="_blank">
            跑步
          </a>
          、徒步、滑板、骑行。
        </p>

        <p>
          <canvas id="contact-me" width="300" height="30" />
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
            Google 地图加载失败<span>❌</span>
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
