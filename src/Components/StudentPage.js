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
        <div className="d-flex justify-content-center">
          <h1 style={{ width: "50%" }} className="mt-5 mb-5">
            This Week Performance
          </h1>
        </div>
        <div className="d-flex  justify-content-between ">
          <div className="col-4 align-items-center">
            <StudentLabel />
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
