import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login";
import { WebClient } from "@slack/client";
import Users from "./Data/Users.json";
import ProgressPage from "./Components/ProgressPage";
import Nav from "./Components/Nav/index";

class App extends Component {
  state = { userExist: false };

  confirmUser = user => {
    const { email, password } = user;
    this.setState(
      prevState => {
        return {
          userExist: Users.find(
            userData =>
              userData.email === email && userData.password === password
          )
            ? !prevState.userExist
            : prevState.userExist
        };
      },
      () => {
        console.log("ok", this.state.userExist);
      }
    );
  };
  render() {
    return (
      <div>
        <Nav />
        {this.state.userExist && <ProgressPage />}
        {!this.state.userExist && <Login confirmUser={this.confirmUser} />}
      </div>
    );
  }
}

export default App;
