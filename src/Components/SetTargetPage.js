import React, { Component } from "react";
import logo from "../logo-cyf.png";
import DropDownButton from "./DropDownButton";

class SetTargetPage extends Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <img src={logo} style={{ width: 300, marginBottom: 10 }} />
        <h1>Set a Target For </h1>
        <div class="container">
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <DropDownButton />
              </div>
              <div class="col-sm">
                <DropDownButton />
              </div>
              <div class="col-sm">
                <DropDownButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SetTargetPage;
