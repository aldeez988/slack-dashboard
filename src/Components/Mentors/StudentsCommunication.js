import React, { Component } from "react";
import { getTargetsForClass } from "../actions/targets";
import { getStudentsCommunication } from "../actions/getStudentsCommunication";
import { Graph } from "react-d3-graph";

const myConfig = {
  nodeHighlightBehavior: true,
  d3: {
    gravity: -200
  },
  node: {
    color: "lightgreen",
    size: 800,
    highlightStrokeColor: "blue",
    fontSize: 15
  },
  link: {
    highlightColor: "lightblue"
  }
};

class StudentsCommunication extends Component {
  state = {
    targetName: "",
    cyfClasses: [],
    className: "",
    targets: [],
    selectTarget: {},
    selectedClassId: "",
    studentsProfile: [],
    data: null
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
            this.setState({ targets: targetResponse.data, selectedClassId });
            // const getStudentsResponse = await getAllStudents({
            //   id: selectedClassId
            // });
            //this.setState({ studentsProfile: getStudentsResponse.data });
          } catch (err) {
            console.log(err);
          }
        }
        if (name === "targetName") {
          try {
            const selectedTarget = this.state.targets.find(
              target => target.targetName === value
            );
            const startingDate =
              new Date(selectedTarget.startingDate).getTime() / 1000;
            const finishingDate =
              new Date(selectedTarget.finishingDate).getTime() / 1000;
            const { channelId } = selectedTarget;
            const { selectedClassId } = this.state;
            // const studentsProfile = this.state.studentsProfile;
            this.setState({ selectedTargetData: selectedTarget });
            getStudentsCommunication({
              startingDate,
              finishingDate,
              selectedClassId,
              channelId
            }).then(response => {
              console.log("n******* and Calls", response.data);
              this.setState({ data: response.data });
            });
          } catch (err) {
            console.log(err);
          }
        }
      }
    );
  };
  render() {
    const { className, targetName, cyfClasses, data } = this.state;
    return (
      <div className="student-communication-container">
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
        {data && (
          <div className="directed-graph-container">
            <Graph
              id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
              data={data}
              config={myConfig}
            />
          </div>
        )}
      </div>
    );
  }
}

export default StudentsCommunication;
