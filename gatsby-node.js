/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

// 博客正文数据
async function createBlogPage(createPage, graphql) {
  const blogPostTemplate = path.resolve(`src/templates/blog-template.js`);
  const gql = `
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `;

  const { errors, data } = await graphql(gql);

  if (errors) {
    throw new Error(errors);
  }

  return data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}
    });
  });
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  try {
    return await Promise.all([
      createBlogPage(createPage, graphql),
    ]);
  } catch (err) {
    return Promise.reject(err);
  }
}