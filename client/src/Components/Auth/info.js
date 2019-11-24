import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Info extends Component {

  logout = () => {
    console.log('logging out')
    this.props.updateUser(null, null, null, null, null, false)
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
                <span>LOG OUT</span></Link>
              </section>
            ) : (
              <section>
                <Link to="/login"><span>LOG IN</span></Link><br/>
                <Link to="/signup"><span>REGISTER</span></Link>
              </section>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default Info