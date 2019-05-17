import React from "react"
import styled from 'styled-components'
import axios from "axios"

class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      user: {
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
    axios.get('https://api.github.com/users/boramyy')
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
      margin: 15px 80px 100px;
      padding: 50px;
      border: 1px solid #ccc;
      box-shadow: 15px 15px 0 0 rgba(0,0,0,0.1);
    `

    const StyledImage = styled.img`
      width: 100px;
      height: 100px;
      border-radius: 50%;
      vertical-align: middle;
    `
    
    const StyledName = styled.span`
      margin-left:30px;
      font-size: 20px;
      font-weight: bold;
    `

    return (
      <UserCard>
        <StyledImage src={this.state.user.img} alt={this.state.user.name} />
        <StyledName>{this.state.user.name}</StyledName>
      </UserCard>
    )
  }
}

export default User
