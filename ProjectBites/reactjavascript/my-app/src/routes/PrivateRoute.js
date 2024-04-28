import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useState } from "react";
import { Router } from "react-router-dom/cjs/react-router-dom.min";
// import toast from "react-toastify";
const PrivateRoute = (props) => {
  const { user } = useContext(UserContext);
  if (user && user.isAuthenticated === true) {
    return (
      <>
        <Router path={props.path} component={props.component} />
      </>
    );
  } else {
    alert("vkl");
  }
};
export default PrivateRoute;
