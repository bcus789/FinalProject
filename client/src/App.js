import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

import LogModal from "./Components/Modal/Modal.js";
import "./App.css";
import AnteUp from "./Components/AnteUp/Dropdown";
import SideNav from "./Components/SideNav/SideNav.js";
import Navbar from "./Components/TopNav/TopNav.js";
import Stream from "./Components/Stream.js";

function App() {
  return (
    <Router>
    <div>
      <SideNav />
      <LogModal />

      <Stream />
      <AnteUp />
      <Navbar />
    </div>
    </Router>
  );
}

export default App;
