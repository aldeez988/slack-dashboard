import React from "react";
import "./App.css";

import { WebClient } from "@slack/client";

import ProgressPage from "./Components/ProgressPage";
import SetTargetPage from "./Components/SetTargetPage";
function App() {
  return (
    <div className="container-fluid">
      {<ProgressPage />}
      {/* <SetTargetPage /> */}
    </div>
  );
}

export default App;
