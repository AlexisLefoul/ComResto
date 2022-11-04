import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logo_add from "../assets/more.svg";

import ModalAdd from "./ModalAdd";

function HeaderNav(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  var idModal;

  if (props.isAliment) {
    idModal = "addAliment";
  } else {
    idModal = "addPlat";
  }

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
              <li
                className={props.isAliment ? "li-onclick" : "li-onclick active"}
              >
                <a onClick={() => props.setIsAliment(false)}>Plats</a>
              </li>
            ) : (
              <li className="li-notonclick">
                <a>Plats</a>
              </li>
            )}
            {props.isAdmin ? (
              <>
                <li
                  className={
                    props.isAliment ? "li-onclick active" : "li-onclick"
                  }
                >
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
                {props.isAdmin ? (
                  <li
                    className="li-add"
                    data-tooltip="Ajouter un nouveau aliment"
                    data-placement="bottom"
                    data-target="addAliment"
                    onClick={handleOpen}
                  >
                    <img src={logo_add} className="logo-add" alt="logo" />
                  </li>
                ) : null}
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
                {props.isAdmin ? (
                  <li
                    className="li-add"
                    data-tooltip="Ajouter un nouveau plat"
                    data-placement="bottom"
                    data-target="addPlat"
                    onClick={handleOpen}
                  >
                    <img src={logo_add} className="logo-add" alt="logo" />
                  </li>
                ) : null}
              </>
            )}
          </ul>
        </nav>
      </div>
      <ModalAdd
        idModal={idModal}
        isOpen={open}
        handleClose={handleClose}
      ></ModalAdd>
    </>
  );
}

export default HeaderNav;
