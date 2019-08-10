import ReactTable from "react-table";
import matchSorter from "match-sorter";
import "react-table/react-table.css";
import { Tips } from "../Mentors/Utils";
import React, { Component } from "react";

class StudentRankingTable extends Component {
  state = {
    callsTarget: this.props.callsTarget ? this.props.callsTarget : 0,
    messagesTarget: this.props.messagesTarget ? this.props.messagesTarget : 0
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          marginTop: "20px",
          width: "100%",
          overflow: "scroll",
          height: "420px"
        }}
      >
        <ReactTable
          data={this.props.data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value
          }
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["firstName"] }),
                  filterAll: true
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["lastName"] }),
                  filterAll: true
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Total Points",
                  accessor: "totalPoints",
                  Cell: row => (
                    <div style={{ textAlign: "center" }}>{row.value}</div>
                  )
                }
              ]
            }
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
        />
        <br />
        <Tips />
      </div>
    );
  }
}

export default StudentRankingTable;
