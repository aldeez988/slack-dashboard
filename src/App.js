import React from "react";
import "./App.css";
import { WebClient } from "@slack/client";
import ProgressBar from "./Components/ProgressBar";
import logo from "./logo-cyf.png";
import Button from "./Components/Button";
import Barchart from "./Components/Barchart";
import Login from "./Components/Login";
function App() {
  return (
    <div className="container-fluid">
      <Login />
    </div>
  );
}

export default App;
