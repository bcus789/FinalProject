import React, {Component} from "react";
import { BrowserRouter as Router} from "react-router-dom";
import LogModal from "./Components/Modal/Modal.js";
import AnteUp from "./Components/AnteUp/Dropdown";
import SideNav from "./Components/SideNav/SideNav.js";
import Navbar from "./Components/TopNav/TopNav.js";
import Stream from "./Components/Stream.js";
import "./App.css";


class App extends Component {
  
  state = {
    token: null,
    loggedIn: false
  };

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      this.setState({token: token, loggedIn: true})
    }
  }

  render() {

    return (
      <Router>
      <div>
        <SideNav />
        <LogModal loggedIn={this.state.loggedIn}
                  token={this.state.token}
        />
        <Stream />
        <AnteUp />
        <Navbar />
      </div>
      </Router>
    );
  }
}

export default App;
