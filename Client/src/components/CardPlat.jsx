import { useState } from "react";
import React from "react";

import ModalUpdateP from "./ModalUpdateP";
import ModalDelete from "./ModalDelete";
import logo_supp from "../assets/delete.svg";

function CardPlat(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [openD, setOpenD] = React.useState(false);
  const handleOpenD = () => setOpenD(true);
  const handleClose = () => {
    setOpen(false);
    setOpenD(false);
    props.setRefresh(true);
  };
  var idModalUpdate = "updatePlat";
  var idModalDelete = "deletePlat";

  return (
    <>
      <article>
        {props.isAdmin ? (
          <>
            <div onClick={handleOpenD}>
              <img src={logo_supp} className="logo-supp" alt="logo" />
            </div>
          </>
        ) : null}
        <div>
          <hgroup>
            <h2 style={{ textAlign: "center" }}>{props.plat.nom}</h2>
            <h3>Liste d'ingrédients :</h3>
          </hgroup>
          {props.plat.aliments?.map((ali, index) => (
            <>
              <div className="gp-ali" key={index}>
                <h5 className="text-ali">{ali.nom}</h5>
                <h5 className="text-ali">{ali.quantite}</h5>
                <h6 className="qte">qté</h6>
              </div>
            </>
          ))}
        </div>
        <div className="price">
          <p>{props.plat.prix} €</p>
        </div>
        <div>
          {props.isAdmin ? (
            <button data-target="updatePlat" onClick={handleOpen}>
              Modifier
            </button>
          ) : (
            <button>Commander</button>
          )}
        </div>
      </article>

      <ModalUpdateP
        idModal={idModalUpdate}
        isOpen={open}
        handleClose={handleClose}
        param={props.plat}
        listAliments={props.getAliments}
      ></ModalUpdateP>
      <ModalDelete
        idModal={idModalDelete}
        isOpen={openD}
        handleClose={handleClose}
        param={props.plat}
      ></ModalDelete>
    </>
  );
}

export default CardPlat;
