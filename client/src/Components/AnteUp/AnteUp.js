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
          <Label id="label" for="wager">
            ANTE UP
          </Label>
          <div id="numbers">
            <p>WALLET: {this.state.wallet}</p>
            <p>PAYOUT: {this.state.payout}</p>
            <p>RED BET: {this.state.redbet}</p>
            <p>BLACK BET: {this.state.blackbet}</p>
          </div>
          <Input name="wager" id="wager" placeholder="Bet Something" />
          <Button
            className="anteButton"
            onClick={this.addAmountRed}
            id="redButton"
            addAmountRed={this.addAmountRed}
          >
            BET RED
          </Button>
          <Button
            className="anteButton"
            onClick={this.addAmountBlack}
            id="blackButton"
            addAmountBlack={this.addAmountBlack}
          >
            BET BLACK
          </Button>
        </Form>
      </div>
    );
  }
}

export default AnteUp;
