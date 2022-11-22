import API from "../app";

function ModalCommander(props) {
  function Commander() {
    props.param.aliments.map((ali) => {
      var qteAliment = props.mapAliments.get(ali.idAliment).quantite;
      var newQteAliment = qteAliment - ali.quantite;

      API.put("aliments/update/" + ali.idAliment, {
        nom: ali.nom,
        quantite: newQteAliment,
        type: props.mapAliments.get(ali.idAliment).type,
      }).then((response) => {
        console.log(
          response.status === 204 ? "Aliment mis à jour !" : "Erreur de maj"
        );
      });
    });
    props.handleCloseC();
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
          <h2>Voulez vous commandez ce plat ?</h2>
          <h3 className="supp-nom">{props.param.nom}</h3>

          <form>
            <div className="btns">
              <button type="button" onClick={Commander}>
                Commander
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

export default ModalCommander;
