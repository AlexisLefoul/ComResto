import { useState } from "react";
import React from "react";

import ModalUpdateA from "./ModalUpdateA";
import ModalDelete from "./ModalDelete";
import logo_supp from "../assets/delete.svg";

function CardAliment(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [openD, setOpenD] = React.useState(false);
  const handleOpenD = () => setOpenD(true);
  const handleClose = () => {
    setOpen(false);
    setOpenD(false);
    props.setRefresh(true);
  };
  var idModalUpdate = "updateAliment";
  var idModalDelete = "deleteAliment";

  return (
    <>
      <article className="center">
        <div onClick={handleOpenD}>
          <img src={logo_supp} className="logo-supp" alt="logo" />
        </div>
        <div>
          <h2>{props.aliment.nom}</h2>
        </div>
        <div className="qtn">
          <h4 style={{ margin: "auto", color: "#2a2a2a", marginRight: 15 }}>
            Quantités :
          </h4>
          <p style={{ margin: "auto", marginLeft: 0 }}>
            {props.aliment.quantite}
          </p>
        </div>
        <div>
          <button data-target="updateAliment" onClick={handleOpen}>
            Modifier
          </button>
        </div>
      </article>

      <ModalUpdateA
        idModal={idModalUpdate}
        isOpen={open}
        handleClose={handleClose}
        param={props.aliment}
      ></ModalUpdateA>
      <ModalDelete
        idModal={idModalDelete}
        isOpen={openD}
        handleClose={handleClose}
        param={props.aliment}
      ></ModalDelete>
    </>
  );
}

export default CardAliment;
