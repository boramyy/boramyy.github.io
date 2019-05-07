import React from "react"
import Header from "../components/header"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
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
