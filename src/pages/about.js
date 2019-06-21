import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="关于" />
      <div
        style={{
          textAlign: `center`,
        }}
      >
        <Image />
      </div>
    </Layout>
  )
}

export default AboutPage
