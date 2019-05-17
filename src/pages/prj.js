import React from "react"
import styled from 'styled-components'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import HiddenText from "../utils/common-comp"
import SEO from "../components/seo"

class BlogIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const ProjectList = styled.ul`
      position: absolute;
      top: 90px;
      right: 0;
      bottom: 0;
      left: 0;
    `

    const ProjectListItem = styled.li`
      display: block;
      width: 100%;
      height: 90%;
      padding: 10% 20%;
      &:last-child {
        padding-bottom: 20%;
      }
    `

    const ProjectHTag = styled.h3`
      position: relative;
      display: block;
      width: 100%;
      max-width: 1440px;
      height: 100%;
      margin: 0;
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
      display: block;
      margin-bottom: 20px;
      font-size: 32px;
      font-weight: bold;
      color: #000;
      line-height: 1.4;
      letter-spacing: 15px;
    `

    const ProjectGroup = styled.span`
      display: block;
      font-size: 16px;
      font-weight: normal;
    `

    const ProjectThumb = styled.div`
      position: absolute;
      top: 50%;
      right: 4%;
      width: 68%;
      max-width: 600px;
      border-radius: 0;
      background-image: url('${props => props.img}');
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

    return (
      <Layout fixed={true} location={this.props.location} title={siteTitle}>
        <HiddenText text="Project List" />
        <SEO
          title="project list"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <ProjectList>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <ProjectListItem key={node.fields.slug}>
                <ProjectHTag>
                  <ProjectItemLink to={node.fields.slug}>
                    <ProjectText>
                      <ProjectTitle>{title}</ProjectTitle>
                      <ProjectGroup>{node.frontmatter.group}</ProjectGroup>
                    </ProjectText>
                    <ProjectThumb className={'project-thumb'} img={node.frontmatter.img.publicURL}></ProjectThumb>
                  </ProjectItemLink>
                </ProjectHTag>
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
            img {
              publicURL
            }
            golink
            description
            published
          }
        }
      }
    }
  }
`
