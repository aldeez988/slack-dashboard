import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import Button from "./Button";
import Barchart from "./Barchart";
import SetTargetPage from "./SetTargetPage";

class ProgressPage extends Component {
  state = { showSetTarget: false };

  handleSetTargetPage = () => {
    this.setState(prevState => {
      return {
        showSetTarget: !prevState.showSetTarget
      };
    });
  };

  render() {
    if (!this.state.showSetTarget) {
      return (
        <div className="container">
          <div
            // style={{ border: "2px solid green" }}
            className="d-flex flex-wrap align-items-center justify-content-md-between justify-content-center"
          >
            <Button className=" order-md-1" title="Performance " />
            <Button
              className="order-md-3"
              title="Set a target"
              handleSetTargetPage={this.handleSetTargetPage}
            />
            <div className=" order-md-2 d-flex flex-column align-items-center">
              <h1>This Week</h1>
              <ProgressBar />
            </div>
          </div>
          <div class="">
            <Barchart />
          </div>
        </div>
      );
    } else if (this.state.showSetTarget) {
      return <SetTargetPage />;
    }
  }
}

export default ProgressPage;
