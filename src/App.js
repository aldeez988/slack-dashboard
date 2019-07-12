import React from "react";
import "./App.css";
import { WebClient } from "@slack/client";

import ProgressPage from "./Components/ProgressPage";
function App() {
  return (
    <div className="container-fluid">
      <ProgressPage />
    </div>
  );
}

export default App;
