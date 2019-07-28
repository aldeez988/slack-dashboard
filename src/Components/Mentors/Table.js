import ReactTable from "react-table";
import matchSorter from "match-sorter";
import "react-table/react-table.css";
import "./Table.css";
import { Tips } from "./Utils";

import React, { Component } from "react";

class Table extends Component {
  state = {
    callsTarget: this.props.callsTarget ? this.props.callsTarget : 0,
    messagesTarget: this.props.messagesTarget ? this.props.messagesTarget : 0
  };
  render() {
    return (
      <div
        style={{ backgroundColor: "white", marginTop: "20px", width: "95%" }}
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
                  filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) &&
                    row[filter.id].endsWith(filter.value)
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
                  className: "center"
                },
                {
                  Header: "Hit Calls Target",
                  accessor: "hitCallsTarget",
                  id: "hitCallsTarget",
                  Cell: ({ value }) => (value >= 21 ? "Yes" : "No"),
                  filterMethod: (filter, row) => {
                    if (filter.value === "all") {
                      return true;
                    }
                    if (filter.value === "true") {
                      return row[filter.id] >= 21;
                    }
                    return row[filter.id] < 21;
                  },
                  Filter: ({ filter, onChange }) => (
                    <select
                      onChange={event => onChange(event.target.value)}
                      style={{ width: "100%" }}
                      value={filter ? filter.value : "all"}
                    >
                      <option value="all">Show All</option>
                      <option value="true">Hit Calls Target </option>
                      <option value="false">Under Calls Target</option>
                    </select>
                  )
                },
                {
                  Header: "Number Of Messages",
                  accessor: "messageCounter"
                },
                {
                  Header: "Hit Calls Target",
                  accessor: "hitCallsTarget",
                  id: "hitCallsTarget",
                  Cell: ({ value }) => (value >= 21 ? "Yes" : "No"),
                  filterMethod: (filter, row) => {
                    if (filter.value === "all") {
                      return true;
                    }
                    if (filter.value === "true") {
                      return row[filter.id] >= 21;
                    }
                    return row[filter.id] < 21;
                  },
                  Filter: ({ filter, onChange }) => (
                    <select
                      onChange={event => onChange(event.target.value)}
                      style={{ width: "100%" }}
                      value={filter ? filter.value : "all"}
                    >
                      <option value="all">Show All</option>
                      <option value="true">Hit Calls Target </option>
                      <option value="false">Under Calls Target</option>
                    </select>
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
