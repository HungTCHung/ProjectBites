import { React, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WritePost from "../writepost/write";
import PrivateRoute from "../../routes/PrivateRoute";
import { UserContext } from "../../context/userContext";
import Home from "../home/home";
const AppRoute = () => {
  const { user } = useContext(UserContext);
  console.log();
  return (
    <>
      <Router>
        <Switch>
          {/* <PrivateRoute
            path="/write-post"
            component=<WritePost />
          ></PrivateRoute> */}
          <PrivateRoute path="/write-post" component=<WritePost /> />

          <Route path="/write-post2">
            <WritePost />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default AppRoute;
