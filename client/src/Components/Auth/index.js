// import libraries
import React, {Component} from 'react';
import { Route } from "react-router-dom";
import axios from 'axios';

// import components
import Login from './login';
import Signup from './signup';
import Info from './info';
import './index.css';

class Auth extends Component {

  state = {
    username: null,
    email: null,
    loggedIn: false,
    token: null
  }

  componentDidMount() {
    if (localStorage.getItem('token')) this.getUser();
  }

  updateUser = (email, username, loggedIn, token) => {
    this.setState({ email, username, loggedIn, token });
  }

  getUser = () => {
    axios.get('/api/user/info', {headers:{"x-auth-token":localStorage.getItem('token')}})
      .then(response => {
        if (response.data.user) {
          this.updateUser(response.data.user.email, response.data.user.username, true, response.data.token)
        } else {
          console.log('No user or Invalid token');
          this.updateUser(null, null, false, null)
        };
      });
  };

  render() {
    return (
      <div id='auth-container'>
        <Info updateUser={this.updateUser}
              loggedIn={this.state.loggedIn}
        />
        { this.state.loggedIn &&
            <p>Welcome Back, {this.state.username}!</p>
        }
        
        
        <Route  path="/login" 
                render={() => 
                  <Login updateUser={this.updateUser} /> 
                } />
        
        <Route  path="/signup"
                render={() => <Signup /> }
        />
      </div>
    )
  }
}

export default Auth;