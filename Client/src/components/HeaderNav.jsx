import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function HeaderNav(props) {
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
            {props.isAdmin ? (
              <li className="li-onclick">
                <a onClick={() => props.setIsAliment(false)}>Plats</a>
              </li>
            ) : (
              <li className="li-notonclick">
                <a>Plats</a>
              </li>
            )}
            {props.isAdmin ? (
              <>
                <li className="li-onclick">
                  <a onClick={() => props.setIsAliment(true)}>Aliments</a>
                </li>
              </>
            ) : null}
          </ul>
          <ul className="ul-filtre">
            {props.isAliment ? (
              <>
                <li className="li-filter">
                  <select>
                    <option defaultValue="" disabled selected hidden>
                    Filtre : Type d'aliments
                    </option>
                    <option value="">Fruit</option>
                    <option value="">Fromage</option>
                    <option value="">Viande</option>
                  </select>
                </li>
              </>
            ) : (
              <>
                <li className="li-filter">
                  <select>
                    <option defaultValue="" disabled selected hidden>
                    Filtre : Type de plats
                    </option>
                    <option value="">Entrée</option>
                    <option value="">Plat</option>
                    <option value="">Dessert</option>
                  </select>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default HeaderNav;
