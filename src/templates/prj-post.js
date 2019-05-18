import React from "react"
import styled from 'styled-components'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class PrjPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const StyledLayout = styled(Layout)`
      padding-top: 50px;
      // padding-bottom: 50px;
    `
    const PostHeader = styled.div`
      margin-top: 50px;
      padding-left: 8%;
      font-weight: 100;
      color: #111;
    `

    const PostTitle = styled.h2`
      margin-top: 0;
      margin-bottom: 30px;
      font-size: 72px;
      font-weight: bold;
    `

    const PostGroup = styled.span`
      margin-right: 10px;
      font-size: 20px;
    `

    const Tags = styled.div`
      display: inline-block;
      `
      
      const PostTag = styled.span`
      margin-left: 6px;
      font-size: 20px;
      line-height: 2;
    `
    
    const PostLink = styled.a`
      display: block;
      margin-top: 50px;
      font-size: 15px;
      line-height: 2;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
        text-decoration-color: #999;
      }
    `
    const PostDate = styled.span`
      display: block;
      margin-top: 4px;
      font-size: 15px;
      line-height: 2;
    `
    const SvgIcon = styled.svg`
      width: 14px;
      height: 14px;
      margin-right: 14px;
      fill: none;
      stroke: #000;
      stroke-width: 1.5px;
      stroke-miterlimit: 10;
      -webkit-transform: translateY(1px);
      transform: translateY(1px);
    `

    const AnotherPostBox = styled.div`
      overflow: hidden;
      display: block;
      width: 100%;
      padding-top: 30px;
      padding-bottom: 50px;
      border-top: 1px solid #eee;
    `

    const AnotherPost = styled(Link)`
      display: flex;
      width: 50%;
      height: 200px;
      font-size: 36px;
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
        color: #ff6db6;
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

    const PostContent = styled.article`
      margin-top:100px;
      .prj-data {
        .content-box {
          p {
            font-family: 'Nanum Gothic', san-serif;
          }
        }
        .text-box {
          .title {
            margin-top: 0;
            font-size: 25px;
          }
          .text {
            font-size: 16px;
            line-height: 2.4;
          }
        }
      }
    `
    return (
      <StyledLayout className={'container'} location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

          <PostHeader>
            <PostTitle>{post.frontmatter.title}</PostTitle>
            <PostGroup>{post.frontmatter.group} </PostGroup> / <PostTags tags={post.frontmatter.tags}/>
            <PostLink href={post.frontmatter.golink} target="_blank">
              <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                <title>link</title>
                <polyline points="27.5 12.23 27.5 0.5 15.77 0.5" />
                <line x1="27.5" y1="0.5" x2="12.43" y2="15.57" />
                <polyline points="12.69 4.53 0.5 4.53 0.5 27.5 23.47 27.5 23.47 15.31" />
              </SvgIcon>
              {post.frontmatter.golink}
            </PostLink>
            <PostDate>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.88 26.5">
                <title>calendar</title>
                <rect x="0.5" y="3.54" width="27.88" height="22.46" />
                <line x1="28.38" y1="10.98" x2="0.5" y2="10.98" />
                <line x1="7.02" x2="7.02" y2="7.13" />
                <line x1="21.86" x2="21.86" y2="7.13" />
              </SvgIcon>
              {post.frontmatter.date}
            </PostDate>
          </PostHeader>

          <PostContent>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />

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
          </PostContent>

      </StyledLayout>
    )
  }
}

export default PrjPostTemplate

export const pageQuery = graphql`
  query PrjPostBySlug($slug: String!) {
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
        date(formatString: "YYYY MM")
        categories
        group
        tags
        excerpt
        golink
        description
        published
      }
    }
  }
`
