import React from "react";
import Carousel from "./Components/Carousel/Carousel";
import SideNav from "./Components/SideNav/SideNav.js"
import Stream from "./Components/Stream/Stream.js";
import Chat from './Components/Chat/Chat.js'
import Navbar from "./Components/TopNav/TopNav.js";
import About from './Pages/About/About.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (

    <Router>

      <div>
        <SideNav />
        <Carousel />
        <Navbar />
        <Chat />
        <Stream />
        <Route exact path='/about' component={About} />
      </div>

    </Router>





  );
}

export default App;
