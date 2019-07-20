import React, { Component } from "react";

class StudentLabel extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row align-self-start">
          <h5 className="col-md-12 mt-3">Today Top Student</h5>
          <h5 className="col-md-12 mt-3">This week Top Student</h5>
          <h5 className="col-md-12 mt-3">Messages target for this week</h5>
          <h5 className="col-md-12 mt-3">Calls target for this week</h5>
          <div>
            <h5 className="col-md-12 mt-3">Your Stars</h5>
            <i class="align-self-centre fa fa-star" />
            <h5 className="col-md-12 mt-3">Your Medals</h5>
            <i class="fa fa-medal" />
          </div>
        </div>
      </div>
    );
  }
}

export default StudentLabel;
