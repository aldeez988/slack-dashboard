import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login";
import Users from "./Data/Users.json";
import ProgressPage from "./Components/ProgressPage";
import Nav from "./Components/Nav/index";
import { login } from "./Components/actions/login";
import swal from "sweetalert";

class App extends Component {
  state = { userExist: false, userData: {} };

  confirmUser = async user => {
    try {
      const response = await login(user);
      console.log("login response ", response.data);
      this.setState(prevState => {
        return {
          userExist: response ? !prevState.userExist : prevState.userExist
        };
      });
    } catch (error) {
      swal("Oops!", "Please check your username and password!", "error");
    }
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
