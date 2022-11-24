import React from "react";
import logo from "../assets/logo.png";
import logo_logout from "../assets/exit.svg";

import { Link } from "react-router-dom";

function MenuAdmin() {
  function disconnect() {
    localStorage.clear();
    window.location.href = "/";
  }
  return (
    <>
      <div className="header">
        <div className="c-logo">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>
        <div className="e-logo" onClick={disconnect}>
          <img src={logo_logout} className="logo-add" alt="logo" />
        </div>
      </div>
      <div className="menu-admin">
        <Link to="/cartemenu" className="card-admin">
          <h2>📋</h2>
          <h1>Carte des plats</h1>
        </Link>
        <Link to="/gestionstock" className="card-admin">
          <h2>🍱</h2>
          <h1>Gestion des stocks</h1>
        </Link>
      </div>
    </>
  );
}
export default MenuAdmin;
