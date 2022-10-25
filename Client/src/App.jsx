import { useState } from "react";
import logo from "./assets/logo.png";
import Card from "./components/Card";
import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <>
      <div className="header">
        <div className="c-logo">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
      <div className="nav">
        <nav>
          <ul>
            <li>
              <a href="#">Aliments</a>
            </li>
            <li>
              <a href="#">Plats</a>
            </li>
          </ul>
        </nav>
      </div>
      <Card></Card>
    </>
  );
}

export default App;
