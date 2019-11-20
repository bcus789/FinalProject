import React, { useState } from "react";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  Form,
  Label,
  Input
} from "reactstrap";
import "./Dropdown.css";

export default class Dropdown extends React.Component {
  state = {
    wallet: 0,
    payout: 0,
    redBet: 0,
    blackBet: 0,
    isOpen: false
  };
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
              <Form>
                <div id="quantities">
                  <p>RED BET: {this.state.redBet}</p>
                  <p>BLACK BET: {this.state.blackBet}</p>
                  <p>EXPECTED PAYOUT: {this.state.payout}</p>
                  <p>WALLET: {this.state.wallet}</p>
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

// import React, { useState } from "react";
// import {
//   Collapse,
//   Button,
//   CardBody,
//   Card,
//   Form,
//   Label,
//   Input
// } from "reactstrap";
// import "./Dropdown.css";

// class AnteUp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.addAmountRed = this.addAmountRed.bind(this);
//     this.addAmountBlack = this.addAmountBlack.bind(this);
//     this.state = {
//       wallet: 500,
//       payout: "",
//       redbet: "20",
//       blackbet: ""
//     };
//   }
//   addAmountRed(e) {
//     this.setState(prevState => ({ redbet: 10 }));
//   }

//   addAmountBlack() {
//     this.setState(prevState => ({ blackbet: 20 }));
//   }

//   render() {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggle = () => setIsOpen(!isOpen);
//     return (
//       <div id="anteUp">
//         <Button
//           id="anteUpButton"
//           color="primary"
//           onClick={toggle}
//           style={{ marginBottom: "1rem" }}
//         >
//           ANTE-UP BUTTERCUP
//         </Button>
//         <Collapse isOpen={isOpen}>
//           <Card>
//             <CardBody>
//               <Form>
//                 <div id="quantities">
//                   <p>WALLET:</p>
//                   <p>PAYOUT:</p>
//                   <p>RED BET:</p>
//                   <p>BLACK BET:</p>
//                 </div>

//                 <Input name="wager" id="wager" placeholder="Bet Something" />
//                 <Button className="anteButton">BET RED</Button>
//                 <Button className="anteButton">BET BLACK</Button>
//               </Form>
//             </CardBody>
//           </Card>
//         </Collapse>
//       </div>
//     );
//   }
// }

// export default AnteUp;