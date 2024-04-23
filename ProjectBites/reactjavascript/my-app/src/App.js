import "./App.scss";

import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Nav from "../src/components/Nav/Nav";
function App() {
  return (
    <div className="Nav">
      <Nav />
    </div>
  );
}

export default App;
