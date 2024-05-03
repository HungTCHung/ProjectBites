import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
const Home = () => {
  const { user } = useContext(UserContext);
  console.log(user.isAuthenticated);
  if (user && user.isAuthenticated === true) {
    return <div> only user may know</div>;
  } else {
    return (
      <>
        <div>This is HomePage</div>
      </>
    );
  }
};

export default Home;
