import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Wallet from './Pages/Wallet/Wallet'
import Events from './Pages/Events/Events'
import axios from 'axios';
import LogModal from "./Components/Modal/Modal.js";
import AnteUp from "./Components/AnteUp/Dropdown";
import "./App.css";

class App extends Component {

  state = {
    userId: null,
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    wallet: null,
    loggedIn: false
  };

  componentDidMount() {
    if (localStorage.getItem('token')) this.getUser();
  }

  updateUser = (userId, username, email, firstName, lastName, wallet, loggedIn) => {
    this.setState({ userId, username, email, firstName, lastName, wallet, loggedIn });
  }

  getUser = () => {
    axios.get('/api/user/info', { headers: { "x-auth-token": localStorage.getItem('token') } })
      .then(response => {
        console.log(response)
        if (response) {
          this.updateUser(
            response.data._id,
            response.data.username,
            response.data.email,
            response.data.firstName,
            response.data.lastName,
            response.data.wallet,
            true)
        } else {
          console.log('No user or Invalid token');
          //this.updateUser(null, null, null, null, null, null, false)
        };
      });
  };

  render() {
    return (
      <Router>
        <div>
          <LogModal username={this.state.username}
                    loggedIn={this.state.loggedIn}
                    updateUser={this.updateUser} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/wallet' component={Wallet} />
            <Route exact path='/events' component={Events} />
          </Switch>
          <AnteUp userId={this.state.userId}
                  username={this.state.username}
                  wallet={this.state.wallet}
                  loggedIn={this.state.loggedIn} />
        </div>
      </Router>

    );
  }
}

export default App;