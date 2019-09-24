import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

function Posts({ list }) {
  return (
    <ul className="blog-list">
      {list.map(({ node: { frontmatter, id } }) => {
        const { title, date, path } = frontmatter
        return (
          <li key={id}>
            <Link to={path} className="title">
              {title}
            </Link>
            <span className="date">{date}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default function BlogIndexPage({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Layout title="博客">
      <div className="content design">
        {/* <h2>文章</h2> */}
        <Posts list={edges} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            path
            title
          }
        }
      }
    }
  }
`
