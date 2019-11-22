import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Carousel from "./Components/Carousel/Carousel.js"
import SideNav from "./Components/SideNav/SideNav.js"
import Navbar from "./Components/TopNav/TopNav.js";
import Auth from "./Components/Auth";
import "./App.css";

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
