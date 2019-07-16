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
        <div className="d-flex  align-items-center justify-content-center justify-content-lg-around ">
          <Button title="Performance" />
          <div className="d-flex flex-column align-items-center">
            <h1>This Week</h1>
            <ProgressBar />
            <Barchart />
          </div>
          <Button
            title="Set a target"
            handleSetTargetPage={this.handleSetTargetPage}
          />
        </div>
      );
    } else if (this.state.showSetTarget) {
      return <SetTargetPage />;
    }
  }
}

export default ProgressPage;
