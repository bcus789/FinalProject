import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Carousel from "./Carousel/Carousel.js"
import SideDrawer from "./Sidedrawer/Sidedrawer.js"
import Backdrop from "./Backdrop/Backdrop.js";
import LogModal from "./Modal/Modal.js";
import "./App.css";
import SideNav from "./SideNav/SideNav.js"
import Navbar from "./TopNav/TopNav.js";

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  clickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !this.state.sideDrawerOpen}
    })
  }


  render() {
    return (

      <div>
        <SideDrawer />
     <Backdrop />
      <SideNav />

      <LogModal />

      <Carousel />

      

      <Navbar />
      </div>
      
    )
    
  }
}
export default App;
