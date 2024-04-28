import React from "react";
import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { loginUser } from "../../services/userService";
import { UserContext } from "../../context/userContext";
const ModalUserLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginContext } = useContext(UserContext);
  const handeCloseModalLogin = () => {
    props.onHide();
  };
  const handleConfirmLogin = async () => {
    //api login

    let res = await loginUser(email, password);
    console.log("check res", res);

    if (res && res.data.EC === 0) {
      let userId = res.data.DT.userId;
      let username = res.data.DT.username;
      let email = res.data.DT.email;
      let token = res.data.DT.access_token;
      let groupWithRole = res.data.DT.groupWithRole;
      let userDataLogin = {
        isAuthenticated: true,
        token: token,
        account: { userId, groupWithRole, username, email },
      };
      localStorage.setItem("UserDataLogin", JSON.stringify(userDataLogin));

      loginContext(userDataLogin);
      handeCloseModalLogin();
    }
  };
  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        className="modal-user"
        onHide={() => handeCloseModalLogin()}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <span> Modal nay de dang nhap</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="content-body row">
            <div className="email col-12 from-group">
              <label>Email</label>
              <input
                placeholder="email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              {console.log("check email", email)}
            </div>
            <div className="password col-12 form-group">
              <label>Password</label>
              <input
                placeholder="password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              {console.log("check password", password)}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handeCloseModalLogin()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleConfirmLogin()}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalUserLogin;
