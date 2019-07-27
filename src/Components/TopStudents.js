import React, { Component } from "react";
import StudentRankingTable from "../Components/StudentRankTable";
class TopStudents extends Component {
  render() {
    return (
      <div className="label" style={{ overflowX: "scroll" }}>
        <h3 className="">
          Your class performance :
          <StudentRankingTable data={this.props.rankedProfiles} />
        </h3>
      </div>
    );
  }
}

export default TopStudents;
