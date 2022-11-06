import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import API from "../app";

function ModalAddA(props) {
  const animatedComponents = makeAnimated();
  const colourOptions = [
    { value: "ocean", label: "Ocean", color: "#00B8D9" },
    { value: "blue", label: "Blue", color: "#0052CC" },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630" },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];

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
      setItemA({
        nom: event.target.value,
        quantite: itemA.quantite,
        type: itemA.type,
      });
    }
    if (event.target.id === "type") {
      setItemA({
        nom: itemA.nom,
        quantite: itemA.quantite,
        type: event.target.value,
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
                  value={itemA.nom}
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
                value={itemA.type}
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
                value={itemA.quantite}
                onChange={handleChangeA}
                placeholder="Quantité"
                required
              />
            </label>
            <div className="btns">
              <button type="button" onClick={createAliment}>
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
    </>
  );
}

export default ModalAddA;
