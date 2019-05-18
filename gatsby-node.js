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
                published
                date
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
      const category = post.node.frontmatter.categories

      // const previous = index === posts.length - 1 ? null : posts[index + 1].node
      // const next = index === 0 ? null : posts[index - 1].node

      let prevPost = null;
      let nextPost = null;

      posts.forEach((item, idx) => {
        if (item.node.frontmatter.categories === category && item.node.frontmatter.published === true) {
          if (idx < index) {
            prevPost = item.node;
          }
          if (idx > index && nextPost === null) {
            nextPost = item.node;
          }
        }
      });
     
      let template = path.resolve(`./src/templates/${category || 'blog'}-post.js`);
      
      createPage({
        path: post.node.fields.slug,
        component: template,
        context: {
          slug: post.node.fields.slug,
          previous: prevPost,
          next: nextPost
        },
      })
    })

    // pagination for dev
    const devPosts = posts.filter((post, index) => {
      return post.node.frontmatter.categories === 'dev' && post.node.frontmatter.published === true
    })
    const devPostPerPage = 7
    const numPages = Math.ceil(devPosts.length / devPostPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/dev` : `/dev/${i + 1}`,
        component: path.resolve("./src/templates/dev-list.js"),
        context: {
          limit: devPostPerPage,
          skip: i * devPostPerPage,
          numPages,
          currentPage: i + 1,
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
