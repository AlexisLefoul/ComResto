import { useState, useEffect } from "react";
import React from "react";
import logo from "./assets/logo.png";

import API from "../app";

function Login() {
  return (
    <>
      <div className="header">
        <div className="c-logo">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
      <div id="loginform">
        <h2 id="headerTitle">Connexion</h2>
        <div>
          <div class="row">
            <label>Identifiant</label>
            <input type="text" placeholder="Identifiant" />
          </div>
          <div class="row">
            <label>Mot de passe</label>
            <input type="text" placeholder="Mot de passe" />
          </div>
          <div id="button" class="row">
            <button>Connexion</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
