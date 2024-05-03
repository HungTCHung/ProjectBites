import React, { useContext } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { Router } from "react-router-dom/cjs/react-router-dom.min";
import Home from "../components/home/home";
const PrivateRoute = (props) => {
  let history = useHistory();
  const { user } = useContext(UserContext);

  if (user.isAuthenticated === true) {
    return (
      <>
        <Route path={props.path}>{props.component}</Route>
      </>
    );
  } else {
    return (
      <>
        <Route path="/">
          <Home />
        </Route>
        
      </>
    );
  }

  // if (user.isAuthenticated !== 0) {
  //   history.push("/");
  // }
  // if (user && user.isAuthenticated) {
  //   history.push("/write-post");
  // }
};

export default PrivateRoute;
