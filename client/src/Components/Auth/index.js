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
    loggedIn: false
  }

  componentDidMount() {
    if (localStorage.getItem('token')) this.getUser();
  }

  updateUser = (email, username, wallet, loggedIn) => {
    this.setState({ email, username, wallet, loggedIn});
  }

  getUser = () => {
    axios.get('/api/user/info', {headers:{"x-auth-token":localStorage.getItem('token')}})
      .then(response => {
        console.log(response.data);
        if (response.data) {
          this.updateUser(response.data.email, response.data.username, response.data.wallet, true)
        } else {
          console.log('No user or Invalid token');
          this.updateUser(null, null, false)
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