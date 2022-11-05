import { useState } from "react";
import logo_edit from "../assets/editing.svg";
import logo_add from "../assets/more.svg";
import ModalUpdateA from "./ModalUpdateA";

function ModalUpdateP(props) {
  var idModal = "updateAliment";
  const [open, setOpen] = useState(false);
  const [updateAli, setUpadateAli] = useState({
    id: 0,
    nom: "",
    quantite: 0,
  });

  function handleOpen(i) {
    setOpen(true);
    setUpadateAli({
      id: i._id,
      nom: i.nom,
      quantite: i.quantite,
    });
  }
  const handleClose = () => setOpen(false);

  const [itemP, setItemP] = useState({
    nom: props.param.nom,
    price: props.param.prix,
    alts: props.param.aliments,
  });

  function handleChangeP(event) {
    if (event.target.type === "text") {
      setItemP({
        nom: event.target.value,
        price: itemP.price,
        alts: itemP.alts,
      });
    }
    if (event.target.type === "number") {
      setItemP({ nom: itemP.nom, price: event.target.value, alts: itemP.alts });
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
          <h2>Modifer un plat</h2>
          <form>
            <div className="grid">
              <label htmlFor="nom">
                Nom :
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  placeholder="Nom"
                  value={itemP.nom}
                  onChange={handleChangeP}
                  required
                />
              </label>
            </div>
            <div className="ctn-add">
              <label style={{ margin: 0 }}>Incrédients :</label>
              <img
                aria-label="Add"
                className="add"
                src={logo_add}
                data-target={props.idModal}
              ></img>
            </div>
            <label>
              {itemP.alts?.map((ali) => (
                <>
                  <div className="gp-ali" key={ali.id}>
                    <h5 className="text-ali">{ali.nom}</h5>
                    <h5 className="text-ali">{ali.quantite}</h5>
                    <h6 className="qte">qté</h6>
                    <img
                      aria-label="Edit"
                      className="edit"
                      src={logo_edit}
                      data-target={props.idModal}
                      onClick={() => handleOpen(ali)}
                    ></img>
                  </div>
                </>
              ))}
            </label>
            <label htmlFor="price">
              Prix :
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Prix"
                value={itemP.price}
                onChange={handleChangeP}
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
      <ModalUpdateA
        idModal={idModal}
        isOpen={open}
        handleClose={handleClose}
        param={updateAli}
        isUpdateInPlat={true}
      ></ModalUpdateA>
    </>
  );
}

export default ModalUpdateP;
