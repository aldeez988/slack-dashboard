import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import Nav from "./Nav/index";
import StudentLabel from "./StudentLabel";
import Barchart from "./Barchart";
import TopStudents from "./TopStudents";
import swal from "sweetalert";
import moment from "moment";
import { ResponsiveContainer } from "recharts";
import { getTargets } from "./actions/targets";
import { getUserMessageNumber } from "./actions/slack";
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
    //converting timestamp to date
    // const value = "1563216810.003200";
    // var dateString = moment.unix(value).format("DD/MM/YYYY");
    const { value } = e.target;
    this.setState(
      () => {
        return {
          targetName: value,
          selectedTargetData: this.state.targetNames.filter(
            target => target.targetName === value
          )
        };
      },
      //callback inside setState
      async () => {
        const slackId = this.props.location.state.slackId;

        let startingDate =
          new Date(this.state.selectedTargetData[0].startingDate).getTime() /
          1000;
        let finishingDate =
          new Date(this.state.selectedTargetData[0].finishingDate).getTime() /
          1000;
        console.log("from deez", startingDate, finishingDate);

        try {
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
            numberOfCalls: callsCounter
          });
          console.log("response form the slack messages");
        } catch (err) {
          swal("Oops!", "Something went wrong!", "error");
        }
      }
    );
  };
  render() {
    const { targetName, numberOfMessages, numberOfCalls } = this.state;
    console.log("from inside the student page", this.props.location.state);
    console.log("from inside the student page", numberOfMessages);

    return (
      <div className="studen-page d-flex flex-column align-items-around justify-content-center">
        <div className="header-container d-flex justify-content-center">
          <h1 className="">This Week Performance</h1>
          <div className="col-sm-10 col-lg-4 mb-2">
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
        </div>

        <div className="d-flex  justify-content-between ">
          <div className="col-4 align-items-center">
            <StudentLabel
              numberOfMessages={numberOfMessages}
              targetName={this.state.targetName}
              numberOfCalls={numberOfCalls}
            />
          </div>
          <div className="d-flex col-4 flex-column align-items-center">
            <ProgressBar />
          </div>
          <div className="col-4 mt-5">
            <TopStudents />
          </div>
        </div>
        <div className="mt-5 barchart-container">
          <div style={{ width: "50%" }}>
            <Barchart />
          </div>
        </div>
      </div>
    );
  }
}

export default StudentPage;
