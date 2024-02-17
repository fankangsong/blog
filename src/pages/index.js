import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import '../styles/home.css'

function IndexPage(props) {
  const [{ node }] = props.data.allMarkdownRemark.edges
  const {
    excerpt,
    frontmatter: { title, path },
  } = node
  return (
    <Layout props={props} title="Hi">
      <div className="content home">
        <div className="home-inner">
          <h2>最近...</h2>
        </div>
        <p className="slogan">这个家伙太懒了，什么都没留下。</p>

        <div>
          <p className="slogan" style={{ transform: 'rotate(4deg)' }}>
            但是居然更新了一下下
          </p>
        </div>

        <div>
          <p className="slogan" title={excerpt}>
            <Link to={path}>👉{title}👈</Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1
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
