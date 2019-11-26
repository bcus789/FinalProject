// import libraries
import React, {Component} from 'react';
import { Route } from "react-router-dom";

// import components
import Login from './login';
import Signup from './signup';
import Info from './info';
import './index.css';

class Auth extends Component {

  render() {
    return (
      <div id='auth-container'>
        <Info username={this.props.username}
              loggedIn={this.props.loggedIn}
              updateUser={this.props.updateUser} />
        { this.props.loggedIn &&
            <p>Welcome Back, {this.props.username}!</p>
        }
        
        
        <Route  path="/login" 
                render={() => 
                  <Login  loggedIn={this.props.loggedIn}
                          updateUser={this.props.updateUser} 
                          hideModal={this.props.hideModal} /> 
                } />
        
        <Route  path="/signup"
                render={() => <Signup loggedIn={this.props.loggedIn}
                                      updateUser={this.props.updateUser} 
                                      hideModal={this.props.hideModal} />
                } />
      </div>
    )
  }
}

export default Auth;