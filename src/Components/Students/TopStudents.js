import React, { Component } from "react";
import StudentRankingTable from "./StudentRankTable";
class TopStudents extends Component {
  render() {
    return (
      <div className="label">
        <h3 className="">Your class performance :</h3>
        <StudentRankingTable data={this.props.rankedProfiles} />
      </div>
    );
  }
}

export default TopStudents;
