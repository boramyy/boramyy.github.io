import React from "react"
import Header from "../components/header"
import styled, { createGlobalStyle } from 'styled-components'

class Layout extends React.Component {
  render() {
    const { children, className } = this.props

    const GlobalStyle = createGlobalStyle`
      html {
        height: 100%;
        max-width: 100%;
        overflow-x: hidden;
        scroll-behavior: smooth;
      }

      ::-moz-selection {color:#fff;background:#ff6db6}
      ::selection {color:#fff;background:#ff6db6}

      html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      b, u, i, center,
      dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td,
      article, aside, canvas, details, embed, 
      figure, figcaption, footer, header, hgroup, 
      menu, nav, output, ruby, section, summary,
      time, mark, audio, video {
        font-family: 'Noto Sans KR', san-serif;
      }

      body {
        margin: 0;
      }

      code {
        font-family: 'Roboto Mono';
        font-size: 0.85em;
      }
      
      h2, h3, h4, h5, h6 {
        margin-top: 100px;
        margin-bottom: 30px;
        font-family: 'Noto Sans KR', san-serif;
        font-weight: bold;
        color:#333;
        line-height: 1;
      }

      h2 {
        font-size:1.85em;
        font-weight:normal;
        color:#111;
        line-height:1.8;
        letter-spacing:-0.4px;
        word-spacing:5px;
      }

      h3 {font-size:1.6em;}
      h4 {font-size:1.3em;margin-top:60px;margin-bottom:15px;}
      h5 {font-size:1.1em;margin-top:45px;margin-bottom:15px;}
      h6 {font-size:1em;margin-top:30px;margin-bottom:15px;}
      
      .clear {
        &:after {
          content: '';
          display: block;
          clear: both;
          width: 0;
          height: 0
        }
      }
      .container {
        width: 100%;
        max-width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding-right: 100px;
        padding-left: 100px;
        box-sizing: border-box;
      }
      .page {
        padding-top: 100px;
        padding-bottom: 100px;
      }
    `
    
    const StyledFooter = styled.footer`
      padding-bottom: 30px;
      font-size: 12px;
      text-align: right;
    `

    return (
      <div>
        <GlobalStyle />
        <Header />
        <main className={className}>{children}</main>
        <StyledFooter className="container">
          Copyright 2019. boramkim All rights reserved.
        </StyledFooter>
      </div>
    )
  }
}

export default Layout
