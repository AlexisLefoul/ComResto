import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import logo_add from "../assets/more.svg";
import API from "../app";

import ModalAddAlimentOnPlat from "./ModalAddAlimentOnPlat";

function ModalAddP(props) {
  const opts = [];
  const idModal = "addAlimentOnPlat";
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  props.aliments.map((ali) =>
    opts.push({ id: ali._id, value: ali.nom, label: strUcFirst(ali.nom) })
  );

  const [itemA, setItemA] = useState({
    nom: "",
    quantite: 0,
    type: "",
  });

  const [itemP, setItemP] = useState({
    nom: "",
    prix: 0,
    type: "",
    aliments: [],
  });

  function handleChangeP(event) {
    if (event.target.id === "nom") {
      var n = strUcFirst(event.target.value);
      setItemP({
        nom: n,
        prix: itemP.prix,
        type: itemP.type,
        aliments: itemP.aliments,
      });
    }
    if (event.target.id === "prix") {
      setItemP({
        nom: itemP.nom,
        prix: event.target.value,
        type: itemP.type,
        aliments: itemP.aliments,
      });
    }
    if (event.target.id === "type") {
      var t = strUcFirst(event.target.value);
      setItemP({
        nom: itemP.nom,
        prix: itemP.prix,
        type: t,
        aliments: itemP.aliments,
      });
    }
  }

  function reset() {
    setItemP({
      nom: "",
      prix: 0,
      type: "",
      aliments: [],
    });
  }

  function onClick() {
    reset();
    props.handleClose();
  }

  function createPlat() {
    API.post("plats/add", {
      nom: itemP.nom,
      prix: itemP.prix,
      type: itemP.type,
      aliments: itemP.aliments,
    }).then((response) => {
      setItemP(response.data);
    });
    props.handleClose();
  }

  return (
    <>
      <dialog
        id={props.idModal}
        open={props.isOpen}
        onClose={props.handleClose}
      >
        <article className="modal">
          <a
            aria-label="Close"
            className="close"
            data-target={props.idModal}
            onClick={onClick}
          ></a>
          <h2>Ajouter un plat</h2>
          <form>
            <div className="grid">
              <label htmlFor="nom">
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={itemP.nom || ""}
                  placeholder="Nom"
                  onChange={handleChangeP}
                  required
                />
              </label>
            </div>
            <div className="ctn-add">
              <label style={{ margin: 0 }}>Incrédients :</label>
              <img
                aria-label="Add"
                className="add"
                src={logo_add}
                data-target={idModal}
                onClick={handleOpen}
              ></img>
            </div>
            <label>
              {itemP.aliments?.map((ali, index) => (
                <>
                  <div className="gp-ali" key={index}>
                    <h5 className="text-ali">{ali.nom}</h5>
                    <h5 className="text-ali">{ali.quantite}</h5>
                    <h6 className="qte">qté</h6>
                  </div>
                </>
              ))}
            </label>
            <label htmlFor="type">
              <input
                type="text"
                id="type"
                name="type"
                value={itemP.type || ""}
                onChange={handleChangeP}
                placeholder="Type"
                required
              />
            </label>
            <label htmlFor="prix">
              Prix :
              <input
                type="number"
                id="prix"
                name="prix"
                placeholder="Prix"
                value={itemP.prix || ""}
                onChange={handleChangeP}
                required
              />
            </label>
            <div className="btns">
              <button type="button" onClick={createPlat}>
                Ajouter
              </button>
              <button
                type="button"
                className="secondary"
                data-target={props.idModal}
                onClick={onClick}
              >
                Annuler
              </button>
            </div>
          </form>
        </article>
      </dialog>

      <ModalAddAlimentOnPlat
        idModal={idModal}
        isOpen={open}
        handleClose={handleClose}
        opts={opts}
      ></ModalAddAlimentOnPlat>
    </>
  );
}

export default ModalAddP;

function strUcFirst(a) {
  return (a + "").charAt(0).toUpperCase() + a.substr(1);
}
