// import libraries
import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
import axios from 'axios';

// import components
import Bets from '../Bets';
import Login from './login';
import Signup from './signup';
import Info from './info';
import Home from './home';

class Auth extends Component {

  state = {
    username: null,
    loggedIn: false
  }

 /*  componentDidMount() {
    this.updateUser();
  }

  updateUser = (newUsername, newLoggedIn) => {
    this.setState({
      username: newUsername,
      loggedIn: newLoggedIn
    });
  } */

/*   getUser = () => {
    axios.get('/user').then(response => {
      console.log('getting current user ... ');
      console.log(response.data);
      if (response.data.user) {
        console.log('User found in server session: ');
        console.log(response.data.user);
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
  }; */

  render() {
    return (
      <div>
        <Bets loggedIn={this.state.loggedIn}
              username={this.state.username}
        />
        <Info updateUser={this.updateUser}
              loggedIn={this.state.loggedIn}
        />
        {this.state.loggedIn && 
          <p>Welcome Back, {this.state.username}!</p>
        }
        
        <Route  exact path="/"
                component={Home} />
        
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