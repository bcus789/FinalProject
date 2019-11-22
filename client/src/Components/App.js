import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Carousel from "./Carousel/Carousel.js";
import LogModal from "./Modal/Modal.js";
import "./App.css";
import AnteUp from "./AnteUp/Dropdown";
import SideNav from "./SideNav/SideNav.js";
import Navbar from "./TopNav/TopNav.js";
import Stream from "./Stream.js";
import AgeVar from "./ageVar/ageVar.js";

function App() {
  return (
    <div>
      <Navbar />
      <SideNav />
      <LogModal />
      <Stream />
      <AnteUp />
    </div>
  );
}

export default App;
