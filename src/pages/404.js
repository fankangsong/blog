import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout title="404: Not found">
    <div className="content">
    <div style={{textAlign: 'center'}}>
    <h1>404</h1>
    <p>你访问的页面找不到了。</p>
    </div>
    </div>
  </Layout>
)

export default NotFoundPage
