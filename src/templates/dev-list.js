import React from "react"
import styled from 'styled-components'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      next: '',
      prev: ''
    };
  }

  componentDidMount() {
    const { currentPage } = this.props.pageContext
    const prevPage = currentPage - 1 === 1 ? '/dev' : '/dev/' + (currentPage - 1)
    const nextPage = '/dev/' + (currentPage + 1)

    this.setState({
      next: nextPage,
      prev: prevPage
    })
  }

  render() {
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
      @media (max-width: 414px) {
        width: 100%;
        // margin-top: 0;
        margin-bottom: 50px;
      }
    `
    const PostList = styled.ul`
      float: left;
      width:70%;
      @media (max-width: 414px) {
        width: 100%;
        min-height: 330px;
      }
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
      h3 {
        margin-top: 0;
        margin-bottom: 0;
        font-weight: normal;
      }
      @media (max-width: 414px) {
        margin-bottom: 30px;
        border-left: 1px solid #111;
        &:after {
          content:none
        }
        &:hover {
          margin-bottom:25px;
        }
      }
    `
    const PostLink = styled(Link)`
      display: block;
      min-height: 193px;
      padding: 50px;
      @media (max-width: 414px) {
        padding: 8px 20px 14px;
        min-height: auto;
      }
    `

    const PostTitle = styled.span`
      display: block;
      font-size: 22px;
      color: #333;
      line-height: 1.5;
      @media (max-width: 414px) {
        font-size: 18px;
        vertical-align: top;
      }
    `

    const Tags = styled.div`
      margin-top:12px;
      @media (max-width: 414px) {
        margin-top:20px;
      }
    `

    const PostTag = styled.div`
      float: left;
      margin-right: 15px;
      font-size: 13px;
      color: #aaa;
      line-height: 1;
      &:before { content:'#'; }
      @media (max-width: 414px) {
        font-size: 15px;
        line-height: 1.6;
      }
    `

    const PostDate = styled.div`
      margin-top: 30px;
      font-size: 13px;
      color: #aaa;
      line-height: 1;
      @media (max-width: 414px) {
        margin-top: 15px;
        font-size: 15px;
      }
    `

    const PostTags = function (props) {
      const tags = props.tags;
      if (tags) {
        return (
          <Tags className="clear">
            {tags.map((item, index) => {
              return <PostTag key={index}>{item}</PostTag>
            })}
          </Tags>
        );
      }
      return null;
    }

    const Pagination = styled.div`
      position:fixed;
      top: 52%;
      left: 15%;
    `

    const PaginationLocation = styled.div`
      position: absolute;
      top: 180px;
      left: 0;
      font-size: 15px;
      font-weight: 100;
    `

    const Arrow = styled(Link)`
      display: block;
      width: 100px;
      height: 100px;
      border-bottom: 1px solid #111;
      border-right: 1px solid #111;
      -webkit-transition: border 100ms;
      transition: border 100ms;
      &:hover {
        border-bottom-width: 4px;
        border-right-width: 4px
      }
      &.left {
        display: block;
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
      }
      &.right {
        display: block;
        margin-top:40px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      &.off {
        cursor: none;
        pointer-events: none;
        border-right-style: dashed;
        border-bottom-style: dashed
      }
    `

    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages

    return (
      <Layout className={`container clear page`} location={this.props.location} title={siteTitle}>
        <PageTitle>all<br />development<br />posts</PageTitle>
        <SEO
          title="dev posts"
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
                    <PostTags tags={node.frontmatter.tags} />
                    <PostDate>{node.frontmatter.date}</PostDate>
                  </PostLink>
                </h3>
              </PostListItem>
            )
          })}
        </PostList>
        
        {numPages > 1 && (
          <Pagination>
              <PaginationLocation>
                <span>{currentPage} / {numPages}</span>
              </PaginationLocation>
            <div id="arrow-box">
              <Arrow className={`left${isFirst ? ' off' : ''}`} to={this.state.prev} />
              <Arrow className={`right${isLast ? ' off' : ''}`} to={this.state.next} />
            </div>
          </Pagination>
        )}
        
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query devListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: {
        categories: { eq: "dev" }
        published: { eq: true }
      }}
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
