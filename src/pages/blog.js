import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

function Posts({ list }) {
  list.splice(3);
  return (
    <div className="blog-list">
    <ul>
      {list.map(({ node: { frontmatter, id, excerpt } }) => {
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

    <p style={{textAlign: 'right'}}><Link to="./archives">更多...</Link></p>
    </div>
  )
}

export default function BlogIndexPage(props) {
  const { data: { allMarkdownRemark: { edges } }} = props;
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
