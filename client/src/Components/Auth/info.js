import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

class Info extends Component {
  
  /* constructor() {
    super()
    this.logout = this.logout.bind(this);
  } */

  logout = (event) => {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(err => console.log(err)
    )
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log(this.props);

    return (
      <div>
        <header>
          <div>
            {loggedIn ? (
              <section>
                <Link to="#" onClick={this.logout}>
                <span>logout</span></Link>
              </section>
            ) : (
              <section>
                <Link to="/"><span>home</span></Link><br/>
                <Link to="/login"><span>login</span></Link><br/>
                <Link to="/signup"><span>sign up</span></Link>
              </section>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default Info