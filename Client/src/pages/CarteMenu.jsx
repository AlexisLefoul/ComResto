
import { useState } from "react";
import logo from "../assets/logo.png";
import Card from "../components/Card";
import React from "react";
import ReactDOM from "react-dom/client";


function CarteMenu() {
  const result = { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] };
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
              <a>Plats</a>
            </li>
            <li>
              <select>
                <option defaultValue="" disabled selected hidden>
                  Type de plats :
                </option>
                <option value="">Entrée</option>
                <option value="">Plat</option>
                <option value="">Dessert</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
      <div className="global">
        <div className="content-box">
          {result?.data?.map((rec) => (
            <Card></Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default CarteMenu;
