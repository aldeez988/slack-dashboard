import ReactTable from "react-table";
import matchSorter from "match-sorter";
import "react-table/react-table.css";
import "./Table.css";
import { Tips } from "./Utils";

import React, { Component } from "react";

class Table extends Component {
  state = {
    callsTarget: this.props.callsTarget,
    messagesTarget: this.props.messagesTarget
  };
  render() {
    console.log("Hi from inside the table", this.props.selectedTargetData);
    return (
      <div
        className="label"
        style={{ backgroundColor: "white", marginTop: "20px", width: "100%" }}
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
                  id: "firstName",
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
                  Header: "Number Of Calls",
                  accessor: "callsCounter",
                  Cell: row => (
                    <div style={{ textAlign: "center" }}>{row.value}</div>
                  )
                },

                {
                  Header: "Number Of Messages",
                  accessor: "messageCounter",
                  Cell: row => (
                    <div style={{ textAlign: "center" }}>{row.value}</div>
                  )
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
      </div>
    );
  }
}

export default Table;
