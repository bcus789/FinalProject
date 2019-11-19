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

const AnteUp = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="anteUp">
      <Button
        id="anteUpButton"
        color="primary"
        onClick={toggle}
        style={{ marginBottom: "1rem" }}
      >
        ANTE UP
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <Form>
              <div id="quantities">
                <p>WALLET:</p>
                <p>PAYOUT:</p>
                <p>RED BET:</p>
                <p>BLACK BET:</p>
              </div>

              <Input name="wager" id="wager" placeholder="Bet Something" />
              <Button className="anteButton">BET RED</Button>
              <Button className="anteButton">BET BLACK</Button>
            </Form>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default AnteUp;
