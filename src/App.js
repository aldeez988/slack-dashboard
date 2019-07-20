import React, { Component } from "react";
import "./App.css";
import Users from "./Data/Users.json";
import ProgressPage from "./Components/ProgressPage";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Components/Nav/index";
import { login } from "./Components/actions/login";
import swal from "sweetalert";
import Routes from "./Routes";

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
      <Router>
        <div>
          {/* <Nav />
        {this.state.userExist && <ProgressPage />}
        {!this.state.userExist && <Login confirmUser={this.confirmUser} />} */}
          <Nav />
          <div className="container main" />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
