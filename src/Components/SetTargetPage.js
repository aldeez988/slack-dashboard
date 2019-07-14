import React, { Component } from "react";
import logo from "../logo-cyf.png";
import DropDownButton from "./DropDownButton";
import ClassData from "../Data/ClassData.json";

const weeks = ["week1", "week2", "week3", "week4", "week5", "week6", "week7"];
class SetTargetPage extends Component {
  state = {
    students: [],
    cyfClasses: ClassData.map(classData => classData.className)
  };
  getStudents = className => {
    this.setState({
      students: ClassData.find(classdata => classdata.className === className)
        .students
    });
    console.log("students", this.state.students);
  };
  render() {
    console.log("data", ClassData);
    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img src={logo} style={{ width: 300, marginBottom: 10 }} />
        <h1 style={{}}>Set a Target For </h1>
        <div class="container d-flex flex-column">
          <div class="d-flex justify-content-between">
            <DropDownButton
              title="Class"
              dataToDispaly={this.state.cyfClasses}
              getStudents={this.getStudents}
            />
            <DropDownButton title="Week" dataToDispaly={weeks} />
            <DropDownButton
              title="Students"
              dataToDispaly={this.state.students ? this.state.students : []}
            />
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <br />
            <br />
            <br />

            <h1>Number of Students</h1>
            <h1>{this.state.students.length}</h1>
            <br />
            <h4>Weekly threads</h4>
            <br />
            <h4>Weekly calls</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default SetTargetPage;
