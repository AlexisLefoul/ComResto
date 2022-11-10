import API from "../app";
import Select from "react-select";
import { useState } from "react";

function ModalAddAlimentOnPlat(props) {
  const [itemA, setItemA] = useState({
    nom: "",
    quantite: 0,
    id: "",
  });

  function handleChangeA(event) {
    if (event.target === undefined) {
      console.log(event);
      setItemA({
        nom: event.value,
        id: event.id,
        quantite: itemA.quantite,
      });
    } else {
      setItemA({
        nom: itemA.nom,
        id: itemA.id,
        quantite: event.target.value,
      });
    }
  }

  function ajouter() {
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
          <h2>Ajouter un aliment au plat</h2>

          <form>
            <label htmlFor="nom" className="selectAliment">
              <Select
                placeholder="Selectionner un type"
                isClearable
                options={props.opts}
                className="react-select-container"
                classNamePrefix="react-select"
                id="nom"
                onChange={handleChangeA}
              ></Select>
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
              <button type="button" onClick={ajouter}>
                Ajouter
              </button>
              <button
                type="button"
                className="secondary"
                data-target={props.idModal}
                onClick={props.handleClose}
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

export default ModalAddAlimentOnPlat;
