import React from "react";
import About from './Pages/About/About.js';
import Home from './Pages/Home/Home.js';
import Wallet from './Pages/Wallet/Wallet.js'
import Events from './Pages/Events/Events.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/wallet' component={Wallet} />
        <Route exact path='/events' component={Events} />

      </Switch>
    </Router>
  );
}

export default App;
