import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WritePost from "../writepost/write";
import PrivateRoute from "../../routes/PrivateRoute";
const AppRoute = () => {
  return (
    <>
      <Router>
        <Switch>
          {/* <PrivateRoute
            path="/write-post"
            component=<WritePost />
          ></PrivateRoute> */}
          <Route path="/write-post">
            <WritePost />
          </Route>
          <Route path="write-post2">
            <WritePost />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default AppRoute;
