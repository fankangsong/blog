import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout title={frontmatter.title}>
      <div className="content blog">
        <h1 className="title ">{frontmatter.title}</h1>
        <p className="date">
          <span style={{ marginRight: '10px' }}>
            Colin 发布于 {frontmatter.date}
          </span>
          {frontmatter.tags && (
            <>
              标记在
              {frontmatter.tags.map(tag => (
                <Link
                  to={`/blog/tags/${tag}`}
                  key={tag}
                  style={{ marginLeft: '6px' }}
                >
                  {tag}
                </Link>
              ))}
            </>
          )}
        </p>

        <article
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <hr />
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
