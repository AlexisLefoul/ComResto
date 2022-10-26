import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import CardPlat from "../components/CardPlat";
import CardAliment from "../components/CardAliment";

function GestionStock() {
  var isAliment = true;
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
              <a onClick={(isAliment = false)}>Plats</a>
            </li>
            <li>
              <a onClick={(isAliment = true)}>Aliments</a>
            </li>
          </ul>
        </nav>
      </div>
      {isAliment ? (
        <div className="global">
          <div className="content-box">
            {result?.data?.map((rec) => (
              <CardPlat isAdmin={true}></CardPlat>
            ))}
          </div>
        </div>
      ) : (
        <div className="global">
          <div className="content-box">
            {result?.data?.map((rec) => (
              <CardAliment></CardAliment>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default GestionStock;
