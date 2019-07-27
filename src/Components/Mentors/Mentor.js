import React, { Component } from "react";
import SetTargetPage from "../SetTargetPage";
import PerformancePage from "../Performance";
import { getAllClasses } from "../actions/addClass";
import swal from "sweetalert";

class Mentor extends Component {
  state = {
    active: "active",
    showPerformance: true,
    showSetTarget: false,
    // adminData: this.props.location.state,
    // usersProfiles: {}
    cyfClasses: []
  };
  async componentWillMount() {
    const cyfClasses = await getAllClasses();
    this.setState({ cyfClasses: cyfClasses.data });
  }
  toggleClass = () => {
    this.setState(prevState => {
      return { active: prevState.active ? "" : "active" };
    });
  };
  handleShowSetTarget = () => {
    this.setState({ showSetTarget: true, showPerformance: false });
  };

  handleShowPerformance = async () => {
    this.setState({ showSetTarget: false, showPerformance: true });
    try {
    } catch (err) {
      swal("Oops!", "Something went wrong!", "error");
    }
  };

  render() {
    const { cyfClasses, showSetTarget, showPerformance } = this.state;
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
        </ul>
        <br />
        <br />
        {console.log("the deatial from the admin page", this.props.location)}
        {showPerformance && <PerformancePage cyfClasses={cyfClasses} />}
        {showSetTarget && <SetTargetPage cyfClasses={cyfClasses} />}
      </div>
    );
  }
}

export default Mentor;
