import React from 'react'
import Layout from '../components/layout'
import AboutImg from '../components/about'

const AboutPage = () => {
  return (
    <Layout title="关于">
      <div
        style={{
          textAlign: `center`,
        }}
      >
        <AboutImg />
      </div>
    </Layout>
  )
}

export default AboutPage
