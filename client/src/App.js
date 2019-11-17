import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

import "./App.css";
import Carousel from "./Components/Carousel/Carousel.js"
import SideNav from "./Components/SideNav/SideNav.js"
import Navbar from "./Components/TopNav/TopNav.js";


function App() {
  return (
    <Router>
      <div>
        <SideNav />
        <Carousel />
        <Navbar /> 
      </div> 
    </Router>
  );
}

export default App;
