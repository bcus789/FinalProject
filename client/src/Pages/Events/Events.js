import React from "react";
import SideNav from "../../Components/SideNav/SideNav.js";
import Navbar from "../../Components/TopNav/TopNav.js";
import Stream from "../../Components/Stream/Stream";

import AnteUp from "../../Components/AnteUp/Dropdown";
import "./Events.css";

function Events() {
  return (
    <div>
      <Navbar />

      <SideNav />
      <Stream />
      <AnteUp />
    </div>
  );
}

export default Events;
