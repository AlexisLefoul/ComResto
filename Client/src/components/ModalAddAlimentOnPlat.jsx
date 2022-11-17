import Select from "react-select";
import { useState, useRef } from "react";

function ModalAddAlimentOnPlat(props) {
  const selectInputRef = useRef();

  const [itemA, setItemA] = useState({
    nom: "",
    quantite: 0,
    idAliment: "",
  });

  function handleChangeA(event) {
    setItemA({
      nom: itemA.nom,
      idAliment: itemA.idAliment,
      quantite: event.target.value,
    });
  }

  function handleSelectOpt(event) {
    if (event !== null) {
      setItemA({
        nom: event.value,
        idAliment: event.id,
        quantite: itemA.quantite,
      });
    }
  }

  function ajouter() {
    props.listAliments.push(itemA);
    setItemA({
      nom: "",
      quantite: 0,
      idAliment: "",
    });
    selectInputRef.current.clearValue();
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
            <Select
              ref={selectInputRef}
              placeholder="Selectionner un type"
              isClearable
              options={props.opts}
              className="react-select-container selectAliment"
              classNamePrefix="react-select"
              id="nom"
              required
              onChange={handleSelectOpt}
            ></Select>
            <label htmlFor="quantite" className="labelQte">
              <input
                type="number"
                id="quantite"
                name="quantite"
                value={itemA.quantite || ""}
                onChange={handleChangeA}
                placeholder="Quantité"
                required
                style={{ height: 45 }}
              />
            </label>
            <div className="btns">
              {itemA.quantite === 0 ? (
                <button type="button" onClick={ajouter} disabled>
                  Ajouter
                </button>
              ) : (
                <button type="button" onClick={ajouter}>
                  Ajouter
                </button>
              )}

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
