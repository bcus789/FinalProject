import React, {Component} from "react";
import { BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';
import LogModal from "./Components/Modal/Modal.js";
import AnteUp from "./Components/AnteUp/Dropdown";
import SideNav from "./Components/SideNav/SideNav.js";
import Navbar from "./Components/TopNav/TopNav.js";
import Stream from "./Components/Stream.js";
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
    this.setState({username, wallet, loggedIn});
  }

  getUser = () => {
    axios.get('/api/user/info', {headers:{"x-auth-token":localStorage.getItem('token')}})
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
        <SideNav />
        <LogModal loggedIn={this.state.loggedIn}
                  token={this.state.token} />
        {/* <Stream /> */}
        <AnteUp username={this.state.username}
                wallet={this.state.wallet}
                loggedIn={this.state.loggedIn} />
        <Navbar />
      </div>
      </Router>
    );
  }
}

export default App;
