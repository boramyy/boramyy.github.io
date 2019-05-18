import React from "react"
import styled from 'styled-components'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import HiddenText from "../utils/common-comp"
import SEO from "../components/seo"

class BlogIndex extends React.Component {

  _isMounted = false;
  
  constructor(props) {
    super(props);
    this.state = {
      hash: '',
      size: {
        scrollAreaHeight: 0,
        scrollBarHeight: 0,
        prjItemHeight: 0
      }
    };
  }
  
  componentDidMount() {
    this._isMounted = true;
    this.setState({hash: window.location.hash})
    this.getSizeForScroll();
    window.addEventListener("resize", this.throttle(this.getSizeForScroll, 500));
    window.addEventListener("scroll", this.throttle(this.onScroll, 50));
    window.document.documentElement.classList.add('scrollSmooth')
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  
  throttle = (callback, limit) => {
    let tick = false;
    return function () {
      if (!tick) {
        callback.call();
        tick = true;
        setTimeout(function () {
          tick = false;
        }, limit);
      }
    }
  }

  getSizeForScroll = () => {
    if (this._isMounted) {
      const scrollAreaHeight = document.getElementById('projectList').scrollHeight
      this.setState({
        size: {
          ...this.state.size, ...{
            scrollAreaHeight: scrollAreaHeight,
            scrollBarHeight: window.innerHeight * (window.innerHeight / scrollAreaHeight) ,
            prjItemHeight: document.getElementsByClassName('prjListItem')[0].offsetHeight
          }
        }
      })
    }
  }

  onScroll = () => {
    const { scrollBarHeight, prjItemHeight } = this.state.size
    const prjNavs = document.getElementsByClassName('prjnav');
    const currentPrjNum = Math.floor((window.scrollY + scrollBarHeight) / prjItemHeight);

    Array.from(prjNavs).forEach((item, index) => {
      item.classList.remove('on');
      if (index === currentPrjNum) {
        item.classList.add('on')
      }
    });

    // window.location.hash = document.getElementsByClassName('prjnav')[currentPrjNum].hash.replace('#', '')
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
      right: 2%;
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

    const LinkDot = styled.a`
      display: block;
      width: 8px;
      height: 8px;
      margin: 12px 15px;
      border-radius: 50%;
      border: 1px solid #333;
      background-color: transparent;
      &:hover {
        border-color: #aaa;
      }
      &.on {
        background-color: #333;
      }
    `

    const StyledNaviForPrj = styled.div`
      position: fixed;
      top: 50%;
      left: 100px;
      z-index: 999;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    `

    const NaviForPrj = (props) => {
      const {posts, hash} = props;
      return (
        <StyledNaviForPrj>
          {posts.map(({node}, index) => {
            const prjname = node.frontmatter.prjname
            const isPrjMain = hash === ''
            const isCurrentPath = hash === `#${prjname}`
            return (<LinkDot key={prjname} className={`prjnav${isCurrentPath || (isPrjMain && index) === 0 ? ' on' : ''}`} href={`#${prjname}`} />)
          })}
        </StyledNaviForPrj>
      );
    }

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
        <NaviForPrj posts={posts} hash={this.state.hash} />
        <ProjectList id="projectList">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <ProjectListItem key={node.fields.slug} id={node.frontmatter.prjname} className="prjListItem">
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
            prjname
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
