import React, { useContext } from "react";
import { useState } from "react";
import ModalUserLogin from "../ManageUsers/ModalUser";
import "./NavHeader.scss";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom/cjs/react-router-dom";
import logo from "../../img/logo.jpg";
import { NavLink, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
const NavHeader = () => {
  const [isShowModalLogin, setIsShowModalLogin] = useState(false);
  const [isShowUserInfo, setIsShowUserInfo] = useState(false);
  const { logout } = useContext(UserContext);
  const handleCloseModal = () => {
    setIsShowModalLogin(false);
  };
  const onHideModalUser = () => {
    setIsShowModalLogin(false);
  };
  const { user } = useContext(UserContext);
  const loginUserSuccess = () => {
    setIsShowUserInfo(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("UserDataLogin");
    setIsShowUserInfo(false);
    logout();
  };
  const changeLinkToWrite = () => {};
  // <div className="nav-content">
  //         <div className="nav-content-left">
  //           <div className="nav-logo">logo</div>
  //           <div className="nav-home">home</div>
  //           <div className="nav-247">24*7</div>
  //           <div className="nav-premium">Premium</div>
  //           <div className="nav-dailydigest">Daily Digest</div>
  //           <div className="nav-airdrop">Airdrop</div>
  //           <div className="nav-mintnft">Mint NFT</div>
  //           <div className="nav-download">Download</div>
  //           <div className="nav-about">About</div>
  //         </div>
  //         <div className="nav-content-right">
  //           <div className="nav-search">Search</div>
  //           <div className="nav-notification">Notification</div>
  //           <div className="nav-usercontent">
  //             {user.isAuthenticated ? (
  //               <>
  //                 <button
  //                   className="btn btn-primary"
  //                   onClick={() => loginUserSuccess}
  //                 >
  //                   <span>Welcome {user.account.username}</span>
  //                 </button>
  //                 <button className="btn btn-primary">
  //                   <span className="btn-logout" onClick={() => handleLogout()}>
  //                     logout
  //                   </span>
  //                 </button>
  //                 <button className="post">
  //                   <span onClick={() => changeLinkToWrite()}>
  //                     Write a article!
  //                   </span>
  //                 </button>
  //               </>
  //             ) : (
  //               <>
  //                 <button
  //                   className="btn btn-primary"
  //                   onClick={() => {
  //                     setIsShowModalLogin(true);
  //                   }}
  //                 >
  //                   Login
  //                 </button>
  //               </>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  return (
    <>
      <div className="nav-header">
        <Navbar bg="header" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              <span className="brand-name">Home</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/" exact className="nav-link">
                  Home
                </NavLink>
                <NavLink to="/" exact className="nav-link">
                  Home
                </NavLink>
                <NavLink to="/" exact className="nav-link">
                  Home
                </NavLink>
                <NavLink to="/" exact className="nav-link">
                  Home
                </NavLink>
              </Nav>
              <Nav>
                {user.isAuthenticated ? (
                  <>
                    <Nav.Item className="nav-link">
                      Welcome {user.account.username}
                    </Nav.Item>
                    <Nav.Item className="log-out">
                      <span
                        className="btn-logout"
                        onClick={() => handleLogout()}
                      >
                        logout
                      </span>
                    </Nav.Item>
                    <NavDropdown title="Setting" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Do something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Do something
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setIsShowModalLogin(true);
                      }}
                    >
                      Login
                    </button>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <ModalUserLogin onHide={onHideModalUser} show={isShowModalLogin} />
    </>
  );
};

export default NavHeader;
