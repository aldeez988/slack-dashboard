import React, { Component } from "react";

class TopStudents extends Component {
  render() {
    return (
      <div className="label">
        <h3 className="">
          Top 3 Students this week{" "}
          <i class="fa fa-trophy" style={{ fontSize: "30px", color: "gold" }} />
          :
        </h3>
      </div>
    );
  }
}

export default TopStudents;
