import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import logo from "../assets/logo.png";

import CardAliment from "../components/CardAliment";

const result = { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] };

function GestionAliments() {
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
              <a href="/gestionplats">Plats</a>
            </li>
            <li>
              <a href="/gestionaliments">Aliments</a>
            </li>
            <li>
              <select>
                <option defaultValue="" disabled selected hidden>
                  Type d'aliments :
                </option>
                <option value="">Fruit</option>
                <option value="">Fromage</option>
                <option value="">Viande</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
      <div className="global">
        <div className="content-box">
          {result?.data?.map((rec) => (
            <CardAliment></CardAliment>
          ))}
        </div>
      </div>
    </>
  );
}

export default GestionAliments;
