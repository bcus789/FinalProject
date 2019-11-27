import React from "react";
import SideNav from "../../Components/SideNav/SideNav.js";
import Navbar from "../../Components/TopNav/TopNav.js";
import Jumbo from "../../Components/Jumbotron/Jumbo.js";
import "../../Components/Jumbotron/Jumbo.css";
import "../../App.css";

function About() {
  return (
    <div>
      <SideNav />
      <Navbar />
      <Jumbo />
    </div>
  );
}

export default About;
