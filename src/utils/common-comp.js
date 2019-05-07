import React from "react"
import styled from 'styled-components'

class HiddenText extends React.Component {
  render() {
    const HiddenTextForSemantic = styled.strong`
      overflow:hidden;
      position:absolute;
      width:0;
      height:0;
      line-height:0;
      color: transparent;
    `
    return (
      <HiddenTextForSemantic>{this.props.text}</HiddenTextForSemantic>
    )
  }
}
export default HiddenText