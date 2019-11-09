import React, {Component} from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

class Login extends Component {

  state = {
    username: "",
    password: ""
  };

  // update state on form input
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value });
  };

  // post login info to /login
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('logging in ' + this.state.username);
    let data = {
      username: this.state.username,
      password: this.state.password
    }

    axios.post("/login", data)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>____ Login ____ Signup ____</h1>
        
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="password">Password: </label>
            <input
                placeholder="password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
          </div>

          <div>
            <button
              onClick={this.handleSubmit}
              type="submit">Login
            </button>
          </div>

        </form>
      </div>
    )
  }
}

export default Login;