import React from "react";
import "./SideNav.css";
function Nav() {
  return (
    <div id="sideNav">
      <div className="nav-line">
        <div className="home-indicator">
          <div className="home-inner">
            <p className="home-txt">HOME</p>
          </div>
        </div>
        <div className="events-indicator">
          <div className="events-inner">
            <p className="events-txt">EVENTS</p>
          </div>
        </div>
        <div className="payments-indicator">
          <div className="payments-inner">
            <p className="payments-txt">PAYMENTS</p>
          </div>
        </div>
        <div className="leaderboard-indicator">
          <div className="leaderboard-inner">
            <p className="leaderboard-txt">LEADERBOARDS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Nav;
