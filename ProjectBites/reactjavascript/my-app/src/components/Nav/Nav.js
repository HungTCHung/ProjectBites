import React, { useContext } from "react";
import { useState } from "react";
import ModalUserLogin from "../ManageUsers/ModalUser";
import "./Nav.scss";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Nav = () => {
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
  return (
<>
      


    <>
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-content-left">
            <div className="nav-logo">logo</div>
            <div className="nav-home">home</div>
            <div className="nav-247">24*7</div>
            <div className="nav-premium">Premium</div>
            <div className="nav-dailydigest">Daily Digest</div>
            <div className="nav-airdrop">Airdrop</div>
            <div className="nav-mintnft">Mint NFT</div>
            <div className="nav-download">Download</div>
            <div className="nav-about">About</div>
          </div>
          <div className="nav-content-right">
            <div className="nav-search">Search</div>
            <div className="nav-notification">Notification</div>
            <div className="nav-usercontent">
              {user.isAuthenticated ? (
                <>
                  <button
                    className="btn btn-primary"
                    onClick={() => loginUserSuccess}
                  >
                    <span>Welcome {user.account.username}</span>
                  </button>
                  <button className="btn btn-primary">
                    <span className="btn-logout" onClick={() => handleLogout()}>
                      logout
                    </span>
                  </button>
                  <button className="post">
                    <span onClick={() => changeLinkToWrite()}>
                      Write a article!
                    </span>
                  </button>
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
            </div>
          </div>
        </div>
      </div>
      <ModalUserLogin onHide={onHideModalUser} show={isShowModalLogin} />
    </>
    </>
  );
};

export default Nav;
