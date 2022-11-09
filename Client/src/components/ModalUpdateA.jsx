import { useState } from "react";
import API from "../app";

function ModalUpdateA(props) {
  const [itemA, setItemA] = useState({
    nom: props.param.nom,
    quantite: props.param.quantite,
    type: props.param.type,
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
      nom: props.param.nom,
      quantite: props.param.quantite,
      type: props.param.type,
    });
  }

  function onClick() {
    reset();
    props.handleClose();
  }

  function updateAliment() {
    API.put("aliments/update/" + props.param._id, {
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
          <h2>Modifer un aliment</h2>
          <form>
            {props.isUpdateInPlat ? (
              <>
                <div className="grid">
                  <label htmlFor="nom">
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      placeholder="Nom"
                      value={itemA.nom || ""}
                      onChange={handleChangeA}
                      required
                      disabled
                    />
                  </label>
                </div>
              </>
            ) : (
              <>
                <div className="grid">
                  <label htmlFor="nom">
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      placeholder="Nom"
                      value={itemA.nom || ""}
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
                    placeholder="Type"
                    value={itemA.type || ""}
                    onChange={handleChangeA}
                    required
                  />
                </label>
              </>
            )}
            <label htmlFor="quantite">
              <input
                type="number"
                id="quantite"
                name="quantite"
                placeholder="Quantité"
                value={itemA.quantite || ""}
                onChange={handleChangeA}
                required
              />
            </label>
            <div className="btns">
              <button type="button" onClick={updateAliment}>
                Modifer
              </button>
              <button type="button" className="secondary" onClick={onClick}>
                Annuler
              </button>
            </div>
          </form>
        </article>
      </dialog>
    </>
  );
}

export default ModalUpdateA;

function strUcFirst(a) {
  return (a + "").charAt(0).toUpperCase() + a.substr(1);
}
