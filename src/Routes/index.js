import React from "react";
import { Switch, Route } from "react-router-dom";
// import Private from "../Auth/Private";
// import Profile from "../Components/profile";
import Register from "../Screens/Register";
import SetTargetPage from "../Components/SetTargetPage";
import Login from "../Screens/Login";
import StudentPage from "../Components/StudentPage";
import AdminPage from "../Components/Admin/AdminPage";
import ProgressPage from "../Components/ProgressPage";
import PerformancePage from "../Components/Performance";
import Mentor from "../Components/Mentors/Mentor";

export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/sudentpage" component={StudentPage} />
    <Route exact path="/stetarget" component={SetTargetPage} />
    <Route exact path="/admin" component={AdminPage} />
    <Route exact path="/mentor" component={Mentor} />
    <Route exact path="/performancepage" component={PerformancePage} />

    {/* <Route component={NotFound} /> */}
  </Switch>
);
