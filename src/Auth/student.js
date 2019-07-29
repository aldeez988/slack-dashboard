import React from "react";
import { Route, Redirect } from "react-router-dom";
import { loggedIn, getUserType } from "./index";
import Nav from "../Components/Nav/index";

const Private = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return loggedIn() && getUserType() === "Student" ? (
          <div>
            <Nav />

            <Component {...props} />
          </div>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
};

export default Private;
