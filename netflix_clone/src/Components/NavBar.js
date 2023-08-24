import React from "react";
import logo from "../Assets/logo.png";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar">
        <img className="logo" src={logo} alt="Netflix Logo" />
    </div>
  )
}

export default NavBar;
