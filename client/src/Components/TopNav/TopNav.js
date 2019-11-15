import React from 'react';
import Fade from 'react-reveal/Fade';
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
                          
                            <li><a href="/">ABOUT US</a></li>
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