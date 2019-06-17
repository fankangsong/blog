import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/blog-list.css'

function Posts({ list }) {
  return (
    <ul className="blog-list-container">
      {list.map(({ node: { frontmatter, excerpt, id } }) => {
        const { title, date, path } = frontmatter
        return (
          <li key={id}>
            <Link to={path} className="title">
              {title}
            </Link>
            <span className="date">{date}</span>
            <p className="desc">{excerpt}</p>
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
    <Layout>
      <SEO title="博客列表" />
      <Posts list={edges} />
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
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
