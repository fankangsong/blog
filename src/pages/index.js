import React from 'react'
import Layout from '../components/layout'

function IndexPage(props) {
  return (
    <Layout props={props} title="首页">
      <div className="content">
        <p>这个家伙太懒了，什么都没留下。</p>
      </div>
    </Layout>
  )
}

export default IndexPage
