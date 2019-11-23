import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "../Modal/Modal.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  // update state on form input
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // post login info to /api/user/auth
  handleSubmit = e => {
    e.preventDefault();
    console.log("logging in " + this.state.email);
    let data = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/api/user/auth", data)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          this.props.updateUser(
            response.data.user.email,
            response.data.user.username,
            true,
            response.data.token
          );
          localStorage.setItem("token", response.data.token);
          console.log("successfully logged in user: " + this.state.email);
        } else {
          console.log("Log in failed");
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2 className="login-txt">Login</h2>
        <form>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Password: </label>
            <input
              className="password-input"
              placeholder="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <button onClick={this.handleSubmit} type="submit">
              LOG IN
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
