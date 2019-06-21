import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

function IndexPage(props) {
  return (
    <Layout props={props}>
      <SEO title="首页" />
    </Layout>
  )
}

export default IndexPage
