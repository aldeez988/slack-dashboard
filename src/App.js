import React, { Component } from "react";
import "./App.css";
import Users from "./Data/Users.json";
import ProgressPage from "./Components/ProgressPage";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Components/Nav/index";
import Routes from "./Routes";

class App extends Component {
  state = { userExist: false, userData: {} };

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
