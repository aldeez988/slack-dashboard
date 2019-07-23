import React, { Component } from "react";
import logo from "../logo-cyf.png";
import DropDownButton from "./DropDownButton";
import ClassData from "../Data/ClassData.json";

const weeks = ["week1", "week2", "week3", "week4", "week5", "week6", "week7"];
class SetTargetPage extends Component {
  state = {
    students: [],
    cyfClasses: this.props.location.state
  };
  getStudents = className => {
    this.setState({
      students: ClassData.find(classdata => classdata.className === className)
        .students
    });
    console.log("students", this.state.students);
  };
  render() {
    console.log("From set target page", this.props.location);

    return (
      <div className="d-flex flex-column align-items-center justify-content-center mt-5">
        <h1 calssNames="col-sm-10" style={{}}>
          Set a Target For{" "}
        </h1>
        <div class="container  mt-5">
          <div className="row justify-content-between">
            <div className="col-sm-10 col-lg-4 mb-2">
              <DropDownButton
                title="Class"
                dataToDispaly={this.state.cyfClasses}
                getStudents={this.getStudents}
              />
            </div>
            <div className="col-sm-10 col-lg-4 mb-2">
              <DropDownButton title="Week" dataToDispaly={weeks} />
            </div>
            <div className="col-sm-10  col-lg-4 mb-2">
              <DropDownButton
                title="Students"
                dataToDispaly={this.state.students ? this.state.students : []}
              />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <br />
          <br />
          <br />

          <h1>Number of Students</h1>
          <h1>{this.state.students.length}</h1>
          <br />
          <div calssNames="d-flex flex-column align-items-center justify-content-center">
            <h4>Weekly threads</h4>
            <div class="form-group row">
              <div class="col-12">
                <input
                  class="form-control"
                  type="number"
                  id="example-number-input"
                />
              </div>
            </div>
          </div>
          <br />
          <div calssNames="d-flex flex-column align-items-center justify-content-center">
            <h4>Weekly calls</h4>
            <div class="form-group row">
              <div class="col-12">
                <input
                  class="form-control"
                  type="number"
                  id="example-number-input"
                />
              </div>
            </div>
          </div>
          <div class="form-group ">
            <button
              onClick={this.handleClick}
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
