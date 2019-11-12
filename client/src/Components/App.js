import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AgeVar from "./components/ageVar/ageVar.js";
import "./components/ageVar/ageVar.css";
import TopNav from "./components/TopNav/TopNav.js";
import Jumbo from "./components/Jumbotron/Jumbo.js";
import StreamBox from "./components/Carousel/Carousel.js";
import "./base.css";
// import Nav from "./components/SideNav/SideNav.js";

function App() {
  return (
    <div>
      <TopNav />
      <StreamBox />
      <Router>
        <div></div>
      </Router>
    </div>
  );
}

export default App;
