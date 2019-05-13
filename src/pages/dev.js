import React from "react"
import styled from 'styled-components'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    const PageTitle = styled.h2`
      float: left;
      width: 30%;
      margin: 50px 0 0;
      font-size: 1.4em;
      font-weight: bold;
      color: #111;
      line-height: 1.8;
      letter-spacing: -0.4px;
      word-break: break-all;
    `
    const PostList = styled.ul`
      float: left;
      width:70%;
    `
    const PostListItem = styled.li`
      border: 1px solid transparent;
      list-style: none;
      -webkit-transition: box-shadow 200ms, margin 200ms, border 200ms;
      transition: box-shadow 200ms, margin 200ms, border 200ms;
      &:after { 
        content: '';
        display: block;
        margin: 0 50px;
        border-bottom: 1px dashed #e0e0e0;
      }
      &:hover {
        margin-top: -10px; 
        margin-bottom: 10px;
        border: 1px solid #111;
        background-color: #fff;
        box-shadow: 15px 15px 0 0 rgba(0,0,0,0.1);
        &:after { border-bottom-color: transparent }
      }
      &:active {
        margin-top: -5px;
        margin-bottom: 5px;
        box-shadow: 5px 5px 0 0 rgba(0,0,0,0.2);
        .post-title { color:#111; }
      }
    `
    const PostLink = styled(Link)`
      display: block;
      min-height: 193px;
      padding: 50px;
    `

    const PostTitle = styled.span`
      font-size: 1.3em;
      color: #333;
      line-height: 1.3;
    `

    const Tags = styled.div`
      margin-top:10px;
    `
    
    const Tag = styled.div`
      float: left;
      margin-right: 15px;
      font-size: 13px;
      color: #aaa;
      line-height: 1;
      &:before { content:'#'; }
    `

    const PostDate = styled.div`
      margin-top: 30px;
      font-size: 13px;
      color: #aaa;
      line-height: 1;
    `

    const PostTags = function(props){
      const hasTags = props.hasTags;
      if (hasTags) {
        return  (
          <Tags className="clear">
            {hasTags.map((item, index) => {
              return <Tag key={index}>{item}</Tag>
            })}
          </Tags>
        );
      }
      return null;
    }

    return (
      <Layout className={`container clear page`} location={this.props.location} title={siteTitle}>
        <PageTitle>all<br />development<br />posts</PageTitle>
        <SEO
          title="development posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <PostList> 
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <PostListItem key={node.fields.slug}>
                <h3>
                  <PostLink to={node.fields.slug}>
                    <PostTitle>{title}</PostTitle>
                    <PostTags hasTags={node.frontmatter.tags}></PostTags>
                    <PostDate>{node.frontmatter.date}</PostDate>
                  </PostLink>
                </h3>
              </PostListItem>
            )
          })}
        </PostList>
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
            title
            categories
            tags
            published
            date(formatString: "YYYY MM DD")
            description
          }
        }
      }
    }
  }
`
