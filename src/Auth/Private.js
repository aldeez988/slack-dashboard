import React from "react";
import { Route, Redirect } from "react-router-dom";
import { loggedIn } from "./index";

const Private = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return loggedIn() ? (
          <div>
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
