import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Carousel from "./Carousel/Carousel.js"
import LogModal from "./Modal/Modal.js";
import "./App.css";
import SideNav from "./SideNav/SideNav.js"
import Navbar from "./TopNav/TopNav.js";

function App() {
  return (
    <div>

    

      <SideNav />

      <LogModal />

      <Carousel />

      

      <Navbar />

    



    </div>
  );
}

export default App;
