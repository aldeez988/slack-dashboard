import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import Button from "./Button";
import Barchart from "./Barchart";
import SetTargetPage from "./SetTargetPage";
import PerformancePage from "../Components/Performance";
import { getAllClasses } from "../Components/actions/addClass";
class ProgressPage extends Component {
  state = { showSetTarget: false, cyfClasses: [] };

  async componentWillMount() {
    const cyfClasses = await getAllClasses();
    this.setState({ cyfClasses: cyfClasses.data });
  }
  handleSetTargetPage = () => {
    this.setState(prevState => {
      return {
        showSetTarget: !prevState.showSetTarget
      };
    });
    this.props.history.push("/stetarget", [...this.state.cyfClasses]);
  };

  handlePerformancePage = () => {
    this.setState(prevState => {
      return {
        showSetTarget: !prevState.showSetTarget
      };
    });
    this.props.history.push("/performancepage", [...this.state.cyfClasses]);
  };

  render() {
    if (!this.state.showSetTarget) {
      return (
        <div className=" container">
          <div className="header-container">
            <h1>This Week Performance</h1>
          </div>
          <div
            // style={{ border: "2px solid green" }}
            className="d-flex flex-column align-items-center justify-content-md-between justify-content-around"
          >
            <div
              style={{
                // border: "2px solid green",
                width: "80%"
              }}
              className="set-target-performance-container"
            >
              <Button
                className=" order-md-1"
                title="Performance "
                handleSetTargetPage={this.handlePerformancePage}
              />

              <Button
                className="order-md-3"
                title="Set a target"
                handleSetTargetPage={this.handleSetTargetPage}
              />
            </div>

            <br />
            <ProgressBar />
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
