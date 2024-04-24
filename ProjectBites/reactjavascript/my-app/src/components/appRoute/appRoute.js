import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WritePost from "../writepost/write";
const AppRoute = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="write-post1">
            <WritePost />
          </Route>
          <Route path="write-post1">
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
