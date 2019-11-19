import React from "react";
import "./AnteUp.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
const axios = require("axios");

class AnteUp extends React.Component {
  constructor(props) {
    super(props);
    this.addAmountRed = this.addAmountRed.bind(this);
    this.addAmountBlack = this.addAmountBlack.bind(this);
    this.state = {
      wallet: 500,
      payout: "",
      redbet: "20",
      blackbet: ""
    };
  }
  addAmountRed(e) {
    this.setState(prevState => ({ redbet: 10 }));
  }

  addAmountBlack() {
    this.setState(prevState => ({ blackbet: 20 }));
  }
  render() {
    return (
      <div id="anteUp">
        <Form>
          <Label for="wager">Ante Up</Label>
          <p>Wallet: {this.state.wallet}</p>
          <p>Expected Payout: {this.state.payout}</p>
          <Input name="wager" id="wager" placeholder="Bet Something" />
          <Button
            className="anteButton"
            onClick={this.addAmountRed}
            id="redButton"
            addAmountRed={this.addAmountRed}
          >
            Bet Red
          </Button>
          <Button
            className="anteButton"
            onClick={this.addAmountBlack}
            id="blackButton"
            addAmountBlack={this.addAmountBlack}
          >
            Bet Black
          </Button>
          <p>Red Bet: {this.state.redbet}</p>
          <p>Black Bet: {this.state.blackbet}</p>
        </Form>
      </div>
    );
  }
}

export default AnteUp;
