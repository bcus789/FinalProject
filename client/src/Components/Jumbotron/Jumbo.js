import React from "react";
import { Jumbotron, Button } from "reactstrap";

const Jumbo = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Gamblr</h1>
        <p className="lead"></p>
        <hr className="my-2" />
        <p></p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
