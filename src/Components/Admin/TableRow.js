import React, { Component } from "react";
import { acceptUser, rejectUser } from "../actions/AcceptUser";
import swal from "sweetalert";

class TableRow extends Component {
  state = { user: this.props.user, show: true, newStatus: "" };
  handelAccept = async () => {
    // const body = { status: "Accept", id: this.props.user._id };

    try {
      const response = await acceptUser({
        status: "Accepted",
        id: this.props.user._id
      });
      this.setState({ user: response.data, newStatus: response.data.status });
      console.log(response);
    } catch (err) {
      swal("Oops!", "Something went wrong", "error");
    }
  };

  handleReject = async () => {
    try {
      const response = await rejectUser({
        status: "Rejected",
        id: this.props.user._id
      });
      this.setState({ user: response.data, newStatus: response.data.status });
    } catch (err) {
      swal("Oops!", "Something went wrong", "error");
    }
  };
  render() {
    const accept = (
      <button onClick={this.handelAccept} type="button" class="btn btn-success">
        Accept{" "}
      </button>
    );
    const reject = (
      <button onClick={this.handleReject} type="button" class="btn btn-danger">
        Reject
      </button>
    );
    if (this.state.user.status === "Pending")
      return (
        <tr>
          <th scope="row">{this.props.index + 1}</th>
          <td>{this.state.user.firstName + " " + this.state.user.lastName}</td>
          <td>{this.state.user.email}</td>
          <td>{this.state.user.tel}</td>
          <td>{this.state.user.city}</td>
          <td>{this.state.user.userType}</td>
          {console.log("user fro table row", this.props.user)}
          <td>{accept}</td>
          <td>{reject}</td>
        </tr>
      );
    else if (this.state.user.status === "Accepted") {
      return (
        <tr>
          <th scope="row">{this.props.index + 1}</th>
          <td>{this.state.user.firstName + " " + this.state.user.lastName}</td>
          <td>{this.state.user.email}</td>
          <td>{this.state.user.tel}</td>
          <td>{this.state.user.city}</td>
          <td>{this.state.user.userType}</td>
          {console.log("user fro table row", this.props.user)}
          <td>
            <i
              class="fa fa-check-circle"
              style={{ fontSize: "50px", color: "green" }}
            />
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <th scope="row">{this.props.index + 1}</th>
          <td>{this.state.user.firstName + " " + this.state.user.lastName}</td>
          <td>{this.state.user.email}</td>
          <td>{this.state.user.tel}</td>
          <td>{this.state.user.city}</td>
          <td>{this.state.user.userType}</td>
          {console.log("user fro table row", this.props.user)}
          <td>
            <i
              class="fa fa-ban"
              aria-hidden="true"
              style={{ fontSize: "50px", color: "red" }}
            />
          </td>
        </tr>
      );
    }
  }
}

export default TableRow;
