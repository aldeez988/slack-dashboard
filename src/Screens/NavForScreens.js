import React, { Component } from "react";
import logo_CYF_square from "../Components/Nav/logo-CYF-square.png";
import "./login.css";

class NavForScreens extends Component {
  render() {
    return (
      <div className="navbar-div">
        <nav className="navbar navbar-expand-lg navbar-light container">
          <a className="navbar-brand" href="/">
            <img src={logo_CYF_square} alt="logo" width="80" height="50" />
          </a>
          <span className="sr-only">(current)</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText" />
        </nav>
      </div>
    );
  }
}

export default NavForScreens;
