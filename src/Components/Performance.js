import React, { Component } from "react";
import swal from "sweetalert";
import Table from "./Mentors/Table";
import ProgressBar from "../Components/ProgressBar";
import { getTargetsForClass } from "../Components/actions/targets";
import { getStudentsSlackIds } from "../Components/helpers/getSudentsSlackIds";
import { getAllStudents } from "../Components/actions/getAllStudents";
import { allCallsAndMessages } from "../Components/actions/getStudentMessages";
import { getAllNumberOfMessagesAndCalls } from "../Components/helpers/getNumberOfCallAndMessages";
import { mergingStudentsDataForTable } from "../Components/helpers/mergingStudentDataForTable";
import { getAveragePerformancePercentage } from "../Components/helpers/averagePerformancePercentage";
import { getProfile } from "../Auth/index";

class PerformancePage extends Component {
  state = {
    className: "",
    selectedClass: {},
    studentsProfiles: [],
    studentsSlackId: [],
    cyfClasses: this.props.cyfClasses,
    targets: [],
    targetName: "",
    tableData: [],
    selectedTargetData: "",
    averagePerformancePercentage: 0
  };
  componentWillReceiveProps(nextProps) {
    this.setState({ cyfClasses: nextProps.cyfClasses });
  }

  onChange = e => {
    const { name, value } = e.target;
    console.log("the selected target data", this.state.selectedTargetData);
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
        if (name === "className") {
          try {
            const targetResponse = await getTargetsForClass({
              id: this.state.selectedClass._id
            });
            const getStudentsResponse = await getAllStudents({
              id: this.state.selectedClass._id
            });
            const studentsSlackIds = getStudentsSlackIds(
              getStudentsResponse.data,
              this.state.selectedClass._id
            );

            //Getting id only for students in the selected class to only get their messages

            const slackIds = getStudentsResponse.data
              .filter(
                student =>
                  student.classId ===
                  this.state.cyfClasses.find(
                    classData => classData.className === value
                  )._id
              )
              .map(student => student.slackId);
            this.setState({
              targets: targetResponse.data,
              studentsProfiles: getStudentsResponse.data,
              studentsSlackId: studentsSlackIds
            });
          } catch (err) {
            swal("Oops!", "Something went wrong!", "error");
          }
        }
        if (name === "targetName") {
          const studentsSlackId = this.state.studentsSlackId;
          const selectedTarget = this.state.targets.find(
            target => target.targetName === value
          );
          let startingDate =
            new Date(selectedTarget.startingDate).getTime() / 1000;
          let finishingDate =
            new Date(selectedTarget.finishingDate).getTime() / 1000;
          this.setState({ selectedTargetData: selectedTarget });
          allCallsAndMessages({
            startingDate,
            finishingDate,
            channelId: selectedTarget.channelId
          })
            .then(response => {
              const finalNumberOFMessagesAndCalls = getAllNumberOfMessagesAndCalls(
                studentsSlackId,
                response.data.messages
              );
              const totalTarget =
                this.state.selectedTargetData.targetThreads +
                this.state.selectedTargetData.targetCalls;

              this.setState({
                averagePerformancePercentage: getAveragePerformancePercentage(
                  finalNumberOFMessagesAndCalls,
                  totalTarget,
                  this.state.studentsProfiles.length
                )
              });
              this.setState({
                tableData: mergingStudentsDataForTable(
                  finalNumberOFMessagesAndCalls,
                  this.state.studentsProfiles
                )
              });
            })
            .catch(err => {
              swal("Oops!", "Something went wrong!", "error");
            });
        }
      }
    );
  };
  render() {
    const {
      className,
      targetName,
      selectedTargetData,
      tableData,
      averagePerformancePercentage
    } = this.state;
    return (
      <div className="performance-container container">
        <div className="header-container d-flex justify-content-center">
          <h1 className="header-font">Class Performance</h1>
        </div>
        <br />
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

        <div className="label progress-target-container">
          <div
            className="performance-container-numberOf"
            style={{ textAlign: "center" }}
          >
            <h2 className="performance-font mt-5"> Target Threads</h2>
            <h1>{selectedTargetData.targetThreads}</h1>
            <h2 className="performance-font mt-5">Target Calls</h2>
            <h1> {selectedTargetData.targetCalls}</h1>
          </div>
          <hr className="hr" />
          <ProgressBar
            title="Class Average Performance"
            performancePercentage={
              averagePerformancePercentage
                ? averagePerformancePercentage
                : averagePerformancePercentage
            }
          />
        </div>

        <Table
          callsTarget={selectedTargetData.targetCalls}
          messagesTarget={selectedTargetData.targetThreads}
          className=""
          data={tableData}
          target={selectedTargetData ? selectedTargetData : {}}
        />
      </div>
    );
  }
}

export default PerformancePage;
