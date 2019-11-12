import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./TopNav.css";

const TopNav = props => {
  return (
    <div>
      <Nav>
        <NavLink href="#" id="Home">
          Logo
        </NavLink>{" "}
        <NavLink href="#" id="aboutUs">
          About Us
        </NavLink>{" "}
        <NavLink href="#" id="wallet">
          Wallet
        </NavLink>{" "}
        <NavLink href="#" id="shop">
          Shop
        </NavLink>{" "}
        <div id="authentication">
          <NavLink href="#" id="login">
            Login
          </NavLink>
          <button
            type="button"
            className="btn btn-primary"
            href="#"
            id="signUp"
          >
            Sign Up
          </button>
        </div>
      </Nav>
    </div>
  );
};

export default TopNav;
