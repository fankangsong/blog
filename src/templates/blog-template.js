import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout title={frontmatter.title} theme="simple">
      <div className="content blog" id="content">
        <h1 className="title ">{frontmatter.title}</h1>
        <p className="date">
          <span style={{ marginRight: '10px' }}>
            Colin 发布于 {frontmatter.date}
          </span>
        </p>

        <article
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <hr style={{ marginTop: '40px' }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
        tags
      }
    }
  }
`
