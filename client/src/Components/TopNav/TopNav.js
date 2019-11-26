import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'

import './TopNav.css';

function Navbar() {
    return (
        <Fade left>
            <header className="toolbar">

                <nav className="main-nav">
                    <a href="/" className="logo-txt" ><Link to="/">GAMBLR</Link></a>
                    <div className="nav-items">
                        <Fade right>
                            <ul>

                               <li><Link to='/about' >ABOUT</Link></li> 
                                <br />
                                <li><Link to='/wallet' >WALLET</Link></li>

                                <li><a href="/">SHOP</a></li>


                            </ul>
                        </Fade>
                    </div>
                </nav>
            </header>
        </Fade>
    );
}

export default Navbar;