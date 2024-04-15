import React from "react";
import { useState } from "react";
import ModalUserLogin from "../ManageUsers/ModalUser";
import "./Nav.scss";
const Nav = () => {
  const [isShowModalLogin, setIsShowModalLogin] = useState(false);

  const handleCloseModal = () => {
    setIsShowModalLogin(false);
  };
  const onHideModalUser = () => {
    setIsShowModalLogin(false);
  };
  return (
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
              <button
                className="btn btn-primary"
                onClick={() => {
                  setIsShowModalLogin(true);
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalUserLogin onHide={onHideModalUser} show={isShowModalLogin} />
    </>
  );
};

export default Nav;
