import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './EventNav.css'
import Fade from 'react-reveal/Fade';



class EventNav extends Component {

    render() {

        return (
            <div>
                <Fade down>

                    <div className="nav-line">
                        <Link to='/'>
                            <div className="home-indicator">
                                <div className="home-inner">
                                    <p className="home-txt">HOME</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/events'>
                            <div className="events-indicator" >
                                <div className="events-inner">

                                    <p className="events-txt">EVENTS</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/wallet'>
                            <div className="payments-indicator" onClick={this.setRedirect}>
                                <div className="payments-inner">
                                    <p className="payments-txt">PAYMENTS</p>
                                </div>
                            </div>
                        </Link>

                        <div className="leaderboard-indicator">
                            <div className="leaderboard-inner">
                                <p className="leaderboard-txt">LEADERBOARDS</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default EventNav;
