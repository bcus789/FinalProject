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
    email: null,
    loggedIn: false,
    token: null
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser = (email, loggedIn, token) => {
    this.setState({ email, loggedIn, token });
  }

  getUser = () => {
    axios.get('/api/user/info', 
      {headers:{"x-auth-token":this.state.token}})
      .then(response => {
      if (response.data.user) {
        console.log(response.data.user);
        this.setState({
          email: response.data.email,
          loggedIn: true,
          token: response.data.token
        });
      } else {
        console.log('No user found on server');
        this.setState({
          email: null,
          loggedIn: false,
          token: null
        });
      };
    });
  };

  render() {
    return (
      <div id='auth-container'>
        <Info updateUser={this.updateUser}
              loggedIn={this.state.loggedIn}
        />
        {this.state.loggedIn && 
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