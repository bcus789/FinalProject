import React, {Component} from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../Auth/login.js'
import Signup from '../Auth/signup';

class Auth extends Component {

  render() {
    return (
      <div>
        <Login />
        <Signup />
      </div>
    )
  }
}

export default Auth;