import React from "react"
import styled from 'styled-components'
import { graphql } from "gatsby"
import mainImgSrc from "../../content/assets/sansooyoo.jpg"
import mainVideoSrc from "../../content/assets/magnolia.mp4"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const MainGroup = styled.article`
      position: relative;
      float: left;
      width: 100%;
      padding-top: 100px;
      padding-bottom: 100px;
      &:nth-child(2) {padding-right:10%;padding-left:20%;}
    `;

    const MainGroupTitle = styled.h2`
      margin-top: 50px;
      margin-bottom: 100px;
      font-size: 6em;
      font-weight: bold;
      color: #111;
      line-height: 1.2;
      letter-spacing: -2px;
      word-spacing: 20px;
      word-break: keep-all;
      .thin {
        font-weight: 100;
        letter-spacing: 0px;
      }
      .desc { 
        width: 320px;
        margin-top: 50px;
        font-size: 14px;
        font-weight: normal;
        line-height: 2.2;
        letter-spacing: 0px;
        word-spacing: 2px;
      }
    `;

    const MainImg = styled.img`
      position: absolute;
      top: 400px;
      left: 44%;
      width: 35%;
      max-width: 570px;
      z-index: -1;
    `
    
    const MainVideo = styled.video`
      position: absolute;
      top: 50%;
      right: 8%;
      width: 45%;
      z-index: -1;
      -webkit-transform: translateY(-60%);
      transform: translateY(-60%);
    `
    
    const StackBox = styled.table`
      max-width:1000px;
      tr:last-child {
        td {padding-bottom:0;}
      }
      td {
        padding-bottom:100px;
        &:nth-child(2n-1) {width:45%;}
        &:nth-child(2n) {width:55%;}
      }
      .stack-subtitle {font-size:26px;font-weight:bold;line-height:1.4;}
      .stack-desc {font-size:16px;word-spacing:2px;line-height:2.2;letter-spacing:0px;}
      .stack-skills {
        display:block;margin-top:30px;font-size:16px;font-weight:100;line-height:3;
        .stack-skills-item {margin-right:50px;}
      }
    `

    const StackSkill = styled.span`
      margin-right: 50px;  
    `;
    const frontSkills = ['javascript', 'react', 'vue', 'html', 'css', 'sass', 'materialize', 'bootstrap', 'jquery'];
    // const backSkills = ['java - spring', 'node - express', 'oracle', 'mysql'];

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <MainGroup className="container">
          <MainGroupTitle>
            boram kim,<br />developer<br />
            <span className="thin">in seoul</span>
            <p className="desc">
              서울 사는 주니어 프론트엔드 개발자입니다. 응애.<br />
              이 사이트를 통해 글쓰기와 코딩 능력을 함께 길러 나가고자 합니다.
              현재 절찬리 구직중입니다.
            </p>
          </MainGroupTitle>
          <MainImg src={mainImgSrc} alt="korean cornel dogwood"/>
        </MainGroup>
        <MainGroup>
          <MainGroupTitle className="container">
            <span className="thin">things</span><br />i can do
          </MainGroupTitle>
          <div className="group-content container">
            <StackBox>
              <tbody>
                <tr>
                  <td className="stack-subtitle">front-end</td>
                  <td className="stack-content">
                    <p className="stack-desc">
                      react를 이용해 
                      html과 css 만으로 원하는대로 웹페이지를 그려낼 수 있고,
                      다양한 라이브러리를 사용해보았습니다.
                    </p>
                    <span className="stack-skills">
                      <span className="stack-skills-item">
                        {frontSkills.map(function(item, index){
                          return <StackSkill key={index}>{item}</StackSkill>
                        })}
                      </span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="stack-subtitle">back-end</td>
                  <td className="stack-content">
                    <p className="stack-desc">
                      데이터베이스와 연동해 기본적인 crud 게시판 구현이 가능하며,
                      짜여진 코드를 읽고 이해하는데 문제가 없습니다.
                    </p>
                    <span className="stack-skills">
                      <span className="stack-skills-item">java - spring</span>
                      <span className="stack-skills-item">node - express</span>
                      <span className="stack-skills-item">oracle</span>
                      <span className="stack-skills-item">mysql</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </StackBox>
          </div>
        </MainGroup>

        <MainGroup className="container">
          <MainGroupTitle>
            bibia<br/>be ye ye<br/>
            <p className="desc">
              가나에서 사용하는 언어중 하나인 트위(twi)어로<br/> 'all will be well'을 의미합니다.
            </p>
          </MainGroupTitle>
          <MainVideo className="last-visual" src={mainVideoSrc} type="video/mp4" autoPlay muted loop />
        </MainGroup>
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
