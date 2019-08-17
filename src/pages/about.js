import React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout title="关于">
      <div
        style={{
          textAlign: `center`,
        }}
      >
        <iframe
          className="google-map"
          src="https://www.google.com/maps/d/embed?mid=1ITNU4y9FSrODmHp-Kt6CTbt7uA0"
          frameBorder="0"
        ></iframe>
      </div>
    </Layout>
  )
}

export default AboutPage
