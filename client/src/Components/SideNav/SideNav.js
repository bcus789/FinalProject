import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './SideNav.css'
import Fade from 'react-reveal/Fade';



class SideNav extends Component {

    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderHome = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }
    renderEvents = () => {
        if (this.state.redirect) {
            return <Redirect to='/events' />
        }
    }

    render() {
        return (

            <div>
                <Fade down>
                    <div className="nav-line">
                        <div className="home-indicator"
                            onClick={this.setRedirect}>
                            {this.renderHome()}
                            <div className="home-inner">
                                <p className="home-txt">HOME</p>
                            </div>
                        </div>

                        <div className="events-indicator"
                            onClick={this.setRedirect}>
                            {this.renderEvents()}
                            <div className="events-inner">
                                <p className="events-txt">EVENTS</p>
                            </div>
                        </div>
                        <div className="payments-indicator"><div className="payments-inner"><p className="payments-txt">PAYMENTS</p></div></div>
                        <div className="leaderboard-indicator"><div className="leaderboard-inner"><p className="leaderboard-txt">LEADERBOARDS</p></div></div>
                    </div>

                </Fade>

            </div>
        );
    }
}

export default SideNav;
