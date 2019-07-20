import React, { Component } from "react";
import logo from "../logo-cyf.png";
import DropDownButton from "./DropDownButton";
import ClassData from "../Data/ClassData.json";
import Barchart from "./Barchart";

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
      <div className="performance-container">
        <h1 calssNames="" style={{}}>
          Check Performance{" "}
        </h1>
        <div className="dropdown-container">
          <div className="col-sm-10 col-lg-4 mb-2">
            <DropDownButton
              title="Week"
              dataToDispaly={this.state.cyfClasses}
              getStudents={this.getStudents}
            />
          </div>
          <div className="col-sm-10 col-lg-4 mb-2">
            <DropDownButton title="Class" dataToDispaly={weeks} />
          </div>
          <div className="col-sm-10  col-lg-4 mb-2">
            <DropDownButton
              title="Students"
              dataToDispaly={this.state.students ? this.state.students : []}
            />
          </div>
        </div>

        <div className="barchart-performance-container ">
          <div className="performance-container mt-5 col-md-6">
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

export default SetTargetPage;
