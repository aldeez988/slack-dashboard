import React, { Component } from "react";
import SetTargetPage from "./SetTargetPage";
import PerformancePage from "./Performance";
import StudentsCommunication from "./StudentsCommunication";
import { getAllClasses } from "../actions/addClass";
import "./Mentor.css";
import swal from "sweetalert";

class Mentor extends Component {
  state = {
    active: "active",
    showPerformance: true,
    showSetTarget: false,
    showStudentsCommunication: false,
    cyfClasses: []
  };

  componentWillMount() {
    getAllClasses()
      .then(res => {
        this.setState({ cyfClasses: res.data });
      })
      .catch(err => {
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
    this.setState({
      showSetTarget: false,
      showPerformance: true,
      showStudentsCommunication: false
    });
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
        {showPerformance && (
          <PerformancePage cyfClasses={this.state.cyfClasses} />
        )}
        {showSetTarget && <SetTargetPage cyfClasses={cyfClasses} />}
        {showStudentsCommunication && (
          <StudentsCommunication cyfClasses={cyfClasses ? cyfClasses : []} />
        )}
      </div>
    );
  }
}

export default Mentor;
