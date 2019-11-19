import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Carousel from "./Carousel/Carousel.js";
import LogModal from "./Modal/Modal.js";
import "./App.css";
import Example from "./AnteUp/AnteUp.js";
import SideNav from "./SideNav/SideNav.js";
import Navbar from "./TopNav/TopNav.js";
import Stream from "./Stream.js";

function App() {
  return (
    <div>
      <SideNav />

      <LogModal />

      <Stream />
      <AnteUp />
      <Navbar />
    </div>
  );
}

export default App;
