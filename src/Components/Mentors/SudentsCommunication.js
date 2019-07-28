import React, { Component } from "react";
import { Graph } from "react-d3-graph";
import { getTargetsForClass } from "../actions/targets";
import { getStudentsCommunication } from "../actions/getStudentsCommunication";
import { getAllStudents } from "../actions/getAllStudents";
class SudentsCommunication extends Component {
  state = {
    targetName: "",
    cyfClasses: [],
    className: "",
    targets: [],
    selectTarget: {},
    selectedClassId: "",
    studentsProfile: []
  };
  componentWillMount() {
    this.setState({ cyfClasses: this.props.cyfClasses });
  }

  onChange = e => {
    const { name, value } = e.target;
    console.log();
    this.setState(
      () => {
        return {
          [name]: value
        };
      },
      async () => {
        console.log(this.state.userType);
        if (name === "className") {
          try {
            const selectedClassId = this.state.cyfClasses.find(
              cyfClass => cyfClass.className === value
            )._id;

            const targetResponse = await getTargetsForClass({
              id: selectedClassId
            });
            this.setState({ targets: targetResponse.data });
            const getStudentsResponse = await getAllStudents({
              id: selectedClassId
            });
            this.setState({ studentsProfile: getStudentsResponse.data });
          } catch (err) {
            console.log(err);
          }
        }
        if (name === "targetName") {
          try {
            const selectedTarget = this.state.targets.find(
              target => target.targetName === value
            );
            let startingDate =
              new Date(selectedTarget.startingDate).getTime() / 1000;
            let finishingDate =
              new Date(selectedTarget.finishingDate).getTime() / 1000;
            const studentsProfile = this.state.studentsProfile;
            this.setState({ selectedTargetData: selectedTarget });
            getStudentsCommunication({
              startingDate,
              finishingDate,
              studentsProfile
            }).then(response => {
              console.log("n******* and Calls", response);
            });
          } catch (err) {
            console.log(err);
          }
        }
      }
    );
  };
  render() {
    const { className, targetName, cyfClasses } = this.state;
    return (
      <div>
        <div className="dropdown-container">
          <div className="col-sm-10 col-lg-4 mb-2">
            <div className="form-group ">
              <label htmlFor="className" className="lead">
                Select Class{" "}
              </label>
              <select
                className="form-control form-control-lg"
                name="className"
                id="className"
                value={className}
                onChange={this.onChange}
                required
              >
                <option value="" disabled>
                  Select here
                </option>
                {cyfClasses.map(data => (
                  <option>{data.className}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-sm-10  col-lg-4 mb-2">
            <div className="form-group">
              <label htmlFor="targetName" className="lead">
                Select Target{" "}
              </label>

              <select
                className="form-control form-control-lg"
                name="targetName"
                id="targetName"
                value={targetName}
                onChange={this.onChange}
                required
              >
                <option value="" disabled>
                  Select here
                </option>
                {this.state.targets.map(target => (
                  <option>{target.targetName}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SudentsCommunication;
