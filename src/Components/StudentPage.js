import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import Nav from "./Nav/index";
import StudentLabel from "./StudentLabel";
import Barchart from "./Barchart";
import TopStudents from "./TopStudents";
import { ResponsiveContainer } from "recharts";
class StudentPage extends Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-around justify-content-center">
        <div className="d-flex align-items-center justify-content-center justify-content-between col-md-12 ">
          <div className="col-4 align-items-center">
            <StudentLabel />
          </div>
          <div className="d-flex col-4 flex-column align-items-center">
            <h3 className="mt-5 mb-5">This Week Performance</h3>
            <ProgressBar />
          </div>
          <div className="col-4 mt-5">
            <TopStudents />
          </div>
        </div>
        <div className="mt-5 question">
          <Barchart />
        </div>
      </div>
    );
  }
}

export default StudentPage;
