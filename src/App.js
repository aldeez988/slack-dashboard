import React from "react";
import "./App.css";
import { WebClient } from "@slack/client";
import ProgressBar from "./Components/ProgressBar";
import logo from "./logo-cyf.png";
import Button from "./Components/Button";
import Barchart from "./Components/Barchart";
function App() {
  return (
    <div className="container-fluid">
      <div className="d-flex  align-items-center justify-content-center justify-content-lg-around ">
        <Button title="Performance" />
        <div className="d-flex flex-column align-items-center">
          <img src={logo} style={{ width: 300, marginBottom: 10 }} />
          <h1>Today</h1>
          <ProgressBar />
          <Barchart />
        </div>
        <Button title="Set a target" />
      </div>
    </div>
  );
}

export default App;
