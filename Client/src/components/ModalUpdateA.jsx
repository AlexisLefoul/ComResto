import { useState } from "react";

function ModalUpdateA(props) {
  const [itemA, setItemA] = useState({
    nom: props.param.nom,
    type: props.param.type,
    quantity: props.param.quantity,
  });

  function handleChangeA(event) {
    if (event.target.type === "number") {
      setItemA({
        nom: itemA.nom,
        quantity: event.target.value,
        type: itemA.type,
      });
    }
    if (event.target.type === "text") {
      setItemA({
        nom: event.target.value,
        quantity: itemA.quantity,
        type: itemA.type,
      });
    }
    if (event.target.name === "type") {
      setItemA({
        nom: itemA.nom,
        quantity: itemA.quantity,
        type: event.target.value,
      });
    }
  }

  const opts = [
    { value: "ocean", label: "Ocean" },
    { value: "blue", label: "Blue" },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "forest", label: "Forest" },
    { value: "slate", label: "Slate" },
    { value: "silver", label: "Silver" },
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
                      value={itemA.nom}
                      onChange={handleChangeA}
                      required
                      disabled
                    />
                  </label>
                </div>
                <label htmlFor="type">
                  <input
                    type="text"
                    id="type"
                    name="type"
                    placeholder="Type"
                    value={itemA.type}
                    onChange={handleChangeA}
                    required
                    style={{ display: "none" }}
                  />
                </label>
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
                      value={itemA.nom}
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
                    value={itemA.type}
                    onChange={handleChangeA}
                    required
                  />
                </label>
              </>
            )}
            <label htmlFor="quantity">
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Quantité"
                value={itemA.quantity}
                onChange={handleChangeA}
                required
              />
            </label>
            <div className="btns">
              <button type="button">Modifer</button>
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
    </>
  );
}

export default ModalUpdateA;
