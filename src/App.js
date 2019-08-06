import React, { Component } from "react";
import "./App.css";
import Users from "./Data/Users.json";
import ProgressPage from "./Components/ProgressPage";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Components/Nav/index";
import Routes from "./Routes";
import Footer from "../src/Footer/index";
class App extends Component {
  state = { userExist: false, userData: {} };

  render() {
    return (
      <Router>
        <div style={{ height: "100%" }}>
          <div className="main">
            <Routes />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
