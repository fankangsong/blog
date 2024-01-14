import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

function Posts({ list }) {
  return (
    <ul className="blog-list">
      {list.map(({ node: { frontmatter, id } }) => {
        const { title, date, path } = frontmatter
        return (
          <li key={id} className="archives-li">
            <Link to={path} className="title">
              {title}
            </Link>
            <span className="date2">{date}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default function BlogArchives(props) {
  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = props
  return (
    <Layout title="随笔">
      <h2 style={{ textAlign: 'center' }}>✒️ 随笔</h2>
      <div className="content design">
        <Posts list={edges} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
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
          }
        }
      }
    }
  }
`
