import React from "react";
import { Switch, Route } from "react-router-dom";
// import Private from "../Auth/Private";
// import Profile from "../Components/profile";
import Register from "../Screens/Register";
import SetTargetPage from "../Components/SetTargetPage";
import Login from "../Screens/Login";
import StudentPage from "../Components/StudentPage";

export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/sudentpage" component={StudentPage} />
    {/* <Private exact path="/category/:category?" component={Tutorials} /> */}
    <Route exact path="/stetarget" component={SetTargetPage} />
    {/* <Route exact path="/profile" component={Profile} /> */}

    {/* <Route component={NotFound} /> */}
  </Switch>
);
