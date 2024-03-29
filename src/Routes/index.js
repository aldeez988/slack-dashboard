import React from "react";
import { Switch, Route } from "react-router-dom";
import Student from "../Auth/student";
import MentorPrivate from "../Auth/mentor";
import Admin from "../Auth/admin";
import Register from "../Screens/Register";
import Login from "../Screens/Login";
import StudentPage from "../Components/Students/StudentPage";
import AdminPage from "../Components/Admin/AdminPage";
import Mentor from "../Components/Mentors/Mentor";

export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={Register} />
    <Student exact path="/sudentpage" component={StudentPage} />
    <Admin exact path="/admin" component={AdminPage} />
    <MentorPrivate exact path="/mentor" component={Mentor} />

    {/* <Route component={NotFound} /> */}
  </Switch>
);
