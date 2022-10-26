import { useState } from "react";

function CardPlat(props) {
  return (
    <>
      <article>
        <div>
          <hgroup>
            <h2>Pomme</h2>
            <h3>Liste d'ingrédients</h3>
          </hgroup>
        </div>
        <div className="price">
          <p>8 €</p>
        </div>
        <div>
          {props.isAdmin ? (
            <button>Modifier</button>
          ) : (
            <button>Commander</button>
          )}
        </div>
      </article>
    </>
  );
}

export default CardPlat;
