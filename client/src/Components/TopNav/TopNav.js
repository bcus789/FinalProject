import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'

import './TopNav.css';

function Navbar() {
    return (
        <Fade left>
            <header className="toolbar">

                <nav className="main-nav">
                    <a className="logo-txt" href="/">GAMBLR</a>
                    <div className="nav-items">
                        <Fade right>

                            <ul>

                                <Link to='/about' >About</Link>

                                <li><a href="/">WALLET</a></li>
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