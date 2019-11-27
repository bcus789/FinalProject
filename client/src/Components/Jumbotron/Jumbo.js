import React from "react";
import { Jumbotron, Button } from "reactstrap";
import "./Jumbo.css";

const Jumbo = props => {
  return (
    <div id="jumbo">
      <Jumbotron>
        <h1 className="display-3">About Gamblr</h1>
        <p className="lead"></p>
        <hr className="my-2" />
        <p>
          Gamblr was created by a handfull of devs looking for a place to call
          work
        </p>
        <ul>
          <li>
            <a href="https://github.com/akaryrye">Ryan Aldrin</a> -
            Back-end/Database/Project Lead
          </li>
          <li>
            <a href="https://github.com/bryanpdl">Bryan Ponce De Leon</a> -
            Graphic Designer/UI UX
          </li>
          <li>
            <a href="https://github.com/bcus789">Eugenio Bonello</a> -
            Front-end/UI UX
          </li>
          <li>
            <a href="https://github.com/victore94">Victor Lopez</a> -
            Back-end/Routing/Stream
          </li>
          <li>
            <a href="https://github.com/TonethT">Toneth Tembrevilla</a> -
            Back-end/Database
          </li>
        </ul>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
