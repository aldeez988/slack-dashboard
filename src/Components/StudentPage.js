import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import Nav from "./Nav/index";
import StudentLabel from "./StudentLabel";
import Barchart from "./Barchart";
import TopStudents from "./TopStudents";
import swal from "sweetalert";
import { ResponsiveContainer } from "recharts";
import { getTargets } from "./actions/targets";
import { getUserMessageNumber } from "./actions/slack";
import { performancePercentage } from "./helpers/performancePercentage";
class StudentPage extends Component {
  state = {
    targetName: "",
    userData: {},
    targetNames: [],
    selectedTargetData: {},
    numberOfMessages: "",
    numberOfCalls: ""
  };

  componentWillMount() {
    getTargets({ className: this.props.location.state.className })
      .then(res => {
        this.setState({ targetNames: res.data });
        console.log("after converting a time stamp to date", res);
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
        const slackId = this.props.location.state.slackId;

        let startingDate =
          new Date(this.state.selectedTargetData.startingDate).getTime() / 1000;
        let finishingDate =
          new Date(this.state.selectedTargetData.finishingDate).getTime() /
          1000;
        console.log("from deez", startingDate, finishingDate);

        try {
          const targetCalls = this.state.selectedTargetData.targetCalls;
          const targetThreads = this.state.selectedTargetData.targetThreads;
          const response = await getUserMessageNumber({
            slackId,
            startingDate,
            finishingDate
          });
          const {
            messageCounter,
            callsCounter
          } = response.data.numberOfMessagesAndCalls;

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
          console.log(
            "response form the slack messages",
            performancePercentage(
              messageCounter,
              callsCounter,
              targetCalls,
              targetThreads
            )
          );
        } catch (err) {
          swal("Oops!", "Something went wrong!", "error");
        }
      }
    );
  };
  render() {
    const { targetName, numberOfMessages, numberOfCalls } = this.state;
    const barchartData = [
      { name: "Calls", calls: numberOfCalls, amt: 2400 },
      { name: "Messages", messages: numberOfMessages, amt: 222 }
    ];
    console.log("from inside the student page", this.props.location.state);
    console.log("from inside the student page", numberOfMessages);

    return (
      <div className="student-page-container ">
        <div className="header-container d-flex justify-content-center">
          <h1 className="">Your Performance</h1>
        </div>
        <div className="col-sm-10 col-lg-4 mb-4">
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
        <div className="d-flex col-4  align-items-center">
          <ProgressBar
            performancePercentage={this.state.performancePercentage}
          />
        </div>
        <div className="barchart-sudentlable-container ">
          <div className="student-lable-container">
            <StudentLabel
              targetCalls={this.state.selectedTargetData.targetCalls}
              targetThreads={this.state.selectedTargetData.targetThreads}
              numberOfMessages={numberOfMessages}
              targetName={this.state.targetName}
              numberOfCalls={numberOfCalls}
            />
          </div>
          <div className="mt-5 barchart-container">
            <div style={{ width: "100%" }}>
              <Barchart barchartData={barchartData} />
            </div>
          </div>
          {/* <div className="col-4 mt-5">
            <TopStudents />
          </div> */}
        </div>
      </div>
    );
  }
}

export default StudentPage;
