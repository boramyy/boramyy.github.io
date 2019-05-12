import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        
        
        <h2 className="page-title">all<br/>development<br/>posts</h2>
        <SEO
          title="dev post"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <ul className="post-list">
        
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <li className="post-list-item" key={node.fields.slug}>
              <h3>
                <Link to={node.fields.slug}>
                  <span className="post-title">{title}</span>
                  {/* <div className="post-tags">
                    <span className="post-tag {{ tag }}">{{ tag }}</span>
                  </div> */}
                  <div className="post-date">{node.frontmatter.date}</div>
                </Link>
              </h3>
            </li>
          )
        })}
        {/* {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
                />
            </div>
          )
        })} */}

        </ul>

      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
