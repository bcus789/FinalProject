import React from "react";
import "./ageVar.css";

export default class AgeVar extends React.Component {
  state = {
    isOpen: true
  };

  is21 = e => {
    console.log(e);
  };

  clubPenguin = e => {
    console.log("hi");
  };

  render() {
    return (
      <div id="ageVar">
        <div className="body">
          <div>
            <p id="age">You must be 21 or over to view this page</p>
            <button
              onClick={this.clubPenguin}
              type="button"
              className="no"
              id="no"
            >
              Leave
            </button>
            <button
              onClick={this.is21}
              type="button"
              className="yes"
              id="yes"
              data-dismiss="modal"
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    );
  }
}
