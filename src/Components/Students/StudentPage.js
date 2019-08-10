import React, { Component } from "react";
import ProgressBar from "../ProgressBar";
import StudentLabel from "./StudentLabel";
import TopStudents from "./TopStudents";
import swal from "sweetalert";
import { getTargets } from "../actions/targets";
import { performancePercentage } from "../helpers/performancePercentage";
import { getProfile } from "../../Auth";

import {
  studentsRank,
  getAllNumberOfMessagesAndCalls,
  getCurrentUserNumberOfCallsAndMessages
} from "../helpers/getNumberOfCallAndMessages";
import { allCallsAndMessages } from "../actions/getStudentMessages";
import { getAllStudents } from "../actions/getAllStudents";
import { mergingStudentsDataWithTotalPerformance } from "../helpers/mergingStudentDataForTable";
class StudentPage extends Component {
  state = {
    targetName: "",
    userData: {},
    targetNames: [],
    selectedTargetData: {},
    numberOfMessages: "",
    numberOfCalls: "",
    rankedStudentsCallsAndMessages: [],
    currentUserCallsAndMessageNumber: [],
    mergedStudentsResultForTable: []
  };

  componentWillMount() {
    getTargets({ className: getProfile().className })
      .then(res => {
        this.setState({ targetNames: res.data });
        console.log("after converting a time stamp to date", getProfile());
      })
      .catch(err => {
        swal("Oops!", "Something went wrong!", "error");
      });
  }

  onChange = e => {
    const { value } = e.target;
    this.setState(
      () => {
        return {
          targetName: value,
          selectedTargetData: this.state.targetNames.find(
            target => target.targetName === value
          )
        };
      },
      //callback inside setState
      async () => {
        let startingDate =
          new Date(this.state.selectedTargetData.startingDate).getTime() / 1000;
        let finishingDate =
          new Date(this.state.selectedTargetData.finishingDate).getTime() /
          1000;

        try {
          const targetCalls = this.state.selectedTargetData.targetCalls;
          const targetThreads = this.state.selectedTargetData.targetThreads;
          const classId = getProfile().classId;
          const channelId = this.state.selectedTargetData.channelId;
          const allStudentProfiles = await getAllStudents({ id: classId });
          const messagesAndCalls = await allCallsAndMessages({
            channelId,
            startingDate,
            finishingDate
          });

          const slackIds = allStudentProfiles.data
            .filter(student => student.classId === classId)
            .map(student => student.slackId);
          const allNumberOfMessagesAndCalls = getAllNumberOfMessagesAndCalls(
            slackIds,
            messagesAndCalls.data.messages
          );

          this.setState({
            currentUserCallsAndMessageNumber: allNumberOfMessagesAndCalls
          });
          this.setState(
            () => {
              return {
                rankedStudentsCallsAndMessages: studentsRank(
                  allNumberOfMessagesAndCalls
                )
              };
            },
            () => {
              const mergedResult = mergingStudentsDataWithTotalPerformance(
                this.state.rankedStudentsCallsAndMessages,
                allStudentProfiles.data
              );
              this.setState({ mergedStudentsResultForTable: mergedResult });
            }
          );
          const currentUserNumberOFMessagesAndCalls = getCurrentUserNumberOfCallsAndMessages(
            getProfile().slackId,
            allNumberOfMessagesAndCalls
          );
          const {
            messageCounter,
            callsCounter
          } = currentUserNumberOFMessagesAndCalls;
          this.setState({
            numberOfMessages: messageCounter,
            numberOfCalls: callsCounter,
            performancePercentage: performancePercentage(
              messageCounter,
              callsCounter,
              targetCalls,
              targetThreads
            )
          });
        } catch (err) {
          console.log(err);
          swal("Oops!", "Something went wrong!", "error");
        }
      }
    );
  };
  render() {
    const { targetName, numberOfMessages, numberOfCalls } = this.state;
    const rankedProfiles = this.state.mergedStudentsResultForTable
      ? this.state.mergedStudentsResultForTable
      : [];

    console.log("from inside the student page", this.props.location.state);

    return (
      <div className="student-page-container ">
        <div className="header-container d-flex justify-content-center mt-5">
          <h1 className="header-font">Your Performance</h1>
        </div>
        <div className="col-sm-10 col-lg-4 mb-4 mt-4">
          <div className="form-group ">
            <label htmlFor="className" className="lead">
              Select Target to See Result{" "}
            </label>

            <select
              className="form-control form-control-lg"
              name="targetName"
              id="className"
              value={targetName}
              onChange={this.onChange}
              required
            >
              <option value="" disabled>
                Select here
              </option>
              {this.state.targetNames.map(data => (
                <option>{data.targetName}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="label barchart-sudentlable-container mb-5">
          <StudentLabel
            targetCalls={this.state.selectedTargetData.targetCalls}
            targetThreads={this.state.selectedTargetData.targetThreads}
            numberOfMessages={numberOfMessages}
            targetName={this.state.targetName}
            numberOfCalls={numberOfCalls}
          />
          <hr className="hr" />
          <ProgressBar
            title="Your Performance"
            className="d-flex col-4  justify-content-center mb-5"
            performancePercentage={this.state.performancePercentage}
          />
        </div>
        <TopStudents rankedProfiles={rankedProfiles} />
      </div>
    );
  }
}

export default StudentPage;
