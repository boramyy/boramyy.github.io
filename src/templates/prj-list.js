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
      h3 {
        margin-top: 0;
        margin-bottom: 0;
        font-weight: normal;
      }
    `
    const PostLink = styled(Link)`
      display: block;
      min-height: 193px;
      padding: 50px;
    `

    const PostTitle = styled.span`
      font-size: 22px;
      color: #333;
      line-height: 1.5;
    `

    const Tags = styled.div`
      margin-top:12px;
    `

    const PostTag = styled.div`
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







    const ProjectList = styled.ul`
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    `

    const ProjectListItem = styled.li`
      display: block;
      width: 100%;
      height: 100%;
      padding: 10% 20%;
    `

    const ProjectItemLink = styled(Link)`
      position: relative;
      display: block;
      width: 100%;
      max-width: 1440px;
      height: 100%;
      margin: 0 auto;
      perspective: 1000px;
      &:hover {
        .project-thumb {-webkit-transform:translateY(-52%) rotate3d(0, 10, -5, -10deg);transform:translateY(-52%) rotate3d(0, 10, -5, -10deg);}
      }
    `

    const ProjectText = styled.p`
      position: absolute;
      top: 50%;
      left: 4%;
      transform: translateY(-62%);
      -webkit-transform: translateY(-62%);
      z-index: 2;
    `

    const ProjectTitle = styled.span`
      display:block;margin-bottom:20px;font-size:32px;font-weight:bold;color:#000;line-height:1.4;letter-spacing:15px
    `

    const ProjectGroup = styled.span`
      display:block;font-size:0.95em;
    `

    const ProjectThumb = styled.div`
      position: absolute;
      top: 50%;
      right: 4%;
      width: 68%;
      max-width: 600px;
      border-radius: 0;
      background-image: url('${props => props.img_url}');
      background-size: cover;
      z-index: -1;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      -webkit-transition-property: right width height margin box-shadow;
      transition-property: right width height margin box-shadow;
      -webkit-transition-duration: 300ms;
      transition-duration: 300ms;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
      &:after {
        content: '';
        display: block;
        width: 100%;
        padding-top: 61.8%;
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
          title="development posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <ProjectList>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <ProjectListItem key={node.fields.slug}>
                <h3>
                  <ProjectItemLink to={node.fields.slug}>
                    <ProjectText>
                      <ProjectTitle>{title}</ProjectTitle>
                      <ProjectGroup>{node.frontmatter.group}</ProjectGroup>
                    </ProjectText>
                    {/* <ProjectThumb img={node.frontmatter.img}></ProjectThumb> */}
                  </ProjectItemLink>
                </h3>
              </ProjectListItem>
            )
          })}
        </ProjectList>
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
    allMarkdownRemark(
      filter: { frontmatter: {
        categories: { eq: "prj" }
        published: { eq: true }
      }}
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY MM DD")
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
    }
  }
`
