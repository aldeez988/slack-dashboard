import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login";
import { WebClient } from "@slack/client";
import Users from "./Data/Users.json";
import ProgressPage from "./Components/ProgressPage";
import SetTargetPage from "./Components/SetTargetPage";

class App extends Component {
  state = { userExist: false };

  confirmUser = user => {
    this.setState({
      userExist: Users.find(
        userData =>
          userData.email === user.email && userData.password === user.password
      )
        ? true
        : false
    });
    console.log("ok", this.state.userExist);
  };
  render() {
    return (
      <div>
        {this.state.userExist && <ProgressPage />}
        <Login confirmUser={this.confirmUser} />
        {/* <SetTargetPage /> */}
      </div>
    );
  }

}

export default App;
