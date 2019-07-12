import React, { Component } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
class ProgressBar extends Component {
  render() {
    const percentage = Math.floor(100 * Math.random());

    return (
      <div style={{ width: 300, marginBottom: 20 }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "black",
            pathColor: "gold",
            trailColor: "black"
          })}
        />
      </div>
    );
  }
}

export default ProgressBar;
