import React, {Component} from 'react';
import { BrowserRouter as Redirect } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import axios from "axios";
import "../Modal/Modal.css";

class Login extends Component {

  state = {
    email: "",
    password: ""
  };

  // update state on form input
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value });
  };

  // post login info to /api/user/auth
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('logging in ' + this.state.email);
    let data = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post("/api/user/auth", data)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          this.props.updateUser(
              response.data.user.userId,
              response.data.user.username,
              response.data.user.email,
              response.data.user.firstName,
              response.data.user.lastName,
              response.data.user.wallet,
              true)
          localStorage.setItem('token', response.data.token)
          console.log('successfully logged in user: ' + this.state.email);
          this.props.hideModal()
        } else {
          console.log('Unable to sign in user');
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.props.loggedIn) return (<Redirect to='/' />)
    return (
      <Fade up>
      <div>
        <h2 className="login-txt">Login</h2>
        <form>
        
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
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
      </Fade>
    )
  }
}

export default Login;