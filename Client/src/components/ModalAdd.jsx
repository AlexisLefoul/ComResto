import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

function ModalAdd(props) {
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
          {props.idModal === "addPlat" ? (
            <h2>Ajouter un plat</h2>
          ) : (
            <h2>Ajouter un aliment</h2>
          )}
          <form>
            <div className="grid">
              <label htmlFor="nom">
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  placeholder="Nom"
                  required
                />
              </label>
            </div>
            {props.idModal === "addPlat" ? (
              <label>
                Pick your favorite flavor:
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  defaultValue={[colourOptions[4], colourOptions[5]]}
                  isMulti
                  options={colourOptions}
                />
              </label>
            ) : (
              <>
                <label htmlFor="type">
                  <input
                    type="text"
                    id="type"
                    name="type"
                    placeholder="Type"
                    required
                  />
                </label>
                <label htmlFor="quantity">
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    placeholder="Quantité"
                    required
                  />
                </label>
              </>
            )}
            <div className="btns">
              <button type="submit">Ajouter</button>
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

export default ModalAdd;
