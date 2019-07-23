import React, { Component } from "react";
import TableRow from "./TableRow";

class UsersJoinRequest extends Component {
  render() {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">City</th>
              <th scope="col">Applied as</th>
              <th scope="col">
                {" "}
                <th scope="col">Accept</th>
              </th>
              <th scope="col" />
            </tr>
          </thead>
          {this.props.usersProfiles.map((user, index) => (
            <TableRow index={index} user={user} />
          ))}
          <tbody />
        </table>
      </div>
    );
  }
}

export default UsersJoinRequest;
