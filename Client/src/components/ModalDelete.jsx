import API from "../app";

function ModalDelete(props) {
  function supprimer() {
    if (props.idModal === "deleteAliment") {
      API.delete("aliments/" + props.param._id).then(() => {
        alert("Aliment supprimé !");
      });
    } else {
      API.delete("plats/" + props.param._id).then(() => {
        alert("Plat supprimé !");
      });
    }
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
          {props.idModal === "deleteAliment" ? (
            <>
              <h2>Voulez vous supprimer l'aliment ?</h2>
              <h3 className="supp-nom">{props.param.nom}</h3>
            </>
          ) : (
            <>
              <h2>Voulez vous supprimer le plat ?</h2>
              <h3 className="supp-nom">{props.param.nom}</h3>
            </>
          )}

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

export default ModalDelete;
