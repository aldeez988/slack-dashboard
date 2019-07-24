import React, { Component } from "react";
import ClassData from "../Data/ClassData.json";
import Barchart from "./Barchart";
class PerformancePage extends Component {
  state = {
    className: "",
    studentsName: "",
    students: [],
    cyfClasses: this.props.location.state ? this.props.location.state : []
  };
  getStudents = className => {
    this.setState({
      students: ClassData.find(classdata => classdata.className === className)
        .students
    });
    console.log("students", this.state.students);
  };

  onChange = e => {
    const { name, value } = e.target;
    console.log();
    this.setState({
      [name]: value
    });
  };
  render() {
    const { className, studentsName } = this.state;
    console.log("data", ClassData);
    return (
      <div className="performance-container">
        <br />
        <h1 calssNames="" style={{}}>
          Check Performance{" "}
        </h1>
        <div className="dropdown-container">
          <div className="col-sm-10 col-lg-4 mb-2">
            <div className="form-group ">
              <label htmlFor="className" className="lead">
                Classes{" "}
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
                Students{" "}
              </label>

              <select
                className="form-control form-control-lg"
                name="studentsName"
                id="studentsName"
                value={studentsName}
                onChange={this.onChange}
                required
              >
                <option value="" disabled>
                  Select here
                </option>
                {this.state.cyfClasses.map(data => (
                  <option>London</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="barchart-performance-container  flex-lg-row flex-sm-column">
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

export default PerformancePage;
