const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // const blogPost = path.resolve(`./src/templates/blog-post.js`)

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                categories
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      const template = null;

      console.dir(post.node.frontmatter.categories)
      
      switch (post.node.frontmatter.categories) {
        case 'development':
          template = path.resolve(`./src/templates/dev-post.js`);
          break;
      
        case 'project':
          template = path.resolve(`./src/templates/prj-post.js`);
          break;

        case 'photograph':
          template = path.resolve(`./src/templates/pht-post.js`);
          break;

        default:
          template = path.resolve(`./src/templates/404.js`);
          break;
      }

      createPage({
        path: post.node.fields.slug,
        component: template,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
