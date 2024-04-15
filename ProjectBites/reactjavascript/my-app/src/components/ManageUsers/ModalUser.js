import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { loginUser } from "../../services/userService";
const ModalUserLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handeCloseModalLogin = () => {
    props.onHide();
  };
  const handleConfirmLogin = async () => {
    //api login
    console.log("kt ", email, password);
    let res = await loginUser(email, password);
    console.log("check res", res);
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
