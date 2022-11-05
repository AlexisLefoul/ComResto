import { useState } from "react";
import React from "react";

import ModalUpdateP from "./ModalUpdateP";

function CardPlat(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  var idModal = "updatePlat";
  return (
    <>
      <article>
        <div>
          <hgroup>
            <h2 style={{ textAlign: "center" }}>{props.plat.nom}</h2>
            <h3>Liste d'ingrédients :</h3>
          </hgroup>
          {props.plat.aliments?.map((ali) => (
            <>
              <div className="gp-ali" key={ali.id}>
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
        idModal={idModal}
        isOpen={open}
        handleClose={handleClose}
        param={props.plat}
      ></ModalUpdateP>
    </>
  );
}

export default CardPlat;
