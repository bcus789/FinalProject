import React from "react";
import "./ageVar.css";
// const modal = getElementById("myModal");
// const exit = getElementsByClassName("close")[0];

// window.onload = function() {
//   modal.style.display = "block";

//   var is21 = localStorage.getItem("is21");

//   is21 === "true"
//     ? (modal.style.display = "none")
//     : (modal.style.display = "block");

//   exit.onclick = () => {
//     location.href = "https://www.disney.com";
//   };
//   document.getElementById("no").onclick = function() {
//     localStorage.setItem("is21", "false");
//     location.href = "https://cponline.pw/";
//   };
//   document.getElementById("yes").onclick = function() {
//     localStorage.setItem("is21", "true");
//     modal.style.display = "none";
//   };
// };

class AgeVar extends React.Component {
  render() {
    return (
      <div>
        <h2>Age Var Here</h2>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p id="age">You must be 21 or over to view this page</p>
            <button type="button" className="no" id="no">
              Leave
            </button>
            <button type="button" className="yes" id="yes" data-dismiss="modal">
              Enter
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AgeVar;
