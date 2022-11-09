import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logo_add from "../assets/more.svg";
import API from "../app";

import ModalAddP from "./ModalAddP";
import ModalAddA from "./ModalAddA";

function HeaderNav(props) {
  const [openA, setOpenA] = React.useState(false);
  const handleOpenA = () => setOpenA(true);
  const handleCloseA = () => {
    setOpenA(false);
    props.setRefresh(true);
  };
  const [openP, setOpenP] = React.useState(false);
  const handleOpenP = () => setOpenP(true);
  const handleCloseP = () => {
    setOpenP(false);
    props.setRefresh(true);
  };
  var idModalA = "addAliment";
  var idModalP = "addPlat";
  const [option, setOption] = useState(null);

  function handleSelectOpt(event) {
    setOption(event.target.value);
  }

  async function getAlimentsParType() {
    const response = await API.get("aliments/type/" + option);
    props.setAliments(response.data);
  }

  if (option !== null) {
    getAlimentsParType();
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
                  <select onChange={handleSelectOpt}>
                    <option defaultValue="" disabled selected hidden>
                      Filtre : Type d'aliments
                    </option>
                    {props.optsAliments?.map((opt, index) => (
                      <option value={opt} key={index}>
                        {strUcFirst(opt)}
                      </option>
                    ))}
                  </select>
                </li>
                {props.isAdmin ? (
                  <li
                    className="li-add"
                    data-tooltip="Ajouter un nouveau aliment"
                    data-placement="bottom"
                    data-target={idModalA}
                    onClick={handleOpenA}
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
                    data-target={idModalP}
                    onClick={handleOpenP}
                  >
                    <img src={logo_add} className="logo-add" alt="logo" />
                  </li>
                ) : null}
              </>
            )}
          </ul>
        </nav>
      </div>
      <ModalAddP
        idModal={idModalP}
        isOpen={openP}
        handleClose={handleCloseP}
      ></ModalAddP>
      <ModalAddA
        idModal={idModalA}
        isOpen={openA}
        handleClose={handleCloseA}
      ></ModalAddA>
    </>
  );
}

export default HeaderNav;

function strUcFirst(a) {
  return (a + "").charAt(0).toUpperCase() + a.substr(1);
}
