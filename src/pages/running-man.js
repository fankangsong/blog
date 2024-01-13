import React, { useEffect, useState, useRef } from 'react'
import Layout from '../components/layout'

const RunningPage = () => {
  return (
    <Layout title="我在跑步">
      <div style={{ width: '90%', margin: '0 auto' }}>
        <iframe
          style={{ width: '100%', height: '600px' }}
          src="https://imcolin.fan/running"
          frameBorder="0"
        ></iframe>
      </div>
    </Layout>
  )
}

export default RunningPage
