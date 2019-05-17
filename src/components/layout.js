import React from "react"
import Header from "../components/header"
import styled from 'styled-components'

class Layout extends React.Component {

  render() {
    const { children, className } = this.props
    
    const StyledFooter = styled.footer`
      padding-bottom: 30px;
      font-size: 12px;
      text-align: right;
      &.fixed {
        position: fixed;
        right: 0;
        bottom: 0;
      }
    `

    return (
      <div>
        <Header className={this.props.fixed ? 'fixed': ''} />
        <main className={className}>{children}</main>
        <StyledFooter className={`container${this.props.fixed ? ' fixed' : ''}`}>
          Copyright 2019. boramkim All rights reserved.
        </StyledFooter>
      </div>
    )
  }
}

export default Layout
