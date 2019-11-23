import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Info extends Component {

  logout = () => {
    console.log('logging out')
    this.props.updateUser(null, null, false, null)
    localStorage.removeItem('token');
  }

  render() {
    return (
      <div>
        <header>
          <div>
            {this.props.loggedIn ? (
              <section>
                <Link to="/login" onClick={this.logout}>
                <span>logout</span></Link>
              </section>
            ) : (
              <section>
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