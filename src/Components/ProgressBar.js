import React, { Component } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
class ProgressBar extends Component {
  render() {
    const percentage = this.props.performancePercentage
      ? Math.floor(this.props.performancePercentage)
      : 0;

    return (
      <div
        style={{ maxWidth: 300, marginBottom: 20 }}
        className=" mb-5"
      >
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "black",
            pathColor: "gold",
            trailColor: "black",
            
          })}
        />
        <h2 style={{textAlign:"center",marginTop:"50px"}}>Your Performance</h2>
      </div>
    );
  }
}

export default ProgressBar;
