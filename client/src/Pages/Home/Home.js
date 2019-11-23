import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import SideNav from "../../Components/SideNav/SideNav.js"
import Navbar from "../../Components/TopNav/TopNav.js";
import LogModal from "../../Components/Modal/Modal.js";
import '../../Components/Modal/Modal.css';



function Home() {
    return (
        <div>
            <LogModal />
            <SideNav />
            <Carousel />
            <Navbar />
        </div>
    );
}

export default Home;
