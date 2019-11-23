import React from 'react';
import './Sidedrawer.css';

const SideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/">EVENTS</a></li>
            <li><a href="/">PAYMENTS</a></li>
            <li><a href="/">LEADERBOARDS</a></li>
        </ul>
    </nav>
)

export default SideDrawer;