import React, {Component} from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../Auth/login.js'

class Auth extends Component {

  render() {
    return (
      <div>
        <Login />
      </div>
    )
  }
}

export default Auth;