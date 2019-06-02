import React from "react"
import styled from 'styled-components'
import axios from "axios"

class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      user: {
        id: "boramyy",
        name: "",
        img: "",
        url: "",
      },
    };
  }

  componentDidMount() {
    this.fetchGitData();
  }

  fetchGitData = function() {
    axios.get(`https://api.github.com/users/${this.state.user.id}`)
      .then(({data: {name, avatar_url, html_url}}) => {
        this.setState({
          user: {
            ...this.state.user, ...{
              name,
              img: avatar_url,
              url: html_url
            }
          }
        })
      })
  }
  
  render() {
    const UserCard = styled.div`
      display: flex;
      align-items: center;
      margin: 15px 50px 100px;
      padding: 50px;
      border: 1px solid #ccc;
      box-shadow: 15px 15px 0 0 rgba(0,0,0,0.1);
      @media (max-width: 768px) {
        margin: 15px 0 70px;
        padding: 30px;
      }
    `

    const StyledImage = styled.img`
      width: 100px;
      height: auto;
      border-radius: 50%;
      vertical-align: middle;
      @media (max-width: 414px) {
        width: 90px;
      }
    `
    
    const StyledInfo = styled.div`
      display: inline-block;
      margin-left: 30px;
    `

    const StyledName = styled.div`
      font-size: 20px;
      font-weight: bold;
      @media (max-width: 414px) {
        font-size: 18px;
      }
    `
    
    const StyledUrl = styled.div`
      margin-top: 20px;
      svg {
        margin-right: 8px;
        margin-bottom: -2px;
      }
      @media (max-width: 414px) {
        font-size: 14px;
      }
    `

    const StyledLink = styled.a`
      padding-top: 5px;
      padding-bottom: 5px;
      text-decoration: none;
    `;

    return (
      <UserCard>
        <StyledImage src={this.state.user.img} alt={this.state.user.name} />
        <StyledInfo>
          <StyledName>{this.state.user.name}</StyledName>
          <StyledUrl>
            {/* <svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg> */}
            <StyledLink href={this.state.user.url} target='_blank'>
              <svg viewBox="0 0 32 32" width="16" height="16">
                <path
                  d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z">
                </path>
              </svg>
              {this.state.user.id}
            </StyledLink>
          </StyledUrl>
        </StyledInfo>
      </UserCard>
    )
  }
}

export default User