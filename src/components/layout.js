/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// 引入后进行初始化
import Aegis from 'aegis-web-sdk';

import Header from './header'
import Footer from './footer'
import SEO from './seo'
import '../styles/normalize.css'
import '../styles/han.css'
import '../styles/layout.css'
import '../styles/default.css'

const Layout = ({ title, props, children }) => {
  useEffect(() => {
    const aegis = new Aegis({
      id: 'PVqyZlB0G1zEMGvOwE', // 应用ID，即上报key
      reportApiSpeed: true, // 接口测速
      reportAssetSpeed: true, // 静态资源测速
      spa: true // spa 应用页面跳转的时候开启 pv 计算
    });
  }, []);
  
  return (
    <>
      <SEO title={title} />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div className="type">
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
              <main className="main">{children}</main>
              <Footer />
            </div>
          </div>
        )}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
