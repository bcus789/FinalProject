import React, { Component } from "react";
import axios from 'axios';
import {
  Collapse,
  Button,
  CardBody,
  Card,
  Form,
  //Label,
  Input
} from "reactstrap";
import "./Dropdown.css";

export default class Dropdown extends Component {
  
  state = {
    wallet: this.props.wallet,
    event: 'Nerd Warz 2019!',
    betFor: null,
    payout: 0,
    wager: 0,
    isOpen: false,
    bets: []
  };

  componentWillReceiveProps(nextProps) {
    // Update state with user info on login, update state.
    if (nextProps.loggedIn !== this.props.loggedIn) {
      this.setState({
        wallet: nextProps.wallet
      });
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value });
  };

  selectTeam = e => {
    this.setState({ betFor: e.target.value })
  }

  handleToggle = () => {
    this.setState(() => ({ isOpen: !this.state.isOpen }));
  };

  submitBet = () => {
    // require user logged in
    if (this.props.userId) {
      // prevent bets less than 0 or greater than wallet
      if (this.state.wager > 0 && this.state.wager <= this.state.wallet) {
        const bet = {
          userId: this.props.userId,
          amount: this.state.wager,
          event: this.state.event,
          betFor: this.state.betFor
        }
        axios.post('/api/bet/submit', bet)
          .then( response => {
            console.log(response);
            alert('Bet successfully posted')
            this.getUserBets(bet.userId);
            this.updateNewWallet(bet.userId, bet.amount)
          })
      } else return alert('Amount must be within range of available funds')
    } else return alert('You must be logged in to place a bet')
  }

  getUserBets = userId => {
    axios.get(`/api/bet/${userId}`)
      .then( response => {
        console.log(response)
        this.setState({bets: response.data})
      })
  }

  updateNewWallet = (userId, amount) => {
    axios.get(`/api/user/update/${userId}/${amount}`)
      .then(response => {
        console.log(response)
        this.props.updateWallet(response.data);
      });
  }

  render() {
    return (
      <div id="anteUp">
        <Button id="anteUpButton"
                color="primary"
                style={{ marginBottom: "1rem" }}
                onClick={this.handleToggle} >
          ANTE-UP BUTTERCUP
        </Button>
        <Collapse isOpen={this.state.isOpen}>
          <Card>
            <CardBody>
              {this.props.loggedIn ? (
              <section>
                <h3>EVENT: {this.state.event}</h3>
                <h5>USER: {this.props.username}</h5>
                <div id="quantities">
                  <p>TEAM SELECTED: {this.state.betFor}</p>
                  <p>WAGER: {this.state.wager}</p>
                  <p>WALLET: {this.props.wallet}</p>
                </div>
                <Form>
                  <div id="betInput">
                    <Input  name="wager"
                            id="wager"
                            type="number"
                            min={1}
                            max={this.props.wallet}
                            placeholder="Bet Something"
                            onChange={this.handleChange} />
                    <Button onClick={this.selectTeam}
                            value='red'
                            className="anteButton" >
                      BET RED
                    </Button>
                    <Button onClick={this.selectTeam}
                            value='black'
                            className="anteButton" >
                      BET BLACK
                    </Button>
                    <Button onClick={this.submitBet}
                            className="anteButton" >
                      SUBMIT 
                    </Button>
                  </div>
                </Form>
                <ul>
                  {this.state.bets.map(bet => (
                    <li>EVENT: {bet.event}, BETTING FOR: {bet.betFor} AMOUNT: {bet.amount}</li>
                  ))}
                </ul>
              </section>
              ) : (
                <h3>Please Sign in to Begin</h3>
              )}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}
