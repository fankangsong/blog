/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import SEO from './seo'
import '../styles/normalize.css'
import '../styles/han.css'
import '../styles/layout.css'
import '../styles/default.css'

const Layout = props => {
  const { title, theme, children } = props
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
            <Header theme={theme} />
            <div className="wrap">
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
