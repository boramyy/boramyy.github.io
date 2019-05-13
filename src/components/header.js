import React from "react"
import HiddenText from "../utils/common-comp"
import styled from 'styled-components'
import { Link } from "gatsby"

class Header extends React.Component {
  render() {
    const StyledHeader = styled.header`
      padding-top:60px;
    `;

    const Nav = styled.nav`
      float: right;
      height: 30px;
    `;

    const NavLink = styled(Link)`
      display: block;
      float: left;
      margin-left:20px;
      padding:5px;
      font-size:15px;
      font-weight:100;
      color: inherit;
      text-decoration: none;
      box-shadow: none;
      &:hover {color:#000}
      &.on {
        position:relative;font-weight:400;color:#111;
        svg {stroke-width: 1.5px;}
      }
    `;

    const Logo = styled(NavLink)`
      margin-top: 5px;
      margin-left: 0;
      padding: 0;
    `;

    const NavLinkWithATag = styled.a`
      display: block;
      float: left;
      margin-left:20px;
      padding: 5px;
      font-family:'Noto Sans KR', san-serif;
      fill: #777;
      text-decoration: none;
      svg {
        display: block;
        vertical-align: middle
      }
      &:hover {fill: #000;}
    `;
    
    return (
      <StyledHeader className="container clear">
        <HiddenText text="Boram Kim"/>
        <Logo to={`/`} className="logo" activeClassName="on">
          <svg width="18px" height="18px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 25"
            style={{ enableBackground: `new 0 0 25 25`, stroke: `#111`, fill: `none`}} xmlSpace="preserve">
            <g>
              <path d="M7.6,22.8c-0.5,0-1-0.1-1.5-0.2c-1.4-0.4-2.4-1.1-2.8-2.1c-0.3-0.8-0.2-1.8,0.2-2.9c0.7-1.8,3.7-5.1,5.9-6.7
                c-0.1,0-0.1,0.1-0.2,0.1c-1.4,0.6-3.6,1.5-5.1,0.9c-0.7-0.3-1.3-0.9-1.6-1.8c-1.1-2.9-0.4-5.1,2-6.7c1.3-0.8,2.7-1,3.9-0.6
                c1.4,0.5,2.4,1.9,2.9,3.7c0,0.1,0,0.1-0.1,0.2c-0.1,0-0.1,0-0.2-0.1c-0.4-1.7-1.4-3-2.7-3.5C7.2,2.5,5.9,2.7,4.7,3.5
                C2.4,5,1.7,7.2,2.7,10c0.3,0.8,0.8,1.4,1.5,1.7c1.5,0.6,3.6-0.3,4.9-0.9c0.6-0.3,1.1-0.5,1.4-0.5c0.1,0,0.1,0,0.1,0.1
                c0,0.1,0,0.1-0.1,0.1c-2.1,1-6,5.1-6.8,7.2c-0.4,1.1-0.5,2-0.2,2.7c0.4,0.9,1.3,1.6,2.6,2c1.7,0.4,4,0.1,5.2-1.5
                c0.6-0.9,0.8-2.1,0.9-3.2c0.1-1.2,0.2-2.4,0.2-3.5c0.1-2,0.1-4.1,0.6-6.1c0.3-1.5,0.8-2.7,1.6-3.5l0,0c0.8-1,2.2-2.6,4.6-2.3
                c1.7,0.2,3.2,1.6,3.6,3.3c0.4,1.7-0.3,3.3-1.8,4.4c-1.3,0.9-3.1,0.8-4.6,0.8c-0.8,0-1.7,0-2.3,0.1c3.1,2.1,6.5,6.4,7.8,10
                c0,0.1,0,0.1-0.1,0.2c-0.1,0-0.1,0-0.2-0.1c-1.4-3.6-4.9-8-7.9-10c0,0-0.1-0.1-0.1-0.1c0,0,0-0.1,0.1-0.1c0.7-0.2,1.6-0.2,2.6-0.2
                c1.5,0,3.2,0.1,4.5-0.8c1.5-1,2.1-2.5,1.7-4.1c-0.4-1.7-1.8-2.9-3.4-3.1c-2.3-0.3-3.6,1.2-4.4,2.2l0,0c-0.7,0.8-1.2,1.9-1.5,3.4
                c-0.4,2-0.5,4-0.6,6c0,1.2-0.1,2.4-0.2,3.6c-0.1,1.1-0.3,2.3-1,3.3C10.6,22.3,9,22.8,7.6,22.8z" />
            </g>
          </svg>
        </Logo>
        <Nav>
          <NavLink to={`/dev`} className="nav-item" activeClassName="on">dev</NavLink>
          <NavLink to={`/prj`} className="nav-item" activeClassName="on">prj</NavLink>
          <NavLink to={`/pht`} className="nav-item" activeClassName="on">pht</NavLink>
          <NavLinkWithATag href={`https://github.com/boramyy`} className={[`nav-item`, `link`]}>
            <svg viewBox="0 0 32 32" width="16" height="16">
              <path
                d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z">
              </path>
            </svg>
          </NavLinkWithATag>
          <NavLinkWithATag href={`https://github.com/boramyy`} className={[`nav-item`, `link`]}>
            <svg viewBox="0 0 14 16" width="14" height="16">
              <path fillRule="evenodd"
                d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z">
              </path>
            </svg>
          </NavLinkWithATag>
        </Nav>
      </StyledHeader>
    )
  }
}

export default Header
