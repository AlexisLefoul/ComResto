import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logo_add from "../assets/more.svg";
import Select from "react-select";

import ModalAddP from "./ModalAddP";
import ModalAddA from "./ModalAddA";

function HeaderNav(props) {
  const [openA, setOpenA] = useState(false);
  const handleOpenA = () => setOpenA(true);
  const handleCloseA = () => {
    setOpenA(false);
    props.setRefresh(true);
  };
  const [openP, setOpenP] = useState(false);
  const handleOpenP = () => setOpenP(true);
  const handleCloseP = () => {
    setOpenP(false);
    props.setRefresh(true);
  };
  var idModalA = "addAliment";
  var idModalP = "addPlat";

  const typesAliment = [];
  const typesPlat = [];

  if (props.isAliment) {
    props.optsAliments?.map((opt) =>
      typesAliment.push({ value: strUcFirst(opt), label: strUcFirst(opt) })
    );
  } else {
    props.optsPlats?.map((opt) =>
      typesPlat.push({ value: strUcFirst(opt), label: strUcFirst(opt) })
    );
  }

  function handleSelectOptA(event) {
    if (event !== null) {
      props.setTypeAliment(event.value);
      props.setRefresh(true);
    } else {
      clearA();
    }
  }

  function handleSelectOptP(event) {
    if (event !== null) {
      props.setTypePlat(event.value);
      props.setRefresh(true);
    } else {
      clearP();
    }
  }

  function clearA() {
    props.setTypeAliment(null);
    props.setRefresh(true);
  }

  function clearP() {
    props.setTypePlat(null);
    props.setRefresh(true);
  }

  return (
    <>
      <div className="header">
        <div className="c-logo">
          <Link to="/menu">
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
                  <Select
                    placeholder="Selectionner un type"
                    onChange={handleSelectOptA}
                    isClearable
                    options={typesAliment}
                    className="react-select-container"
                    classNamePrefix="react-select"
                  ></Select>
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
                  <Select
                    placeholder="Selectionner un type"
                    onChange={handleSelectOptP}
                    isClearable
                    options={typesPlat}
                    className="react-select-container"
                    classNamePrefix="react-select"
                  ></Select>
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
        aliments={props.getAliments}
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
