import React, {Component} from 'react';
//import { Route, Link } from "react-router-dom";
import axios from 'axios';

class Bets extends Component {

  state = {
    username: this.props.username,
    loggedIn: this.props.loggedIn
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser = (newUsername, newLoggedIn) => {
    this.setState({
      username: newUsername,
      loggedIn: newLoggedIn
    });
  }

  // check for user credentials on server
  getUser = () => {
    axios.get('/user').then(response => {
      if (response.data.user) {
        this.setState({
          username: response.data.user.username,
          loggedIn: true
        });
      } else {
        console.log('No user found in server session');
        this.setState({
          username: null,
          loggedIn: false
        });
      };
    });
  };

  render() {
    let greeting;
    if (this.state.loggedIn) {
        greeting = <h1>Welcome Back, {this.state.username}!</h1>
    } else {
        greeting = <h1>No user logged in</h1>
    }
    
    return (
      <div>
        {greeting}
        
      </div>
    )
  }
}

export default Bets;