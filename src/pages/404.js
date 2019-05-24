import React from "react"
import styled from 'styled-components'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {

  randomIntZeroTo = (max) => {
    return Math.floor(Math.random() * (max + 1))
  }

  render() {

    const StyledLayout = styled(Layout)`
      display:flex;
      height: 70vh;
      align-items: center;
      justify-content:center;
      margin-bottom: 70px;
      @media (max-width: 414px) {
        flex-flow: column;
        align-items: flex-start;
        padding-left: 35px;
      }
    `

    const Text = styled.p`
      line-height: 2;
    `

    const Title = styled.h2`
      margin: 0 0 30px;
      font-size: 100px;
      font-weight: 100;
      color: #111;
      line-height: 1;
    `

    const Emoji = styled.span`
      display: block;
      margin-right: 50px;
      font-size: 150px;
      font-weight: normal;
      color: #111;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      @media (max-width: 414px) {
        margin-bottom: 50px;
        padding-left: 20px;
      }
    `

    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const emoji = [`',:-l`, `:‑O`, `',:(`, `:‑\\`]
    const randomNum = this.randomIntZeroTo(emoji.length - 1)
    
    return (
      <StyledLayout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <Emoji>{`${emoji[randomNum]}`}</Emoji>
        <div>
          <Title>404</Title>
          <Text>Page not found. <br /> The requested page could not be found...</Text>
        </div>
      </StyledLayout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
