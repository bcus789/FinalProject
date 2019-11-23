import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Wallet from './Pages/Wallet/Wallet'
import Events from './Pages/Events/Events'
import "./App.css";
import SideNav from "./Components/SideNav/SideNav";

class App extends Component {

  state = {
    token: null,
    loggedIn: false
  };

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      this.setState({ token: token, loggedIn: true })
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/wallet' component={Wallet} />
            <Route exact path='/events' component={Events} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;