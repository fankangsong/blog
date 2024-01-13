import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../../components/layout'

function Posts({ list }) {
  if (list.length === 0) {
    return (
      <div
        style={{
          height: '200px',
          display: 'flex',
          alignItems: 'end',
        }}
      >
        <p style={{ width: '100%', textAlign: 'center' }}>暂无相关内容</p>
      </div>
    )
  }
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

export default function TagsList(props) {
  console.log('props', props)
  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = props
  return (
    <Layout title="所有摄影作品">
      <div className="content design">
        {edges.length > 0 && (
          <h2 style={{ textAlign: 'center' }}>所有摄影作品</h2>
        )}
        <Posts list={edges} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($tag: [String] = "摄影") {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: $tag } } }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`
