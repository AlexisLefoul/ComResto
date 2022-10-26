import { useState } from "react";
import logo from "../assets/logo.png";
import CardPlat from "../components/CardPlat";
import React from "react";
import { Link } from "react-router-dom";

function CarteMenu() {
  const result = { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] };
  return (
    <>
      <div className="header">
        <div className="c-logo">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
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
            <CardPlat isAdmin={false}></CardPlat>
          ))}
        </div>
      </div>
    </>
  );
}

export default CarteMenu;