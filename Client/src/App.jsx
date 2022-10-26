import { useState } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from "./assets/logo.png";

import CarteMenu from "./pages/CarteMenu";
import GestionStock from "./pages/GestionStock";
import GestionAliments from "./pages/GestionAliments";
import GestionPlats from "./pages/GestionPlats";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => (
  <>
    <div className="header">
      <div className="c-logo">
        <img src={logo} className="logo" alt="logo" />
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

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="cartemenu" element={<CarteMenu />} />
      <Route path="gestionstock" element={<GestionStock />} />
      <Route path="gestionaliments" element={<GestionAliments />} />
      <Route path="gestionplats" element={<GestionPlats />} />
    </Routes>
  </BrowserRouter>
);
