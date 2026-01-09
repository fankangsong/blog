import React, { useEffect, useState, useRef } from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import ImageAbout from '../images/about.png'

function echoContact(emailCanvas){
    const canvas = document.getElementById('emailCanvas');
    const ctx = canvas.getContext('2d');

    const localPart = 'xxx@';
    const domainPart = 'gmail.com';

    const fontSize = 20;
    const fontFamily = '"Courier New", Courier, monospace';
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left'; // 从左开始绘制

    const xStart = 20;
    const yCenter = canvas.height / 2;

    // 绘制 "xxx@"
    ctx.fillStyle = '#333333';
    ctx.fillText(localPart, xStart, yCenter);

    // 计算 "xxx@" 的宽度，以便紧接着绘制域名
    const localWidth = ctx.measureText(localPart).width;

    // 绘制 "gmail.com" 使用 Gmail 品牌红
    ctx.fillStyle = '#EA4335'; // Gmail red (from Google brand)
    ctx.fillText(domainPart, xStart + localWidth, yCenter);
}

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
    <Layout title="我">
      <div className="content design">
        <h3>
          <span>👋</span> 你好!
        </h3>

        <p>
          我是
          Colin，来自深圳的80后程序员，中年三明治。在这里分享随笔和摄影。我的爱好弹吉他
          、<Link to="/photography">摄影</Link>。喜欢的运动：
          <a href="/running" target="_blank">
            跑步
          </a>
          、徒步、引体向上。我的<a href="https://www.xiaohongshu.com/user/profile/6534b2ce00000000060047f4" target="_blank">📕小红书</a>、<a href="https://github.com/fankangsong">Github</a>
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
