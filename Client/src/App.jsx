import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <div className="c-logo">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
      <div className="main"></div>
    </>
  );
}

export default App;
