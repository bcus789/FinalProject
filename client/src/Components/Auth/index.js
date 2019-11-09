// import libraries
import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
import axios from 'axios';

// import components
import Login from './login';
import Signup from './signup';
import Info from './info';
import Home from './home';

class Auth extends Component {

  state = {
    loggedIn: false,
    username: null
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser = userObj => {
    this.setState(userObj);
  }

  getUser = () => {
    axios.get('/user').then(response => {
      console.log('getting current user');
      console.log(response.data);
      if (response.data.user) {
        console.log('User found in server session: ');
        console.log(response.data.user);
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log('No user currently in server session');
        this.setState({
          loggedIn: false,
          username: null
        });
      };
    })
  }

  render() {
    return (
      <div>
        <Info updateUser={this.updateUser}
              loggedIn={this.state.loggedIn} />
        {this.state.loggedIn && 
          <p>Welcome Back, {this.state.username}!</p>
        }

        <Route  exact path="/"
                component={Home} />

        <Route path="/login"
                render={() => <Login  
                  updateUser={this.updateUser} /> }
        />

        <Route  path="/signup"
                render={() => <Signup/> }
        />
      </div>
    )
  }
}

export default Auth;