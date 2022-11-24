import { useState } from "react";
import API from "../api";

function ModalAddA(props) {
  const [itemA, setItemA] = useState({
    nom: "",
    quantite: 0,
    type: "",
  });

  function handleChangeA(event) {
    if (event.target.id === "quantite") {
      setItemA({
        nom: itemA.nom,
        quantite: event.target.value,
        type: itemA.type,
      });
    }
    if (event.target.id === "nom") {
      var n = strUcFirst(event.target.value);
      setItemA({
        nom: n,
        quantite: itemA.quantite,
        type: itemA.type,
      });
    }
    if (event.target.id === "type") {
      var t = strUcFirst(event.target.value);
      setItemA({
        nom: itemA.nom,
        quantite: itemA.quantite,
        type: t,
      });
    }
  }

  function reset() {
    setItemA({
      nom: "",
      quantite: 0,
      type: "",
    });
  }

  function onClick() {
    reset();
    props.handleClose();
  }

  function createAliment() {
    API.post("aliments/add", {
      nom: itemA.nom,
      quantite: itemA.quantite,
      type: itemA.type,
    }).then((response) => {
      setItemA(response.data);
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
            onClick={onClick}
          ></a>
          <h2>Ajouter un aliment</h2>
          <form>
            <div className="grid">
              <label htmlFor="nom">
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={itemA.nom || ""}
                  placeholder="Nom"
                  onChange={handleChangeA}
                  required
                />
              </label>
            </div>
            <label htmlFor="type">
              <input
                type="text"
                id="type"
                name="type"
                value={itemA.type || ""}
                onChange={handleChangeA}
                placeholder="Type"
                required
              />
            </label>
            <label htmlFor="quantite">
              <input
                type="number"
                id="quantite"
                name="quantite"
                value={itemA.quantite || ""}
                onChange={handleChangeA}
                placeholder="Quantité"
                required
              />
            </label>
            <div className="btns">
              {itemA.quantite === 0 ||
              itemA.nom === null ||
              itemA.type === null ? (
                <button type="button" onClick={createAliment} disabled>
                  Ajouter
                </button>
              ) : (
                <button type="button" onClick={createAliment}>
                  Ajouter
                </button>
              )}
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
    </>
  );
}

export default ModalAddA;

function strUcFirst(a) {
  return (a + "").charAt(0).toUpperCase() + a.substr(1);
}
