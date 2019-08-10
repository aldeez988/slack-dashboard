import React, { Component } from "react";
import { addTarget } from "../actions/targets";
import swal from "sweetalert";
import { getStudentsNumber } from "../actions/userProfiles";
import { getPublicChannels } from "../actions/getChannels";
import { getProfile } from "../../Auth/index";

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
    selectedChannelId: "",
    selectedClassId: ""
  };
  componentWillMount() {
    getPublicChannels().then(res => {
      this.setState({ publicChannels: res.data });
    });
  }

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
          this.setState({
            selectedClassId: this.props.cyfClasses.find(
              classData => classData.className === value
            )._id
          });
          await this.getNumberOfStudentsInAClass(value);
        }
        if (name === "selectedChannel") {
          const channelId = this.state.publicChannels.find(
            channel => (channel.name = value)
          ).id;
          this.setState({
            selectedChannelId: channelId
          });
        }
      }
    );
  };

  targetSubmission = async event => {
    event.preventDefault();
    const mentorName = getProfile().firstName + " " + getProfile().lastName;
    const mentorId = getProfile()._id;
    const {
      className,
      targetName,
      startingDate,
      finishingDate,
      targetCalls,
      targetThreads,
      selectedChannelId,
      selectedClassId
    } = this.state;
    const body = {
      className,
      targetName,
      startingDate,
      finishingDate,
      targetCalls,
      targetThreads,
      selectedChannelId,
      classId: selectedClassId,
      mentorName,
      mentorId
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
    console.log("Hi from setTarget", getProfile());
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
      <form
        className="d-flex flex-column align-items-center justify-content-center"
        onSubmit={this.targetSubmission}
        method="post"
      >
        <div className="header-container d-flex justify-content-center">
          <h1 className="header-font">Set A Target</h1>
        </div>
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
        <div className="col-sm-10 col-lg-4 mb-5">
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
              {this.state.publicChannels
                .map(channel => channel.name)
                .sort()
                .map(channelName => (
                  <option>{channelName}</option>
                ))}
            </select>
          </div>
        </div>
        <div className="set-target-inputs-container">
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
                  required
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
                  required
                />
              </div>
            </div>
          </div>
          <div class="form-group ">
            <button type="submit" class="btn btn-success">
              Set Target{" "}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SetTargetPage;
