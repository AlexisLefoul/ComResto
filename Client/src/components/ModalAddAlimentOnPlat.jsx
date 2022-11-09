import API from "../app";
import Select from "react-select";

function ModalAddAlimentOnPlat(props) {
  function supprimer() {
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
          <h2>Voulez vous supprimer l'aliment ?</h2>
          <Select
            placeholder="Selectionner un type"
            isClearable
            options={props.opts}
          ></Select>
          <form>
            <div className="btns">
              <button type="button" onClick={supprimer}>
                Supprimer
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
