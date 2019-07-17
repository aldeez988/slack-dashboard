import React, { Component } from "react";

class StudentLabel extends Component {
  render() {
    return (
      <div className="container">
        <h5>Today Top Student</h5>
        <h5>This week Top Student</h5>
        <h5>Messages target for this week</h5>
        <h5>Calls target for this week</h5>
        <h5>Your Stars</h5>
        <i class="fa fa-star" />
        <h5>Your Medals</h5>
        <i class="fa fa-medal" />
      </div>
    );
  }
}

export default StudentLabel;
