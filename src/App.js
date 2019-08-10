import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Footer from "../src/Components/Footer/index";
import "./App.css";
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
