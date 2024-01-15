import React from 'react'
import Layout from '../components/layout'

function IndexPage(props) {
  return (
    <Layout props={props} title="欢迎">
      <div className="content home">
        <p>&nbsp;</p>
        <p className="slogan">这个家伙太懒了，什么都没留下。</p>
      </div>
    </Layout>
  )
}

export default IndexPage
