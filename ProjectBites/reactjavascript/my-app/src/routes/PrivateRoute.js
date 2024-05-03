import React, { useContext } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { Router } from "react-router-dom/cjs/react-router-dom.min";

const PrivateRoute = (props) => {
  let history = useHistory();
  const { user } = useContext(UserContext);

  if (user && user.isAuthenticated) {
    return (
      <>
        <Route path={props.path}>{props.component}</Route>
      </>
    );
  }
  if (!user && user.isAuthenticated !== 0) {
    history.push("/");
  }
  // if (user.isAuthenticated !== 0) {
  //   history.push("/");
  // }
  if (user && user.isAuthenticated) {
    history.push("/write-post");
  }
};

export default PrivateRoute;
