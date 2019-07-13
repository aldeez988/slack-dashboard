import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import logo from "../logo-cyf.png";
import Button from "./Button";
import Barchart from "./Barchart";

class ProgressPage extends Component {
  render() {
    return (
      <div className="d-flex  align-items-center justify-content-center justify-content-lg-around ">
        <Button title="Performance" />
        <div className="d-flex flex-column align-items-center">
          <img src={logo} style={{ width: 300, marginBottom: 10 }} />
          <h1>Today</h1>
          <ProgressBar />
          <Barchart />
        </div>
        <Button title="Set a target" />
      </div>
    );
  }
}

export default ProgressPage;
