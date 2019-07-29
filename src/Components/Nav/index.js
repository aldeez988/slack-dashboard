import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import ProfileDropDown from "./profileDropDown";
import { logout, loggedIn, getProfile } from "../../Auth";
import logo_CYF_square from "./logo-CYF-square.png";
import "./index.css";

export default class Navbar extends React.Component {
  onLogOut = () => {
    logout();
    window.location.reload(true);
  };
  render() {
    const avatar = getProfile().avatar;
    console.log("from inside Nav", getProfile().avatar);
    return (
      <div className="navbar-div">
        <nav className="navbar navbar-expand-lg navbar-light container">
          <a className="navbar-brand" href="/">
            <img src={logo_CYF_square} alt="logo" width="80" height="50" />
          </a>
          {/* <Link className="nav-link nav-btn" to="/">
            Home
          </Link> */}
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
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              {!loggedIn() && (
                <li className="nav-item">
                  <Link className="nav-link nav-btn" to="/register">
                    Sign up
                  </Link>
                </li>
              )}
              {!loggedIn() && (
                <li className="nav-item">
                  <Link className="nav-link nav-btn" to="/">
                    Login
                  </Link>
                </li>
              )}
              {loggedIn() && (
                <li className="nav-item ">
                  <span
                    className="nav-link logout-btn"
                    onClick={this.onLogOut}
                    onKeyDown={this.onLogOut}
                    role="button"
                    tabIndex={0}
                  >
                    Log Out
                  </span>
                </li>
              )}
            </ul>
          </div>
          {/* {<ProfileDropDown />} */}
          <img src={avatar} alt="Avatar" class="avatar" />
        </nav>
      </div>
    );
  }
}
