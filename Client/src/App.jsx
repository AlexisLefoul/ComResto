import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import logo from "./assets/logo.png";

import CarteMenu from "./pages/CarteMenu";
import GestionStock from "./pages/GestionStock";
import Login from "./pages/Login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
  const [state, setState] = React.useState(false);
  return (
    <>
      <div className="header">
        <div className="c-logo">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>
      </div>
      <div>
        <h1>React Router Example</h1>
        <ul role="nav">
          <li>
            <Link to="/cartemenu">Carte des plats</Link>
          </li>
          <li>
            <Link to="/gestionstock">Gestion des stocks</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="menu" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="cartemenu" element={<CarteMenu />} />
        <Route path="gestionstock" element={<GestionStock />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
