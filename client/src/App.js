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
    username: null,
    wallet: null,
    loggedIn: false
  };

  componentWillMount() {
    if (localStorage.getItem('token')) this.getUser();
  }

  updateUser = (username, wallet, loggedIn) => {
    this.setState({ username, wallet, loggedIn });
  }

  getUser = () => {
    axios.get('/api/user/info', { headers: { "x-auth-token": localStorage.getItem('token') } })
      .then(response => {
        console.log(response)
        if (response) {
          this.updateUser(response.data.username, response.data.wallet, true)
        } else {
          console.log('No user or Invalid token');
          this.updateUser(null, null, false)
        };
      });
  };

  render() {
    return (
      <Router>
        <div>
          <LogModal loggedIn={this.state.loggedIn}
            token={this.state.token} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/wallet' component={Wallet} />
            <Route exact path='/events' component={Events} />
          </Switch>
          <AnteUp username={this.state.username}
            wallet={this.state.wallet}
            loggedIn={this.state.loggedIn} />
        </div>
      </Router>

    );
  }
}

export default App;