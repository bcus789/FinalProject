import React, {Component} from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "../Modal/Modal.css";

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

    axios.post("/user/login", data)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          this.props.updateUser(response.data.username, true)
          /* {
            loggedIn: true,
            username: response.data.username
          }) */
          console.log('successfully logged in user: ' + this.state.username);
        } else {
          console.log('Log in failed');
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2 className="login-txt">Login</h2>
        <form>
          <div>
            
            
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange} />
          </div>

          <div>
          
            <input className="password-input"
                placeholder="password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange} />
          </div>

          <div>
            <button onClick={this.handleSubmit}
                    type="submit">LOG IN
            </button>
          </div>

        </form>
      </div>
    )
  }
}

export default Login;