import "./App.scss";

import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import NavHeader from "./components/NavHeader/NavHeader";
function App() {
  return (
    // <div className="navheader">
    //   <NavHeader />
    // </div>
    <>
      <Router>
        <>
          <div className="app-header">
            <NavHeader />
          </div>
          <div className="app-container"></div>
        </>
      </Router>
    </>
  );
}

export default App;
