import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

function Posts({ list }) {
  list.splice(3)
  return (
    <div className="blog-list">
      <ul>
        {list.map(({ node }) => {
          console.log(node)
          const { frontmatter, id, excerpt } = node
          const { title, date, path } = frontmatter
          return (
            <li key={id}>
              <p>
                <span className="date">{date}</span>
                <Link to={path} className="title">
                  {title}
                </Link>
              </p>
              <p className="excerpt">{excerpt}</p>
            </li>
          )
        })}
      </ul>

      <p style={{ textAlign: 'right' }}>
        <Link to="./archives">更多...</Link>
      </p>
    </div>
  )
}

export default function BlogIndexPage(props) {
  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = props
  return (
    <Layout title="随笔">
      <div className="content design">
        <Posts list={edges} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { ne: "摄影" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            path
            title
            tags
          }
        }
      }
    }
  }
`
