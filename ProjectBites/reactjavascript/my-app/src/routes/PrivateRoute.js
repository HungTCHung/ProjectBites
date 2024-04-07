import { useEffect } from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
const PrivateRoutes = (props) => {
  let history = useHistory();
  console.log("check history", history);
  useEffect(() => {
    let session = sessionStorage.getItem("account");
    console.log("check session", session);
    if (!session) {
      history.push("/login");
      window.location.reload();
    }
    if (session) {
      //check role
    }
  }, []);
  return (
    <>
      <Route path={props.path} component={props.component} />
    </>
  );
};
export default PrivateRoutes;
