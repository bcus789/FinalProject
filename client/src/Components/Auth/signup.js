import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  
  state = {
    username: '',
    password: ''
  }
  //this.handleSubmit = this.handleSubmit.bind(this)
  //this.handleChange = this.handleChange.bind(this)
	
	// update state on form input
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value })
  };
  
	handleSubmit = event => {
    event.preventDefault();
    console.log('signing up new user: ' + this.state.username);
    let data = {
      username: this.state.username,
			password: this.state.password
    }

    axios.post("/user/register", data)
      .then(response => console.log(response))
      .catch(err => console.log(err));
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
                    onChange={this.handleChange}
            />
          </div>

          <div>
            <label  htmlFor="password">Password: </label>
            <input  placeholder="password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
            />
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