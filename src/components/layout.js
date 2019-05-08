import React from "react"
import Header from "../components/header"
import { createGlobalStyle } from 'styled-components'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    const GlobalStyle = createGlobalStyle`
      body {
        margin: 0;
        font-family: 'Noto Sans KR', san-serif;
      }
      code {
        font-family: 'Roboto Mono';
        font-size: 0.85em;
      }
      .container {
        width: 100%;
        max-width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding-right: 100px;
        padding-left: 100px;
      }
    `

    return (
      <div>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <footer>
          Copyright 2019. boramkim All rights reserved.
        </footer>
      </div>
    )
  }
}

export default Layout
