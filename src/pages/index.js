import React from 'react'
import Layout from '../components/layout'
import HomeImg from '../components/home'
import AboutImg from '../components/about'

function IndexPage(props) {
  return (
    <Layout props={props}>
      <AboutImg />
      <p></p>
      <HomeImg />
    </Layout>
  )
}

export default IndexPage
