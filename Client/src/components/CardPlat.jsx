import { useState, useEffect } from "react";
import React from "react";

import API from "../app";
import ModalUpdateP from "./ModalUpdateP";
import ModalDelete from "./ModalDelete";
import ModalCommander from "./ModalCommander";
import logo_supp from "../assets/delete.svg";

function CardPlat(props) {
  const [refreshCard, setRefreshCard] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [openD, setOpenD] = useState(false);
  const handleOpenD = () => setOpenD(true);
  const [openC, setOpenC] = useState(false);
  const handleOpenC = () => setOpenC(true);
  const handleCloseC = () => {
    setOpenC(false);
    props.setRefresh(true);
    window.location.reload(false);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenD(false);
    setOpenC(false);
    props.setRefresh(true);
  };
  var idModalUpdate = "updatePlat";
  var idModalDelete = "deletePlat";
  var idModalCommander = "commanderPlat";

  const [isCommandable, setIsCommandable] = useState(false);
  const [listAliment, setListAliment] = useState(null);
  const quantiteParIdAliment = new Map();

  async function getAliments() {
    const response = await API.get("aliments");
    setListAliment(response.data);
    setRefreshCard(true);
  }

  listAliment?.map((ali) => {
    quantiteParIdAliment.set(ali._id, {
      quantite: ali.quantite,
      type: ali.type,
    });
  });

  function GetIsCommandable() {
    const listIsCommandable = [];

    props.plat.aliments.map((ali) => {
      if (!quantiteParIdAliment.has(ali.idAliment)) {
        listIsCommandable.push(false);
      } else {
        var qteAliment = quantiteParIdAliment.get(ali.idAliment).quantite;

        if (qteAliment === 0 || qteAliment === null) {
          listIsCommandable.push(false);
        } else if (ali.quantite > qteAliment) {
          listIsCommandable.push(false);
        } else if (ali.quantite <= qteAliment) {
          listIsCommandable.push(true);
        }
      }
    });

    if (listIsCommandable.includes(false)) {
      setIsCommandable(false);
    } else {
      setIsCommandable(true);
    }
  }

  function btn_Commander() {
    if (isCommandable) {
      return <button onClick={handleOpenC}>Commander</button>;
    } else {
      return <button disabled>Commander</button>;
    }
  }

  useEffect(() => {
    if (!props.isAdmin) {
      getAliments();
      GetIsCommandable();
    }
  }, [refreshCard]);

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
            btn_Commander()
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
      <ModalCommander
        idModal={idModalCommander}
        isOpen={openC}
        handleCloseC={handleCloseC}
        handleClose={handleClose}
        param={props.plat}
        mapAliments={quantiteParIdAliment}
      ></ModalCommander>
    </>
  );
}

export default CardPlat;
