import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import logo_add from "../assets/more.svg";
import API from "../app";

function ModalAddP(props) {
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
    quantity: 0,
    type: "",
  });

  const [itemP, setItemP] = useState({
    nom: "",
    price: 0,
    type: "",
    alts: [{ nom: "", quantity: 0 }],
  });

  function handleChangeP(event) {
    if (event.target.id === "nom") {
      setItemP({
        nom: event.target.value,
        price: itemP.price,
        type: itemP.type,
        alts: itemP.alts,
      });
    }
    if (event.target.id === "price") {
      setItemP({
        nom: itemP.nom,
        price: event.target.value,
        type: itemP.type,
        alts: itemP.alts,
      });
    }
    if (event.target.id === "type") {
      setItemP({
        nom: itemP.nom,
        price: itemP.price,
        type: event.target.value,
        alts: itemP.alts,
      });
    }
    console.log(event.target.id);
  }

  function reset() {
    setItemP({
      nom: "",
      price: 0,
      type: "",
      alts: [],
    });
  }

  function onClick() {
    reset();
    props.handleClose();
  }

  function createPlat() {
    API.post("plats/add", { itemP }).then((response) => {
      setItemP(response.data);
    });
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
          <h2>Ajouter un plat</h2>
          <form>
            <div className="grid">
              <label htmlFor="nom">
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={itemP.nom}
                  placeholder="Nom"
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
                  </div>
                </>
              ))}
            </label>
            <label htmlFor="type">
              <input
                type="text"
                id="type"
                name="type"
                value={itemP.type}
                onChange={handleChangeP}
                placeholder="Type"
                required
              />
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
              <button type="button" onClick={createPlat}>
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

export default ModalAddP;
