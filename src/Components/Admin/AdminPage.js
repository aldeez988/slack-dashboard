import React, { Component } from "react";
import NavTabItem from "./NavTabItem";
import AddClass from "./AddClass";
import UsersJoinRequest from "./UsersJoinRequest";
import { getUserProfiles } from "../actions/userProfiles";
import "./admin.css";
class AdminPage extends Component {
  state = {
    active: "active",
    showAddClass: true,
    showAddWeek: false,
    adminData: this.props.location.state,
    usersProfiles: {}
  };
  toggleClass = () => {
    this.setState(prevState => {
      return { active: "" };
    });
  };
  handleShowAddClassPage = () => {
    this.setState({ showAddClass: true, showAddWeek: false });
  };

  handleShowAddWeekPage = async () => {
    const response = await getUserProfiles();

    this.setState({ usersProfiles: response.data });
    console.log("users profiles", response.data);

    this.setState({ showAddClass: false, showAddWeek: true });
  };

  render() {
    return (
      <div className="admin-tab-container">
        <ul className="nav nav-tabs">
          <NavTabItem
            className={this.state.active ? "active" : ""}
            toggleClass={this.toggleClass}
            active={this.state.active}
            tabName="Add Class"
            handlePageChange={this.handleShowAddClassPage}
          />
          <NavTabItem
            toggleClass={this.toggleClass}
            active={this.state.active}
            tabName="Joining Requests"
            handlePageChange={this.handleShowAddWeekPage}
          />
        </ul>
        <br />
        <br />
        {console.log("the deatial from the admin page", this.props.location)}
        {this.state.showAddClass && (
          <AddClass adminData={this.state.adminData} />
        )}
        {this.state.showAddWeek && (
          <UsersJoinRequest
            adminData={this.state.adminData}
            usersProfiles={this.state.usersProfiles}
          />
        )}
      </div>
    );
  }
}

export default AdminPage;
