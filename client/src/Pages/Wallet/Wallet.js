import React from "react";
import SideNav from "../../Components/SideNav/SideNav.js"
import Navbar from "../../Components/TopNav/TopNav.js";
import './Wallet.css';

function Wallet() {
    return (
        <div>
            <SideNav />
            <Navbar />
            <h1> WALLET </h1>
        </div>
    );
}

export default Wallet;
