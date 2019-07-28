import React, { Component } from "react";
import ClassData from "../Data/ClassData.json";
import { addTarget } from "../Components/actions/targets";
import swal from "sweetalert";
import { getStudentsNumber } from "../Components/actions/userProfiles";
import { getPublicChannels } from "./actions/getChannels";
class SetTargetPage extends Component {
  state = {
    students: [],
    cyfClasses: this.props.cyfClasses ? this.props.cyfClasses : [],
    numberOfStudents: 0,
    targetName: "",
    className: "",
    startingDate: "",
    finishingDate: "",
    targetCalls: "",
    targetThreads: "",
    publicChannels: [],
    selectedChannel: "",
    selectedChannelId: ""
  };
  componentWillMount() {
    getPublicChannels().then(res => {
      this.setState({ publicChannels: res.data });
    });
  }
  getStudents = className => {
    this.setState({
      students: ClassData.find(classdata => classdata.className === className)
        .students
    });
    console.log("students", this.state.students);
  };

  getNumberOfStudentsInAClass = async className => {
    try {
      const response = await getStudentsNumber({ className: className });

      this.setState({
        numberOfStudents: response.data.numberOfStudents
          ? response.data.numberOfStudents
          : 0
      });
      console.log("setTarget", response.data);

      this.setState({ showAddClass: false, showAddWeek: true });
    } catch (err) {
      swal("Oops!", "Something went wrong!", "error");
    }
  };

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
          await this.getNumberOfStudentsInAClass(value);
        }
        if (name === "selectedChannel") {
          const channelId = this.state.publicChannels.find(
            channel => (channel.name = value)
          ).id;
          this.setState({ selectedChannelId: channelId });
        }
      }
    );
  };

  targetSubmission = async () => {
    const {
      className,
      targetName,
      startingDate,
      finishingDate,
      targetCalls,
      targetThreads,
      selectedChannelId
    } = this.state;
    const body = {
      className,
      targetName,
      startingDate,
      finishingDate,
      targetCalls,
      targetThreads,
      selectedChannelId
    };
    try {
      const response = await addTarget(body);
      if (response.status === 200) {
        swal("Set Target", "Successfully added!", "success");
      } else {
        swal("Oops!", "Something went wrong!", "error");
      }
    } catch (err) {
      swal("Oops!", "Something went wrong!", "error");
    }
  };

  render() {
    console.log("From set target page", this.props.location);
    const {
      className,
      targetName,
      startingDate,
      finishingDate,
      targetCalls,
      targetThreads,
      selectedChannel
    } = this.state;
    return (
      <div className="d-flex flex-column align-items-center justify-content-center mt-5">
        <div className="set-target-dropdown-container">
          <div className="col-sm-10 col-lg-4 mb-2">
            <div className="form-group ">
              <label htmlFor="className" className="lead">
                Select Class*{" "}
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
          <div className="col-sm-10 col-lg-4 mb-2">
            <div className="form-group">
              <label htmlFor="targetName" className="lead">
                Target Name*
              </label>
              <input
                type="text"
                name="targetName"
                id="targetName"
                className="form-control form-control-lg"
                placeholder="Classe Target Name"
                value={targetName}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="set-target-dropdown-container">
          <div className="col-sm-10 col-lg-4 mb-2">
            <div className="form-group">
              <label htmlFor="startingDate" className="lead">
                Target Starting Date*
              </label>
              <input
                type="date"
                name="startingDate"
                id="startingDate"
                className="form-control form-control-lg"
                placeholder="Classes Starting Date"
                value={startingDate}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="col-sm-10 col-lg-4 mb-2">
            <div className="form-group">
              <label htmlFor="finishingDate" className="lead">
                Target End Date*
              </label>
              <input
                type="date"
                name="finishingDate"
                id="finishingDate"
                className="form-control form-control-lg"
                placeholder="Classes Starting Date"
                value={finishingDate}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="col-sm-10 col-lg-4 mb-2">
          <div className="form-group ">
            <label htmlFor="selectedChannel" className="lead">
              Select Channel*{" "}
            </label>

            <select
              className="form-control form-control-lg"
              name="selectedChannel"
              id="selectedChannel"
              value={selectedChannel}
              onChange={this.onChange}
              required
            >
              <option value="" disabled>
                Select here
              </option>
              {this.state.publicChannels.map(channel => (
                <option>{channel.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <br />
          <br />
          <br />

          <h1>Number of Students</h1>
          <h1>{this.state.numberOfStudents}</h1>
          <br />
          <div calssNames="d-flex flex-column align-items-center justify-content-center">
            <h4>Target threads</h4>
            <div class="form-group row">
              <div class="col-12">
                <input
                  class="form-control"
                  type="number"
                  name="targetThreads"
                  id="targetThreads"
                  value={targetThreads}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
          <br />
          <div calssNames="d-flex flex-column align-items-center justify-content-center">
            <h4>Target calls</h4>
            <div class="form-group row">
              <div class="col-12">
                <input
                  class="form-control"
                  type="number"
                  name="targetCalls"
                  id="targetCalls"
                  onChange={this.onChange}
                  value={targetCalls}
                />
              </div>
            </div>
          </div>
          <div class="form-group ">
            <button
              onClick={this.targetSubmission}
              type="submit"
              class="btn btn-success"
            >
              Set Target{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SetTargetPage;
