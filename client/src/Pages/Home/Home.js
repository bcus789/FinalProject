import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import SideNav from "../../Components/SideNav/SideNav.js"
import Navbar from "../../Components/TopNav/TopNav.js";

function Home() {
    return (
        <div>
            <SideNav />
            <Carousel />
            <Navbar />
        </div>
    );
}

export default Home;
