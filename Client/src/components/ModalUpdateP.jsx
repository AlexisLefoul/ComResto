import { useState, useEffect } from "react";
import API from "../app";

import logo_add from "../assets/more.svg";
import logo_supp from "../assets/delete.svg";

import ModalAddAlimentOnPlat from "./ModalAddAlimentOnPlat";

function ModalUpdateP(props) {
  var idModalAddAlimentOnPlat = "addAlimentOnPlat";
  const opts = [];

  const [newListAliments, setnewListAliments] = useState(props.listAliments);
  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const [itemP, setItemP] = useState({
    nom: props.param.nom,
    prix: props.param.prix,
    type: props.param.type,
    aliments: props.param.aliments,
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
    if (event.target.id === "type") {
      var t = strUcFirst(event.target.value);
      setItemP({
        nom: itemP.nom,
        prix: itemP.prix,
        type: t,
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
  }

  function supprimer(a) {
    let newListAliments = itemP.aliments.filter((item) => item !== a);
    setItemP({
      nom: itemP.nom,
      prix: itemP.prix,
      type: itemP.type,
      aliments: newListAliments,
    });
  }

  /*useEffect(() => {
    if (props.listAliments !== undefined) {
      props.listAliments.map((ali) => {
        itemP.aliments.map((element) => {
          if (element.idAliment !== ali._id) {
            opts.push({
              id: ali._id,
              value: ali.nom,
              label: strUcFirst(ali.nom),
            });
          }
        });
      });
      const optsAlis = [...new Set(opts)];
      console.log(optsAlis);
    }
  }, [props.isOpen]);*/

  if (props.listAliments !== undefined) {
    props.listAliments.map((ali) =>
      opts.push({ id: ali._id, value: ali.nom, label: strUcFirst(ali.nom) })
    );
  }

  function reset() {
    setItemP({
      nom: props.param.nom,
      prix: props.param.prix,
      type: props.param.type,
      aliments: props.param.aliments,
    });
  }

  function updatePlat() {
    API.put("plats/update/" + props.param._id, {
      nom: itemP.nom,
      prix: itemP.prix,
      type: itemP.type,
      aliments: itemP.aliments,
    }).then((response) => {
      setItemP(response.data);
    });
    reset();
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
            onClick={props.handleClose}
          ></a>
          <h2>Modifer un plat</h2>
          <form>
            <div className="grid">
              <label htmlFor="nom">
                Nom :
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  placeholder="Nom"
                  value={itemP.nom || ""}
                  onChange={handleChangeP}
                  required
                />
              </label>
            </div>
            <label htmlFor="type">
              Type :
              <input
                type="text"
                id="type"
                name="type"
                placeholder="type"
                value={itemP.type || ""}
                onChange={handleChangeP}
                required
              />
            </label>
            <div className="ctn-add">
              <label style={{ margin: 0 }}>Incrédients :</label>
              <img
                aria-label="Add"
                className="add"
                src={logo_add}
                data-target={idModalAddAlimentOnPlat}
                onClick={handleOpenAdd}
              ></img>
            </div>
            <label>
              {itemP.aliments?.map((ali) => (
                <>
                  <div className="gp-ali" key={ali.id}>
                    <h5 className="text-ali">{ali.nom}</h5>
                    <h5 className="text-ali">{ali.quantite}</h5>
                    <h6 className="qte">qté</h6>
                    <img
                      aria-label="Supprimer"
                      className="supprimer"
                      src={logo_supp}
                      onClick={() => supprimer(ali)}
                    ></img>
                  </div>
                </>
              ))}
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
              <button type="button" onClick={updatePlat}>
                Modifer
              </button>
              <button
                type="button"
                className="secondary"
                onClick={props.handleClose}
              >
                Annuler
              </button>
            </div>
          </form>
        </article>
      </dialog>

      <ModalAddAlimentOnPlat
        idModal={idModalAddAlimentOnPlat}
        isOpen={openAdd}
        handleClose={handleCloseAdd}
        opts={opts}
        listAliments={itemP.aliments}
      ></ModalAddAlimentOnPlat>
    </>
  );
}

export default ModalUpdateP;

function strUcFirst(a) {
  return (a + "").charAt(0).toUpperCase() + a.substr(1);
}
