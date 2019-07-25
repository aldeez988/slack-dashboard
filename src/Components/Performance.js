import React, { Component } from "react";
import ClassData from "../Data/ClassData.json";
import Barchart from "./Barchart";
import swal from "sweetalert";
import { getTargetsForClass } from "../Components/actions/targets";
import {
  getAllStudent,
  getAllStudents
} from "../Components/actions/getAllStudents";
import { allCallsAndMessages } from "../Components/actions/getStudentMessages";

class PerformancePage extends Component {
  state = {
    className: "",
    selectedClass: {},
    studentsName: "",
    studentsSlackId: [],
    cyfClasses: this.props.location.state ? this.props.location.state : [],
    targets: [],
    targetName: ""
  };

  onChange = e => {
    const { name, value } = e.target;
    console.log();
    this.setState(
      () => {
        return {
          [name]: value,

          selectedClass:
            name === "className"
              ? this.state.cyfClasses.find(
                  classData => classData.className === value
                )
              : {}
        };
      },
      async () => {
        // const id = this.state.cyfClasses.find(
        //   classData => classData.className === value
        // ).id;
        if (name === "className") {
          try {
            console.log("hi from performance page 2");

            const targetResponse = await getTargetsForClass({
              id: this.state.selectedClass._id
            });
            const getStudentsResponse = await getAllStudents({
              id: this.state.selectedClass._id
            });
            const slackIds = getStudentsResponse.data.map(
              student => student.slackId
            );
            console.log("all salck id's", slackIds);
            this.setState({
              targets: targetResponse.data,
              students: getStudentsResponse.data,
              studentsSlackId: slackIds
            });
          } catch (err) {
            swal("Oops!", "Something went wrong!", "error");
          }
        }
        if (name === "targetName") {
          try {
            const studentsSlackId = this.state.studentsSlackId;
            const selectedTarget = this.state.targets.find(
              target => target.targetName === value
            );
            let startingDate =
              new Date(selectedTarget.startingDate).getTime() / 1000;
            let finishingDate =
              new Date(selectedTarget.finishingDate).getTime() / 1000;
            const response = await allCallsAndMessages({
              startingDate,
              finishingDate,
              studentsSlackId
            });
          } catch (err) {
            swal("Oops!", "Something went wrong!", "error");
          }
        }
      }
    );
  };
  render() {
    console.log("hi from performance page 1 ", this.state);
    const { className, targetName } = this.state;
    console.log("data", ClassData);
    return (
      <div className="performance-container">
        <br />
        <h1 calssNames="" style={{}}>
          Check Performance{" "}
        </h1>
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
                {this.state.cyfClasses.map(data => (
                  <option>{data.className}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-sm-10  col-lg-4 mb-2">
            <div className="form-group">
              <label htmlFor="students" className="lead">
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

        <div className="barchart-performance-container  flex-lg-row flex-sm-column">
          <div className="performance-container-numberOf mt-5 col-md-6">
            <h1 className=" mb-2 ">Number Of</h1>
            <h5 className=" mt-5"> Weekly Threads</h5>

            <h5 className="mt-5 ">Weekly Calls</h5>
          </div>
          <div className=" mt-5 col-md-6">
            <h1 className="ml-5  mb-2 text-center">Over View</h1>

            <Barchart />
          </div>
        </div>
      </div>
    );
  }
}

export default PerformancePage;
