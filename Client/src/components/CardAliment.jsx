import { useState } from "react";
import React from "react";

import ModalUpdateA from "./ModalUpdateA";

function CardAliment(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  var idModal = "updateAliment";

  return (
    <>
      <article className="center">
        <div>
          <h2>{props.aliment.nom}</h2>
        </div>
        <div className="qtn">
          <h4 style={{ margin: 'auto', color: '#2a2a2a', marginRight: 15 }}>Quantités :</h4>
          <p style={{ margin: 'auto', marginLeft: 0 }}>{props.aliment.quantity}</p>
        </div>
        <div>
          <button data-target="updateAliment" onClick={handleOpen}>
            Modifier
          </button>
        </div>
      </article>

      <ModalUpdateA
        idModal={idModal}
        isOpen={open}
        handleClose={handleClose}
        param={props.aliment}
      ></ModalUpdateA>
    </>
  );
}

export default CardAliment;
