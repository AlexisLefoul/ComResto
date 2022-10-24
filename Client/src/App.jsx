import { useState } from "react";
import logo from "./assets/appReact.png";
import "./App.css";

function App() {

  return (
    <div className="app">
      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <h1>ComResto</h1>
    </div>
  );
}

export default App;
