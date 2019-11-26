// import libraries
import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";

// import components
import Login from './login';
import Signup from './signup';

class Auth extends Component {

  logout = () => {
    console.log('logging out')
    this.props.updateUser(null, null, null, null, null, null, false)
    localStorage.removeItem('token');
  }

  render() {
    
    return (
      <div id='auth-container'>
        {this.props.loggedIn ? (
          <section>
            <p>Welcome Back, {this.props.username}!</p>
            <Link to="/" onClick={this.logout}>
            <span>LOG OUT</span></Link>
          </section>
        ) : (
          <section>
            <Link to="/login"><span>LOG IN</span></Link><br/>
            <Link to="/signup"><span>REGISTER</span></Link>
            <Route  path="/login"
                    render={ () => 
                    <Login  loggedIn={this.props.loggedIn}
                            updateUser={this.props.updateUser}
                            hideModal={this.props.hideModal} /> 
                    }
            />
            <Route  path="/signup"
                    render={ () => 
                    <Signup loggedIn={this.props.loggedIn}
                            updateUser={this.props.updateUser} 
                            hideModal={this.props.hideModal} />
                    }
            />
          </section>
        )}
      </div>
    )
  }
}

export default Auth;