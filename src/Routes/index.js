import React from "react";
import { Switch, Route } from "react-router-dom";
// import Private from "../Auth/Private";
// import Profile from "../Components/profile";
import Student from "../Auth/student";
import MentorPrivate from "../Auth/mentor";
import Admin from "../Auth/admin";
import Register from "../Screens/Register";
import Login from "../Screens/Login";
import StudentPage from "../Components/StudentPage";
import AdminPage from "../Components/Admin/AdminPage";
import PerformancePage from "../Components/Performance";
import Mentor from "../Components/Mentors/Mentor";

export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={Register} />
    <Student exact path="/sudentpage" component={StudentPage} />
    <Admin exact path="/admin" component={AdminPage} />
    <MentorPrivate exact path="/mentor" component={Mentor} />
    <Route exact path="/performancepage" component={PerformancePage} />

    {/* <Route component={NotFound} /> */}
  </Switch>
);
