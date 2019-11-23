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
    wallet: 0,
    payout: 0,
    redBet: 0,
    blackBet: 0,
    isOpen: false,
    username: null,
    loggedIn: false
  };

  componentDidMount() {
    
    if(this.props.username) {
      this.setState({
        wallet: this.props.wallet
      })
    }
  }

  addAmountRed = () => {
    this.setState(prevState => ({ redBet: 10 }));
  };

  addAmountBlack = () => {
    this.setState(prevState => ({ blackBet: 20 }));
  };

  handleToggle = () => {
    this.setState(() => ({ isOpen: !this.state.isOpen }));
  };

  render() {
    return (
      <div id="anteUp">
        <Button
          id="anteUpButton"
          color="primary"
          style={{ marginBottom: "1rem" }}
          onClick={this.handleToggle}
        >
          ANTE-UP BUTTERCUP
        </Button>
        <Collapse isOpen={this.state.isOpen}>
          <Card>
            <CardBody>
              <h1>{this.props.username}</h1>
              <Form>
                <div id="quantities">
                  <p>RED BET: {this.state.redBet}</p>
                  <p>BLACK BET: {this.state.blackBet}</p>
                  <p>EXPECTED PAYOUT: {this.state.payout}</p>
                  <p>WALLET: {this.props.wallet}</p>
                </div>
                <div id="betInput">
                  <Input name="wager" id="wager" placeholder="Bet Something" />
                  <Button onClick={this.addAmountRed} className="anteButton">
                    BET RED
                  </Button>
                  <Button onClick={this.addAmountBlack} className="anteButton">
                    BET BLACK
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}
