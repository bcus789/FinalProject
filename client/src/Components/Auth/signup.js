import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  
  state = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPass: ''
  }

	// update state on form input
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value });
  };
  
	handleSubmit = event => {
    event.preventDefault();
    console.log('signing up new user: ' + this.state.username);
    
    if (this.state.password === this.state.confirmPass) {
      let data = {
        username: this.state.username,
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password
      }

      axios.post("/user/register", data)
        .then(response => console.log(response))
        .catch(err => console.log(err));
    } else {
      alert('passwords did not match');
      console.log('passwords did not match');
    }
    
  };

  render() {
    return (
      <div>
        <h2>Registration Form</h2>
        <form>
          <div>
            <label  htmlFor="username">Username</label>
            <input  type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange} />
          </div>

          <div>
            <label  htmlFor="email">Email</label>
            <input  type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange} />
          </div>

          <div>
            <label  htmlFor="firstName">Name</label>
            <input  type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First"
                    value={this.state.firstName}
                    onChange={this.handleChange} />

            <input  type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last"
                    value={this.state.lastName}
                    onChange={this.handleChange} />
          </div>

          <div>
            <label  htmlFor="password">Password: </label>
            <input  placeholder="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange} />
          </div>

          <div>
            <label  htmlFor="confirmPass">Confirm Password: </label>
            <input  placeholder="Confirm"
                    type="confirmPass"
                    name="confirmPass"
                    value={this.state.confirmPass}
                    onChange={this.handleChange} />
          </div>

          <div>
            <button onClick={this.handleSubmit}
                    type="submit" 
            > Sign up
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup;