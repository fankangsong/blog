import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import HomeImg from '../components/home'

function IndexPage(props) {
  return <Layout props={props}>
    <HomeImg />
  </Layout>
}

export default IndexPage
