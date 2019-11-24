import React from 'react';
import Fade from 'react-reveal/Fade';
import './TopNav.css';

function Navbar() {
    return (
        <Fade left>
            <header className="toolbar">

                <nav className="main-nav">
                    <a className="logo-txt" href="/">GAMBLR</a>
                    <div className="dropdown">
                        <svg className="drop-icon" width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2188 7.89447H3.28125C3.02237 7.89447 2.8125 7.64201 2.8125 7.33058V6.2028C2.8125 5.89138 3.02237 5.63892 3.28125 5.63892H19.2188C19.4776 5.63892 19.6875 5.89138 19.6875 6.2028V7.33058C19.6875 7.64201 19.4776 7.89447 19.2188 7.89447ZM14.0625 14.0972V12.9695C14.0625 12.658 13.8526 12.4056 13.5938 12.4056H3.28125C3.02237 12.4056 2.8125 12.658 2.8125 12.9695V14.0972C2.8125 14.4087 3.02237 14.6611 3.28125 14.6611H13.5938C13.8526 14.6611 14.0625 14.4087 14.0625 14.0972ZM8.4375 19.7361V20.8639C8.4375 21.1753 8.22763 21.4278 7.96875 21.4278H3.28125C3.02237 21.4278 2.8125 21.1753 2.8125 20.8639V19.7361C2.8125 19.4247 3.02237 19.1723 3.28125 19.1723H7.96875C8.22763 19.1723 8.4375 19.4247 8.4375 19.7361Z" fill="white" />
                        </svg>

                    </div>
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