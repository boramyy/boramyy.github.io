import React from "react"
import styled from 'styled-components'
import { Link, graphql } from "gatsby"

import User from "../components/user"
import Layout from "../components/layout"
import SEO from "../components/seo"

class DevPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const StyledLayout = styled(Layout)`
      padding-top: 50px;
      padding-right: 12%;
      padding-bottom: 50px;
      padding-left: 12%;
    `
    const PostHeader = styled.div`
      overflow: hidden;
      margin-top: 100px;
      margin-bottom: 150px;
    `

    const PostTitle = styled.h2`
      float: left;
      width: 50%;
      margin-top: 0;
      margin-right: 15%;
      color: #111;
    `

    const PostHeaderRight = styled.div`
      float: left;
      width: 35%;
      margin-top: 10px;
      font-size: 15px;
      font-weight: 100;
    `

    const Tags = styled.div`
      margin-bottom:15px;
    `

    const PostTag = styled.span`
      margin-right: 15px;
      line-height: 30px;
    `
    
    const PostDate = styled.span`
      line-height: 30px;
    `

    const StyledContent = styled.div`
      padding-bottom: 120px;
      color: #444;
      letter-spacing: 0;
      word-spacing: 2px;
      // border-bottom: 1px solid #111;
      p {
          font-size: 18px;
          font-family: "Nanum Gothic",san-serif;
          line-height: 2.2;
          letter-spacing: -0.4px;
        }
      }
      hr {
        margin-top: 50px;
        border: 0;
        border-top: 1px solid #bbb;
      }
      img, video {
        display: block;
        margin: 30px auto;
      }
      .gatsby-resp-image-wrapper {
        margin: 50px auto;
      }
      a {
        font-size: 18px;
        line-height: 2.2;
        color:#51b6e0;
        &:hover {color:#77d7ff}
      }
      ul, ol {
        padding-left:20px;
        li {
          line-height: 2.2;
          list-style:inside;
        }
      }
      blockquote {
        margin-top: 70px;
        margin-bottom: 100px;
        padding: 40px 50px;
        font-size: 0.9em;
        line-height: 1.8;
        border: 1px solid #ccc;
        box-shadow: 15px 15px 0 0 rgba(0,0,0,0.1);
        h2, h3, h4, h5, h6 {
          margin-top: 15px;
        }
        p {font-size: 16px;}
      }
    `

    const AnotherPostBox = styled.div`
      overflow: hidden;
      display: block;
      width: 100%;
    `

    const AnotherPost = styled(Link)`
      display: flex;
      width: 50%;
      height: 120px;
      font-size: 20px;
      line-height: 1.6;
      align-items: center;
      &.prev {
        float: left;
        justify-content: flex-start;
        svg {
          margin-right: 50px;
          -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
        }
      }
      &.next {
        float: right;
        justify-content: flex-end;
        svg {
          margin-left:50px;
        }
      }
      &:hover {
        color:#ff6db6;
        svg {
          fill:#ff6db6;
        }
      }
      svg {
        width: 50px;
        height: 50px;
        fill: #333;
      }
    `

    const PostTags = function (props) {
      const tags = props.tags;
      if (tags) {
        return (
          <Tags>
            {tags.map((item, index) => {
              return <PostTag key={index}>{item}</PostTag>
            })}
          </Tags>
        );
      }
      return null;
    }

    return (
      <StyledLayout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <PostHeader>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <PostHeaderRight>
            <PostTags tags={post.frontmatter.tags} />
            <PostDate>{post.frontmatter.date}</PostDate>
          </PostHeaderRight>
        </PostHeader>

        <StyledContent dangerouslySetInnerHTML={{ __html: post.html }} />
        <User />

        <AnotherPostBox>
          {previous && (
            <AnotherPost className="prev" to={previous.fields.slug} rel="prev">
              <svg x="0px" y="0px" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg> {previous.frontmatter.title}
            </AnotherPost>
          )}
          {next && (
            <AnotherPost className="next" to={next.fields.slug} rel="next">
              {next.frontmatter.title} <svg x="0px" y="0px" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
            </AnotherPost>
          )}
        </AnotherPostBox>
      </StyledLayout>
    )
  }
}

export default DevPostTemplate

export const pageQuery = graphql`
  query DevPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
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
`
