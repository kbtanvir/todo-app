import React from "react";
import { Route, Redirect } from "react-router-dom";
import { selectAuth } from "../settings/authSlice";
import { useSelector } from "react-redux";
export default function PrivateRoute({ component: Component, ...rest }) {
  const {
    user: { isLoggedIn },
  } = useSelector(selectAuth);
  return (
    <Route
      {...rest}
      render={props => {
        return isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
}
