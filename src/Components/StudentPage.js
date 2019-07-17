import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import Nav from "./Nav/index";
import StudentLabel from "./StudentLabel";
import Barchart from "./Barchart";
import TopStudents from "./TopStudents";

class StudentPage extends Component {
  render() {
    return (
      <div className="justify-content-center justify-content-lg-around ">
        <Nav />
        <div>
          <div className="d-flex  align-items-center justify-content-center justify-content-lg-around ">
            <div className="align-top">
              <StudentLabel />
            </div>
            <div className="d-flex flex-column align-items-center">
              {" "}
              <h1>This Week Performance</h1>
              <ProgressBar />
              <Barchart />
            </div>
            <div className="align-items-top">
              <TopStudents />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentPage;
