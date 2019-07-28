import React, { Component } from "react";
import SetTargetPage from "../SetTargetPage";
import PerformancePage from "../Performance";
import SudentsCommunication from "./SudentsCommunication";
import { getAllClasses } from "../actions/addClass";
import swal from "sweetalert";

class Mentor extends Component {
  state = {
    active: "active",
    showPerformance: true,
    showSetTarget: false,
    showStudentsCommunication: false,
    // adminData: this.props.location.state,
    // usersProfiles: {}
    cyfClasses: []
  };
  async componentWillMount() {
    getAllClasses()
      .then(res => {
        this.setState({ cyfClasses: res.data });
      })
      .catch(err => {
        console.log(err);
        swal("Oops!", "Something went wrong!", "error");
      });
  }
  toggleClass = () => {
    this.setState(prevState => {
      return { active: prevState.active ? "" : "active" };
    });
  };
  handleShowSetTarget = () => {
    this.setState({
      showSetTarget: true,
      showPerformance: false,
      showStudentsCommunication: false
    });
  };

  handleShowPerformance = async () => {
    this.setState({ showSetTarget: false, showPerformance: true });
  };

  handleShowStudentsCommunication = () => {
    this.setState({
      showStudentsCommunication: true,
      showSetTarget: false,
      showPerformance: false
    });
  };

  render() {
    const {
      cyfClasses,
      showSetTarget,
      showPerformance,
      showStudentsCommunication
    } = this.state;
    return (
      <div className="mentor-tab-container">
        <ul className="nav nav-tabs">
          <li class="nav-item" onClick={this.handleShowPerformance}>
            <a
              class={`nav-link ${showPerformance ? this.state.active : ""}`}
              href="#"
            >
              Check Performance
            </a>
          </li>

          <li class="nav-item" onClick={this.handleShowSetTarget}>
            <a
              class={`nav-link ${showSetTarget ? this.state.active : ""}`}
              href="#"
            >
              Set Target{" "}
            </a>
          </li>
          <li class="nav-item" onClick={this.handleShowStudentsCommunication}>
            <a
              class={`nav-link ${
                showStudentsCommunication ? this.state.active : ""
              }`}
              href="#"
            >
              Students Communication{" "}
            </a>
          </li>
        </ul>
        <br />
        <br />
        {console.log("the deatial from the admin page", this.props.location)}
        {showPerformance && (
          <PerformancePage cyfClasses={this.state.cyfClasses} />
        )}
        {showSetTarget && <SetTargetPage cyfClasses={cyfClasses} />}
        {/* {showStudentsCommunication && (
          <SudentsCommunication cyfClasses={cyfClasses ? cyfClasses : []} />
        )} */}
      </div>
    );
  }
}

export default Mentor;
