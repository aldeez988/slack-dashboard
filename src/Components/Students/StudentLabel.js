import React, { Component } from "react";
class StudentLabel extends Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-center">
        <div className="d-flex align-items-center mt-3">
          <h3 className="performance-font">Messages target</h3>
          <i class="far fa-comments icon" style={{ color: "darkgreen" }} />
          <h3 className="mr-3">:</h3>
          <h2>{this.props.targetThreads}</h2>
        </div>
        <div className="d-flex align-items-center mt-3 ">
          <h3 className="performance-font">Your messages</h3>
          <i class="far fa-comments icon" style={{ color: "darkgreen" }} />
          <h3 className="mr-3">:</h3>
          <h2>{this.props.numberOfMessages}</h2>
        </div>
        <div className="d-flex align-items-center mt-3">
          <h3 className="performance-font">Calls target</h3>
          <i class="fa fa-phone icon" style={{ color: "darkgreen" }} />
          <h3 className="mr-3">:</h3>
          <h2>{this.props.targetCalls}</h2>
        </div>
        <div className="d-flex align-items-center mt-3">
          <h3 className="performance-font">Your calls</h3>
          <i class="fa fa-phone icon" style={{ color: "darkgreen" }} />
          <h3 className="mr-3">:</h3>
          <h2>{this.props.numberOfCalls}</h2>
        </div>

        <div>
          <h3 className="performance-font mt-3">Your Stars</h3>
          <i class="fa fa-star" style={{ color: "gold", fontSize: "40px" }} />
        </div>

        <div>
          <h3 className="performance-font mt-3">Your Medals:</h3>
          <i class="fas fa-award" style={{ color: "gold", fontSize: "40px" }} />
        </div>
      </div>
    );
  }
}

export default StudentLabel;
